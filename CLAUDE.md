# CLAUDE.md - Code 101 Guide

## Referencia Principal

- **Syllabus (fuente de verdad):** [README.md](README.md)
- **Estructura:** 3 módulos (4 clases c/u) = 12 clases
- **Formato:** 180 min por clase (blend)

---

## Sistema de Skills

Este proyecto usa skills de Claude para generar contenido consistente.

### Skills Disponibles

| Skill | Propósito | Output |
|-------|-----------|--------|
| `module-planner` | Planificar módulo completo (4 clases) | `MODULE-PLAN.md` |
| `class-readme` | README de clase para estudiante | `README.md` |
| `class-lab` | Laboratorio paso a paso | `lab/README.md` |
| `class-slides` | Presentación reveal.js | `slides/README.md` |
| `class-facilitator` | Guía pedagógica | `facilitator/README.md` |
| `evaluation-class` | Verificar calidad | Reporte |
| `lint-links` | Validar enlaces externos | Reporte/Corrección |

### Flujo de Creación

```
module-planner → MODULE-PLAN.md (aprobar)
       ↓
Para cada clase:
  class-readme → class-lab → class-slides → class-facilitator
       ↓
evaluation-class (verificar)
```

Ver detalles en `.claude/skills/*/SKILL.md`

---

## Progreso del Curso

Ver contenido por clase en [README.md → Referencia Rápida](README.md).

| Módulo | Estado | Proyecto |
|--------|--------|----------|
| M1 (1-4) | ✅ Completo | Mi Perfil Personal |
| M2 (5-8) | 🔄 En desarrollo | MyLinks |
| M3 (9-12) | ⏳ Pendiente | Por definir |

---

## Convenciones por Archivo

Cada clase tiene 4-5 archivos en `curriculum/class-XX/`:

| Archivo | Propósito | Límite |
|---------|-----------|--------|
| `README.md` | Resumen + preparación | ~150 líneas |
| `lab/README.md` | Laboratorio paso a paso | Regular: <400, Calificado: <500 |
| `lab/rubric.md` | Rúbrica (solo 4, 8, 12) | 5 criterios x 20 pts |
| `slides/README.md` | Presentación | ≤12 slides |
| `facilitator/README.md` | Guía pedagógica | <300 líneas |

### Tipos de Lab

| Tipo | Clases | Partes | Tiempo | Rúbrica |
|------|--------|--------|--------|---------|
| Regular | 1-3, 5-7, 9-11 | 3 | ~90 min (en clase) | No |
| Calificado | 4, 8 | 5 | ~135 min (50/50) | 5x20 pts |
| Demo Day | 12 | Especial | Variable | Especial |

---

## Sistema de Evaluación

### Labs Calificados

| Módulo | Clase | Rúbrica |
|--------|-------|---------|
| M1 | 4 | `class-04/lab/rubric.md` |
| M2 | 8 | `class-08/lab/rubric.md` |
| M3 | 12 | Demo Day (especial) |

### Estructura Rúbrica (5 x 20 = 100 pts)

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|---------------|------------|-------------------|----------|
| Criterio 1 | ... | ... | ... | ... |
| Criterio 2 | ... | ... | ... | ... |
| Criterio 3 | ... | ... | ... | ... |
| Criterio 4 | ... | ... | ... | ... |
| **Desafío** | ... | ... | ... | ... |

**Escala:** A (90-100), B (80-89), C (70-79), F (<70)

---

## Referencias de Estilo

| Documento | Tono | Notas |
|-----------|------|-------|
| README.md | Profesional, inspirador | Segunda persona |
| lab/README.md | Práctico, paso a paso | Checkpoints visuales |
| slides/README.md | Educativo, conversacional | Transiciones explícitas |
| facilitator/README.md | Reflexivo, mentor-a-mentor | Contexto histórico |

**Idioma:** Español latinoamericano
**Emojis:** Estratégicos (no excesivos)

---

## Reglas de Encoding

**SIEMPRE usar UTF-8 puro.**

- Tildes directas: á, é, í, ó, ú, ñ, ü
- Signos: ¿?, ¡!
- Si aparecen `�` o `\u00f3`, el archivo está corrupto

---

## Enlaces Externos

**SIEMPRE** usar `{:target="_blank"}` en enlaces a páginas externas (sintaxis Kramdown):

```markdown
✅ Correcto:
[VS Code](https://code.visualstudio.com/){:target="_blank"}
[Google Fonts](https://fonts.google.com/){:target="_blank"}

❌ Incorrecto:
[VS Code](https://code.visualstudio.com/)
```

**Excepción:** Enlaces internos NO llevan target:
- Anclas: `[Sección](#seccion)`
- Rutas relativas: `[README](./README.md)`
- Referencias al mismo sitio: `[Clase 01](../class-01/)`

---

## Fuente de Verdad

**README.md es la única fuente de verdad para:**
- Contenido por clase (tabla de referencia)
- Estructura de módulos
- Objetivos del curso

**Al modificar contenido:**
1. Actualizar PRIMERO `README.md`
2. Los demás archivos referencian a README.md
3. NUNCA duplicar tablas de contenido

---

## Herramientas del Curso

| Módulo | Herramientas |
|--------|--------------|
| M1 | VS Code, Live Server, Excalidraw, Google Fonts |
| M2 | Terminal, Git, Chrome DevTools, Figma |
| M3 | Consola del navegador, VS Code + extensiones JS |

---

## Sugerencias de Commit

Después de cambios significativos:

```
git commit -m "tipo: descripción"
```

| Tipo | Uso |
|------|-----|
| `feat:` | Nueva funcionalidad |
| `fix:` | Corrección |
| `docs:` | Documentación |
| `refactor:` | Reestructuración |

---

## Al Reportar Problemas

Incluir:
1. **Ubicación:** `archivo:línea`
2. **Referencia:** "Clase X, Lab Parte Y" (consultar README.md)
