# CLAUDE.md - Fast-Track: Mi Portfolio Dev

## Referencia Principal

- **Programa (fuente de verdad):** [README.md](README.md)
- **Rúbrica:** [rubric.md](rubric.md)
- **Guía del instructor:** [facilitator/README.md](facilitator/README.md)
- **Curso padre:** [../CLAUDE.md](../CLAUDE.md)

---

## Sync con Curso Regular

> **REGLA OBLIGATORIA:** Este programa y el curso regular (`../CLAUDE.md`) están sincronizados.

### Al modificar Fast-Track, verificar:

| Si cambias... | Verificar en curso regular |
|---------------|---------------------------|
| Sistema de evaluación | `../README.md` → sección "Fast-Track" |
| Escala de calificación | Debe coincidir con `../README.md` → "Escala de Calificación" |
| Tecnologías por día | `../README.md` → tabla Fast-Track |
| Formato del programa | `../README.md` → sección "Fast-Track" |

### Al modificar el curso regular, verificar:

| Si cambian... | Verificar aquí |
|---------------|----------------|
| Escala de calificación | `rubric.md` debe usar la misma escala |
| Convenciones de encoding | Este CLAUDE.md hereda las mismas reglas |
| Formato de enlaces externos | Misma regla `{:target="_blank"}` aplica |

---

## Estructura del Programa

```
fast-track/
├── README.md              # Programa completo (fuente de verdad)
├── CLAUDE.md              # Este archivo
├── rubric.md              # Rúbrica 5×20 pts (evaluador)
├── facilitator/
│   └── README.md          # Guía pedagógica completa
├── starter/
│   ├── index.html         # Template HTML (TODOs para estudiante)
│   ├── styles.css         # Template CSS (secciones vacías)
│   └── script.js          # Template JS (secciones vacías)
├── day-01/lab/README.md   # HTML + CSS base + Git
├── day-02/lab/README.md   # Flexbox + Responsive
├── day-03/lab/README.md   # JavaScript
└── day-04/lab/README.md   # Deploy + Pulido + Revisión
```

---

## Diferencias Clave con Curso Regular

| Aspecto | Curso Regular | Fast-Track |
|---------|---------------|------------|
| Ubicación | `curriculum/class-XX/` | `fast-track/day-XX/` |
| Duración | 180 min × 12 clases | 120 min × 4 días |
| Modelo | Blend (slides → lab) | Workshop (code-along) |
| Proyecto | 3 proyectos separados | 1 proyecto integrador |
| Slides | Sí (`slides/README.md`) | No (demo en vivo) |
| Tests diagnósticos | Sí (clases 4, 8, 12) | No |
| Archivos starter | No | Sí (`starter/`) |
| Facilitator | 1 por clase | 1 global para todo el programa |
| Rúbrica | 1 por módulo (inline + rubric.md) | 1 global (`rubric.md`) |
| Git | Desde clase 5 (M2) | Desde día 1 |

---

## Convenciones por Archivo

| Archivo | Propósito | Tono | Límite |
|---------|-----------|------|--------|
| `README.md` | Programa y cronograma | Profesional, conciso | ~175 líneas |
| `rubric.md` | Rúbrica del evaluador | Técnico, objetivo | ~110 líneas |
| `facilitator/README.md` | Guía pedagógica | Mentor-a-mentor, práctico | ~305 líneas |
| `starter/*.html/css/js` | Templates para estudiante | Instructivo (TODOs) | HTML ~60, CSS ~55, JS ~26 |
| `day-XX/lab/README.md` | Taller progresivo | Práctico, paso a paso | 300-650 líneas |

---

## Modelo Pedagógico

### Workshop Code-Along (NO es blend)

| Aspecto | Cómo funciona |
|---------|---------------|
| **Filosofía** | "Construir juntos → Explicar mientras codeas" |
| **Regla de oro** | "Si no lo van a escribir hoy, no lo expliques hoy" |
| **Micro-lectures** | 5 min máximo al inicio de cada día |
| **Formato** | Instructor codea en vivo, estudiantes siguen |
| **Breaks** | 1 break de 5 min por sesión (~minuto 55-60) |

### Progresión Diaria

| Día | Foco | Tecnología nueva | Construye sobre |
|-----|------|-------------------|-----------------|
| 1 | Estructura + estilo base | HTML, CSS básico, Git | Nada (inicio) |
| 2 | Layout + adaptabilidad | CSS variables, Flexbox, media queries, transiciones | Día 1 |
| 3 | Comportamiento interactivo | JavaScript, DOM | Días 1-2 |
| 4 | Publicación + calidad | GitHub Pages | Días 1-3 |

---

## Archivos Starter

Los archivos en `starter/` son templates con TODOs que el estudiante completa progresivamente.

### Reglas para Starter Files

- Contienen **secciones comentadas** (no código funcional)
- Los TODOs guían sin dar la respuesta
- Deben coincidir con la estructura esperada en los labs
- Si un lab referencia un `id` o `class`, el starter debe tenerlo

### Sincronización Starter ↔ Labs

| Si cambias en starter... | Verificar en labs |
|--------------------------|-------------------|
| IDs de elementos HTML | day-03 (JS usa `getElementById`) |
| Clases CSS | day-02 (Flexbox) y day-03 (toggle `.active`) |
| Estructura de secciones | Todos los días |
| Nombre del archivo | Todos los días |

---

## Sistema de Evaluación

### Rúbrica: 5 criterios × 20 pts = 100

| Criterio | Evalúa | Día principal |
|----------|--------|---------------|
| 1. Estructura y Git | HTML semántico + commits | Día 1 |
| 2. Diseño Responsive | CSS + Flexbox + media queries | Día 2 |
| 3. Interactividad | JS: validación + menú | Día 3 |
| 4. Publicación | GitHub Pages + personalización | Día 4 |
| 5. Mejoras Adicionales | Smooth scroll, dark mode, scroll-to-top | Día 3-4 |

### Escala (debe coincidir con curso regular)

| Rango | Nota |
|-------|------|
| 90-100 | A |
| 80-89 | B |
| 70-79 | C |
| < 70 | F |

---

## Distribución de Tiempo

Cada día = 120 min exactos:

| Bloque | Minutos | Actividad |
|--------|---------|-----------|
| Apertura | 0-5 | Micro-lecture (5 min) |
| Bloque 1 | 5-55 | Code-along principal (50 min) |
| Break | 55-60 | Descanso (5 min) |
| Bloque 2 | 60-115 | Code-along secundario (55 min) |
| Cierre | 115-120 | Commit + push (5 min) |

> Los tiempos DEBEN sumar 120 min. Si un lab no cuadra, ajustar.

---

## Reglas Heredadas del Curso Regular

Las siguientes reglas de `../CLAUDE.md` aplican sin cambios:

- **Encoding:** UTF-8 puro (tildes directas, sin entidades)
- **Enlaces externos:** `{:target="_blank"}` (Kramdown)
- **Idioma:** Español latinoamericano
- **Emojis:** Estratégicos (no excesivos)
- **Commits:** `tipo: descripción` (feat, fix, docs, refactor)

---

## Al Modificar Contenido

1. Verificar que los cambios NO rompen la progresión (día N depende de día N-1)
2. Si cambias HTML/CSS/JS en un lab, verificar que `starter/` sigue siendo compatible
3. Si cambias la rúbrica, actualizar `../README.md` sección Fast-Track
4. Si cambias el cronograma, actualizar `facilitator/README.md` (tiempos detallados)

---

## Al Reportar Problemas

Incluir:
1. **Ubicación:** `fast-track/archivo:línea`
2. **Referencia:** "Día X, Lab Parte Y"
3. **Contexto:** Si afecta al starter, al lab, o a ambos
