# AGENTS.md - Code 101 Guide

> Instrucciones para agentes AI que trabajan en este repositorio.
> Compatible con: Claude Code, GitHub Copilot, Cursor, Gemini CLI, Windsurf, Codex.

---

## Proyecto

Repositorio del curso **Code 101 - Elementals Software Development** de EnterTechSchool. Contiene curriculum completo: READMEs, laboratorios, slides, guías de facilitador y tests diagnósticos.

---

## Fuente de Verdad

**`README.md` es la única fuente de verdad.** Contiene:

- Estructura del curso (módulos, clases, proyectos)
- Contenido clave por clase
- Sistema de evaluación (escala, rúbricas, tests)
- Formato y modalidad

**Regla:** Leer SIEMPRE `README.md` antes de generar o modificar contenido. Nunca hardcodear información que ya está en el syllabus. Si hay conflicto entre un archivo de clase y `README.md`, el syllabus gana.

---

## Estructura del Repositorio

```
├── README.md                        # Syllabus (fuente de verdad)
├── AGENTS.md                        # Este archivo
├── curriculum/
│   ├── class-00/                    # Orientación
│   └── class-{01..12}/             # Clases del curso
│       ├── README.md                # Resumen para estudiante
│       ├── lab/README.md            # Laboratorio paso a paso
│       ├── lab/rubric.md            # Rúbrica (solo clases 4, 8, 12)
│       ├── slides/README.md         # Presentación reveal.js
│       ├── facilitator/README.md    # Guía pedagógica
│       ├── test/README.md           # Info test (solo clases 4, 8, 12)
│       └── test/questions.md        # Preguntas Canvas (solo 4, 8, 12)
│   └── module-{N}/
│       └── MODULE-PLAN.md           # Blueprint del módulo (pre-aprobación)
├── fast-track/                      # Programa intensivo (4 días)
└── .claude/skills/                  # Skills de generación de contenido
```

---

## Convenciones

### Idioma y Encoding

- **Idioma:** Español latinoamericano
- **Encoding:** UTF-8 puro (tildes directas: á, é, í, ó, ú, ñ, ü)
- **Signos:** ¿?, ¡! (nunca omitir el signo de apertura)
- **Corrupción:** Si aparecen `�` o `\u00f3`, el archivo está corrupto — regenerar

### Enlaces Externos (GitHub Pages / Kramdown)

```markdown
# Externos: SIEMPRE con {:target="_blank"}
[VS Code](https://code.visualstudio.com/){:target="_blank"}

# Internos: NUNCA con target
[Clase 01](../class-01/)
[Sección](#seccion)
```

### Emojis

Estratégicos en headers para escaneo visual. No decorativos ni excesivos.

---

## Tono por Tipo de Archivo

| Archivo | Audiencia | Tono | Persona |
|---------|-----------|------|---------|
| `README.md` | Estudiante (pre-clase) | Profesional, inspirador | Segunda persona ("descubrirás") |
| `lab/README.md` | Estudiante (en clase) | Práctico, paso a paso | Segunda persona ("agrega", "verifica") |
| `slides/README.md` | Facilitador (en clase) | Educativo, conversacional | Mixta |
| `facilitator/README.md` | Instructor (pre-clase) | Reflexivo, mentor-a-mentor | Narrativo estilo Medium |

---

## Límites por Archivo

| Archivo | Límite | Notas |
|---------|--------|-------|
| `README.md` | ~150 líneas | Solo resumen y preparación |
| `lab/README.md` | Regular: <400, Calificado: <500, Demo Day: <100 | |
| `slides/README.md` | ≤13 slides | Reveal.js markdown (separador `---`) |
| `facilitator/README.md` | <300 líneas | ~8 min lectura |
| `test/README.md` | ~30 líneas | Solo info para estudiante |
| `test/questions.md` | 8 preguntas | 7 técnicas + 1 autoevaluación |

---

## Tipos de Lab

Determinar tipo según posición de la clase en el módulo:

```
Posición = ((clase - 1) % 4) + 1
Lab calificado = (Posición == 4)
```

| Tipo | Clases | Partes | Tiempo | Rúbrica |
|------|--------|--------|--------|---------|
| Regular | 1-3, 5-7, 9-11 | 3 | ~90 min (en clase) | No |
| Calificado | 4, 8 | 5 (incluye Desafío) | ~135 min (50% clase + 50% post) | Sí: inline + rubric.md |
| Demo Day | 12 | Especial | Variable | Sí: rubric.md |

---

## Sistema de Evaluación

Leer de `README.md`. Reglas derivadas:

- Solo la **última clase de cada módulo** tiene lab calificado
- Rúbrica: leer escala y criterios de `README.md` → sección "Sistema de Evaluación"
- Tests diagnósticos: NO afectan calificación, son control interno
- "Demo Day" es EXCLUSIVO de clase 12; clases 4 y 8 tienen "Presentaciones de Cierre"

---

## Reglas de Sincronización

### class-00 (Orientación)

Al modificar estructura de módulos, evaluación, políticas o herramientas → actualizar `curriculum/class-00/slides/README.md` (presentación de orientación).

### Fast-Track

El programa intensivo (`fast-track/`) debe mantener coherencia con:
- Escala de calificación (misma que curso regular)
- Reglas de encoding y enlaces
- Sección "Fast-Track" en `README.md`

---

## Pipeline de Generación de Contenido

### Flujo para un módulo nuevo

```
1. module-planner  →  MODULE-PLAN.md (requiere aprobación humana)
2. Para cada clase (secuencial):
   class-readme → class-lab → class-slides → class-facilitator
3. En última clase del módulo:
   module-test
4. evaluation-class (verificar cada clase)
5. lint-markdown (validar enlaces y formato)
```

### Dependencias entre archivos

| Al generar... | Leer primero... |
|---------------|-----------------|
| `README.md` de clase | `README.md` del curso, `MODULE-PLAN.md`, clase anterior |
| `lab/README.md` | `README.md` de la clase, `slides/README.md` |
| `slides/README.md` | `README.md` de la clase, `lab/README.md` |
| `facilitator/README.md` | Todos los anteriores de la clase |
| `test/` | READMEs y slides de las 4 clases del módulo |

### Regla de contexto

Nunca generar contenido sin leer los archivos de dependencia. Si un archivo de dependencia no existe, generarlo primero o pedir al usuario que lo proporcione.

---

## Modificar Contenido Existente

1. Actualizar PRIMERO `README.md` (syllabus) si el cambio afecta estructura
2. Los archivos de clase referencian al syllabus — no duplicar tablas
3. Verificar sincronización con class-00 y fast-track
4. Ejecutar lint-markdown antes de considerar completo

---

## Scaffolding

> Variables de nivel para que los skills compartidos adapten su output.
> Los skills leen esta sección y ajustan gaps, checkpoints e instrucciones.
> Si esta sección no existe, usar defaults: `course_level=1`, `guided`, `Parte`, `visual`.

### Variables de Nivel

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `course_level` | 1 | Complejidad general (1=intro, 2=intermedio, 3=avanzado) |
| `scaffolding_style` | guided | Estilo: `guided` / `descriptive` / `spec-based` |
| `part_naming` | Parte | Nombre de secciones del lab: `Parte` / `HU` |
| `checkpoint_style` | visual | Tipo de checkpoints: `visual` / `functional` / `sprint-based` |
| `instruction_style` | step-by-step | Redacción: `step-by-step` / `constrained-tasks` / `acceptance-criteria` |
| `gap_types` | comment-placeholders | Tipos de gap: `comment-placeholders` / `+blank-lines` / `+pseudocode,multiple-choice` |

### Tabla de Autonomía por Módulo

| Módulo | Código Completo | Gaps | Descripción |
|--------|-----------------|------|-------------|
| M1 | 90% | 10% | Templates con placeholders mínimos |
| M2 | 85% | 15% | Más placeholders, decisiones guiadas |
| M3 | 80% | 20% | Placeholders + decisiones simples |

### Formato de Gaps por Nivel

**Nivel 1 (guided):** Gaps de personalización — el estudiante reemplaza contenido personal dentro de código funcional.

```html
<h1><!-- Tu nombre aquí --></h1>
<p><!-- Escribe una breve descripción sobre ti --></p>
```

**Nivel 2 (descriptive):** Gaps progresivos — el estudiante completa código con pistas contextuales.

```javascript
boton.addEventListener('_____', function() {
  // Cambia el color de fondo del elemento
  elemento.style._______ = 'blue';
});
```

**Nivel 3 (spec-based):** Pseudocódigo/specs — el estudiante escribe la implementación desde especificaciones.

```javascript
// Algoritmo: 1. Obtener input 2. Validar rango 3. Comparar con secreto 4. Mostrar resultado
export function checkGuess(input, secret) {
  /* implementar */
}
```

### Checkpoints por Nivel

**visual** (Nivel 1): Describe lo que el estudiante debe VER en pantalla.
> ✅ **Checkpoint:** Tu nombre aparece centrado en la página con un color que elegiste.

**functional** (Nivel 2): Describe comportamiento que se puede probar.
> ✅ **Checkpoint:** Al hacer clic en el botón, el contador incrementa y el número se actualiza en pantalla.

**sprint-based** (Nivel 3): Describe criterios de aceptación del sprint.
> ✅ **Checkpoint:** La función retorna `true` para inputs válidos y `false` para inputs fuera de rango. Verificar con 3 casos de prueba.
