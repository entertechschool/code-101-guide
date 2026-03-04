# Plan: Centralización de Skills para EnterTechSchool

## TL;DR

Centralizar los ~8 skills genéricos de Claude Code que hoy están duplicados y divergentes en 7+ repos de cursos, usando un repo compartido + symlinks (Fase 1), con migración futura a Plugin Marketplace (Fase 2). El orquestador `class-builder` se crea después de centralizar.

---

## Investigación Completa

### Estado actual de la org entertechschool

**Repos con skills activos (7):**

| Repo | Skills | Skills únicos |
|------|--------|---------------|
| code-101-guide | 8 | — |
| code-201-guide | 8 | `lint-links` (en vez de lint-markdown) |
| code-301-guide | 9 | `grade-lab` |
| ai-101-guide | 8 | — |
| cyber-101-guide | 9 | `class-audit` |
| data-101-guide | 8 | — |
| ai-workshop-guide | 0 | (solo settings.local.json) |

**Repos sin skills:** cyber-201-guide, ncode-101-guide, common_curriculum, public, mallas.

**8 skills genéricos compartidos:** module-planner, class-readme, class-lab, class-slides, class-facilitator, evaluation-class, lint-markdown, module-test.

**3 skills curso-específicos:** grade-lab (code-301), class-audit (cyber-101), lint-links (code-201).

### Problema: divergencia masiva

Los skills del mismo nombre tienen contenido MUY diferente entre repos:

| Skill | code-101 | code-201 | code-301 | ai-101 | cyber-101 | data-101 |
|-------|----------|----------|----------|--------|-----------|----------|
| module-planner | 484 lín | 341 lín | 518 lín | 259 lín | 304 lín | 93 lín |
| class-lab | 714 lín | 357 lín | 336 lín | 363 lín | 575 lín | 243 lín |
| lint-markdown | 234 lín | — | 158 lín | 225 lín | — | — |

Además, los **nombres en frontmatter** han divergido:
- `class-readme` vs `class-readme-generator`
- `facilitator-guide` vs `class-facilitator`
- `evaluacion-clase` vs `evaluation-class`

### No existe orquestador

`module-planner` solo genera `MODULE-PLAN.md` y se detiene. El diagrama de flujo en su SKILL.md (module-planner → class-readme → class-lab → class-slides → class-facilitator → evaluation-class) es **documentación para el humano**, no automatización. Cada skill se invoca manualmente, uno por uno.

### Infraestructura Claude Code existente

- **Global `~/.claude/skills/`:** 5 skills (3 locales + 2 symlinks a `~/.agents/skills/`)
- **Global `~/.claude/settings.json`:** 1 plugin habilitado (`code-simplifier@claude-plugins-official`)
- **No existe `.mcp.json`** en ningún repo
- **No existen git submodules** en ningún repo
- **No existe plugin marketplace** propio

---

## Investigación de alternativas (web research, marzo 2026)

### Mecanismos nativos de Claude Code para compartir skills

| Mecanismo | Cómo funciona | Scope |
|-----------|---------------|-------|
| `~/.claude/skills/` | Skills disponibles en todos los proyectos | Personal (1 dev) |
| `.claude/skills/` en repo | Committed al repo, team-shareable | Proyecto |
| Plugin System | Bundle de skills + MCP + hooks instalable | Proyecto o personal |
| Plugin Marketplace | Repo Git que indexa plugins, instalable vía `claude plugin marketplace add` | Org |
| `--add-dir` flag | Apunta Claude a un directorio extra al inicio de sesión | Sesión |
| Managed Settings (Enterprise) | MDM-deployed, force-install skills | Org (requiere tier Enterprise) |
| Symlinks per-skill | Symlink de `.claude/skills/X` → directorio externo | Manual |

**Limitación confirmada (issue #18192):** Claude Code NO sigue symlinks de directorio recursivamente. Los symlinks deben ser **per-skill** (un symlink por cada carpeta de skill), no un symlink a un directorio padre.

### Sistema de Plugins (el más relevante)

Un plugin es un directorio con:
```
mi-plugin/
├── .claude-plugin/
│   └── plugin.json     # { "name": "mi-plugin", "version": "1.0.0" }
└── skills/
    ├── skill-a/SKILL.md
    └── skill-b/SKILL.md
```

Un marketplace es un repo Git con:
```
mi-marketplace/
├── marketplace.json    # { "name": "mi-org", "plugins": [...] }
└── plugins/
    └── mi-plugin/
         ├── .claude-plugin/plugin.json
         └── skills/...
```

**Workflow:**
1. `claude plugin marketplace add org/repo` — registra el marketplace
2. `claude plugin install mi-plugin@mi-org --scope project` — instala el plugin
3. Skills del plugin disponibles como `/mi-org:skill-a`
4. Skills locales en `.claude/skills/` toman precedencia sobre plugin skills

**Config en repo:** `enabledPlugins` en `.claude/settings.json` se commitea, team-shareable.

### Herramientas de terceros relevantes

| Herramienta | Descripción | URL |
|-------------|-------------|-----|
| skillshare | Go CLI que sincroniza skills desde un source central a múltiples AI CLIs vía symlinks | github.com/runkids/skillshare |
| skills-supply | Manifiesto `agents.toml` para declarar skills multi-CLI | github.com/803/skills-supply |
| claude-code-config-sync | Sincroniza `.claude/` completo entre máquinas vía Git | npm: claude-code-config-sync |

### Referencia: repo oficial de skills de Anthropic

`github.com/anthropics/skills` — repo público con skills de ejemplo, registrado como marketplace oficial. Se instala con `claude plugin marketplace add anthropics/skills`.

---

## Top 3 Alternativas Analizadas

### Alternativa A: Plugin Marketplace (Git-hosted)

```
entertechschool/ets-claude-plugins (GitHub repo)
 ├── marketplace.json
 └── plugins/
      └── ets-curriculum/
           ├── .claude-plugin/plugin.json
           └── skills/
                ├── module-planner/SKILL.md
                ├── class-readme/SKILL.md
                ├── class-lab/SKILL.md
                ├── class-slides/SKILL.md
                ├── class-facilitator/SKILL.md
                ├── evaluation-class/SKILL.md
                ├── lint-markdown/SKILL.md
                ├── module-test/SKILL.md
                └── class-builder/SKILL.md    ← orquestador (Fase 2)

Cada curso:
 └── .claude/
      ├── settings.json  → enabledPlugins: { "ets-curriculum@entertechschool": true }
      └── skills/        → SOLO overrides y skills específicos del curso
```

| Aspecto | Detalle |
|---------|---------|
| Skills genéricos | Viven en el plugin, se instalan con `claude plugin install` |
| Overrides | `.claude/skills/X/SKILL.md` local toma precedencia sobre plugin |
| Skills de curso | Permanecen en `.claude/skills/` |
| Actualización | PR al marketplace → merge → `claude plugin update` |
| Setup nuevo curso | 2 comandos: `marketplace add` + `plugin install` |
| Esfuerzo | **MEDIO** (3-5 días) |

**Pros:** Nativo Claude Code, versionado, team-shareable vía VCS, escalable.
**Contras:** Sistema de plugins nuevo (early 2026), cada dev registra marketplace, update en 2 pasos.

---

### Alternativa B: Git Submodule + Override Layer

```
entertechschool/shared-skills (GitHub repo)
 ├── module-planner/SKILL.md
 └── ... (8 skills genéricos)

Cada curso:
 └── .claude/
      ├── shared-skills/          ← git submodule
      ├── overrides/              ← versiones custom de skills genéricos
      ├── skills/                 ← GENERADO por merge-skills.sh (gitignored)
      └── merge-skills.sh
```

| Aspecto | Detalle |
|---------|---------|
| Skills genéricos | Submodule, copiados a `skills/` por merge script |
| Overrides | Directorio explícito `overrides/` |
| Version pinning | Sí — cada repo pinea a un commit del submodule |
| Actualización | `git submodule update --remote` + script + commit pointer |
| Esfuerzo | **BAJO-MEDIO** (2-4 días) |

**Pros:** Pure Git, override explícito, auditable, funciona offline, version pinning.
**Contras:** Submodule tax, merge script requerido, `skills/` es generado.

---

### Alternativa C: Symlinks a Clone Local ← ELEGIDA PARA FASE 1

```
~/.entertechschool/shared-skills/       ← clone local (cada dev)
 ├── module-planner/SKILL.md
 └── ... (8 skills genéricos)

Cada curso:
 └── .claude/
      └── skills/
           ├── module-planner → ~/.entertechschool/shared-skills/module-planner  (symlink)
           ├── class-lab/SKILL.md    ← archivo real = override
           ├── grade-lab/SKILL.md    ← curso-específico
           └── ...

+ script: ets-sync-skills
```

| Aspecto | Detalle |
|---------|---------|
| Skills genéricos | Symlinks per-skill a clone local |
| Overrides | Archivo real reemplaza symlink |
| Actualización | `cd ~/.entertechschool/shared-skills && git pull` — afecta todos los repos |
| Setup nuevo curso | Ejecutar `ets-sync-skills` |
| Esfuerzo | **BAJO** (1-3 días) |

**Pros:** Propagación instantánea, zero submodule overhead, mínimo tooling.
**Contras:** Sin version pinning, no auditable per-repo, requiere clone local.

---

## Matriz Comparativa

| Dimensión | A: Plugin | B: Submodule | C: Symlinks |
|-----------|-----------|--------------|-------------|
| Esfuerzo | Medio (3-5d) | Bajo-Medio (2-4d) | **Bajo (1-3d)** |
| Nativo Claude Code | ✅ | ❌ | ⚠️ Parcial |
| Version pinning | ✅ | ✅ | ❌ |
| Team-shareable VCS | ✅ | ✅ | ❌ |
| Fricción update | Media | Media | **Baja** |
| CI/CD | ✅ | ✅ | ⚠️ |
| Future-proof | ✅ Alta | ⚠️ Media | ⚠️ Baja |

---

## Decisiones del usuario

1. **Estrategia:** Fase 1 primero (symlinks), migrar a Plugin Marketplace después
2. **Orquestador:** Después de centralizar (no incluido en Fase 1)

---

## Plan de Implementación — Fase 1

### Paso 1: Reconciliar skills divergentes → versiones canónicas

**Este es el trabajo más importante, independiente de la alternativa.**

Estrategia:
- Tomar la versión más madura como base (generalmente code-101 o code-301)
- Extraer todo lo curso-específico y parametrizarlo (el skill lee contexto del CLAUDE.md local)
- Normalizar nombres al estándar

| Skill | Base sugerida | Acción principal |
|-------|--------------|------------------|
| `module-planner` | code-301 (518 lín) | Extraer refs a "Code 301", parametrizar |
| `class-lab` | code-101 (714 lín) | Extraer tipos de lab específicos |
| `class-readme` | code-101 (~60 lín) | Normalizar nombre a `class-readme` |
| `class-slides` | code-101 (~150 lín) | Mínima adaptación |
| `class-facilitator` | code-101 (~120 lín) | Mínima adaptación |
| `evaluation-class` | code-101 (~130 lín) | Normalizar nombre a `evaluation-class` |
| `lint-markdown` | code-101 (234 lín) | Considerar merge con lint-links |
| `module-test` | code-101 (~100 lín) | Mínima adaptación |

**Archivos a comparar (6 versiones de cada skill):**
- `code-101-guide/.claude/skills/*/SKILL.md`
- `code-201-guide/.claude/skills/*/SKILL.md`
- `code-301-guide/.claude/skills/*/SKILL.md`
- `ai-101-guide/.claude/skills/*/SKILL.md`
- `cyber-101-guide/.claude/skills/*/SKILL.md`
- `data-101-guide/.claude/skills/*/SKILL.md`

### Paso 2: Crear repo `entertechschool/shared-skills`

Estructura:
```
shared-skills/
├── README.md                  ← instrucciones de setup
├── CLAUDE.md                  ← reglas para modificar skills compartidos
├── bin/
│   └── ets-sync-skills        ← script de sincronización
├── module-planner/SKILL.md
├── class-readme/SKILL.md
├── class-lab/SKILL.md
├── class-slides/SKILL.md
├── class-facilitator/SKILL.md
├── evaluation-class/SKILL.md
├── lint-markdown/SKILL.md
└── module-test/SKILL.md
```

### Paso 3: Escribir `ets-sync-skills`

```bash
#!/bin/bash
# ets-sync-skills - Sincroniza skills compartidos de EnterTechSchool
SHARED=~/.entertechschool/shared-skills
TARGET=.claude/skills

# Verificar clone
if [ ! -d "$SHARED" ]; then
  echo "Clonando shared-skills..."
  mkdir -p ~/.entertechschool
  git clone git@github.com:entertechschool/shared-skills.git "$SHARED"
fi

# Sincronizar
for skill_dir in "$SHARED"/*/; do
  skill=$(basename "$skill_dir")
  [[ "$skill" == "bin" || "$skill" == ".git" ]] && continue

  if [ -L "$TARGET/$skill" ] || [ ! -e "$TARGET/$skill" ]; then
    ln -sfn "$SHARED/$skill" "$TARGET/$skill"
    echo "  → $skill (shared)"
  else
    echo "  ✦ $skill (override local)"
  fi
done

echo ""
echo "Skills sincronizados. Para actualizar: cd $SHARED && git pull"
```

### Paso 4: Migrar code-101-guide (prueba de concepto)

1. Clonar shared-skills a `~/.entertechschool/shared-skills/`
2. En code-101-guide: ejecutar `ets-sync-skills`
3. Verificar que cada skill funciona: `/module-planner`, `/class-lab`, `/class-slides`, `/class-facilitator`, `/evaluation-class`, `/class-readme`, `/lint-markdown`, `/module-test`
4. Commit: eliminar copias locales reemplazadas por symlinks, agregar symlinks
5. Actualizar `CLAUDE.md` → nueva sección "Skills Compartidos"

### Paso 5: Rollout a demás repos

Para cada repo:
1. Ejecutar `ets-sync-skills`
2. Identificar skills que necesitan override (archivo real en vez de symlink)
3. Mantener skills curso-específicos (grade-lab, class-audit, lint-links) como archivos reales
4. Commit
5. Actualizar CLAUDE.md

### Paso 6: Documentar

Actualizar CLAUDE.md de cada repo con:
- Sección "Skills Compartidos" → referencia al repo shared-skills
- Cómo hacer override: "reemplazar el symlink con un archivo real"
- Lista de skills curso-específicos que permanecen locales
- Instrucciones de onboarding para nuevos devs

---

## Qué NO cambia

- `CLAUDE.md` de cada repo sigue siendo fuente de verdad del curso
- Skills curso-específicos permanecen en `.claude/skills/` de cada repo
- `settings.local.json` permanece por repo
- Flujo de creación de clases (manual: readme → lab → slides → facilitator)
- Estructura de curriculum (`curriculum/class-XX/`)

---

## Verificación

1. **Funcionalidad:** Invocar cada skill compartido en code-101-guide → debe funcionar igual
2. **Symlinks:** `ls -la .claude/skills/` muestra → apuntando a shared-skills
3. **Propagación:** Editar skill en shared-skills, verificar cambio inmediato en code-101
4. **Override:** Crear archivo real en `.claude/skills/class-lab/SKILL.md`, verificar precedencia
5. **Segundo repo:** Repetir en ai-101-guide para confirmar portabilidad
6. **Curso-específico:** Verificar que `grade-lab` sigue funcionando en code-301

---

## Roadmap posterior

| Fase | Qué | Cuándo |
|------|-----|--------|
| 2a | Crear skill `class-builder` (orquestador) en shared-skills | Después de validar Fase 1 |
| 2b | Migrar de symlinks a Plugin Marketplace | Cuando el equipo estabilice skills canónicos |
| 2c | Evaluar `skillshare` CLI como alternativa al script propio | Opcional |

---

## Archivos críticos

| Archivo | Para qué |
|---------|----------|
| `code-101-guide/.claude/skills/module-planner/SKILL.md` | Base para reconciliación (484 lín) |
| `code-301-guide/.claude/skills/module-planner/SKILL.md` | Versión más completa (518 lín) |
| `data-101-guide/.claude/skills/module-planner/SKILL.md` | Versión mínima (93 lín) |
| `code-101-guide/.claude/settings.local.json` | Patrón de permisos |
| `code-101-guide/CLAUDE.md` | Sección skills a actualizar |
| `code-301-guide/.claude/skills/grade-lab/SKILL.md` | Ejemplo de skill curso-específico |
| `cyber-101-guide/.claude/skills/class-audit/SKILL.md` | Ejemplo de skill curso-específico |
