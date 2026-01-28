---
name: class-slides-generator
description: Genera slides reveal.js para clases del bootcamp. Usar cuando se pida crear slides, presentación, o diapositivas para una clase.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Slides de Clase

## Objetivo

Crear slides optimizados para facilitar la clase. No son material de estudio, son herramientas para el facilitador.

## Filosofía: Slides que se usan, no se saltan

| Tipo | Propósito | Cuándo usar |
|------|-----------|-------------|
| **TRANSICIÓN** | Conectar clases (entrada/salida) | Inicio y final |
| **QUIZ** | Detonar demo en vivo con pregunta abierta | Antes de demo |
| **COMPROBACIÓN** | Validar comprensión post-demo | Después de demo, antes del lab |
| **CHECKPOINT** | Sincronizar progreso del grupo | 1 por cada parte del lab |
| **REFLEXIÓN** | Consolidar conceptos clave | Después de checkpoints |

## Proceso

1. **Leer contexto**:
   - `curriculum/class-{X}/README.md` (tema, objetivos)
   - `curriculum/class-{X}/lab/README.md` (HUs para checkpoints)
   - `curriculum/class-{X-1}/README.md` (para transición de entrada)
   - `curriculum/class-{X+1}/README.md` (para preview de salida)

2. **Generar archivo**: `curriculum/class-{X}/slides/README.md`

## Estructura Fija (12 slides máximo)

```markdown
<!-- .slide: data-background="#0A192F" -->
# Clase XX: [Título]
## [Subtítulo descriptivo]

---

## 🔗 TRANSICIÓN: [Clase X-1] → [Clase X]

### Clase anterior:
- Lo que ya saben/hicieron

### Hoy:
- Lo nuevo que aprenderán

> "Frase de transición memorable"

---

## 🧠 QUIZ PRE-LAB

> **Nota para facilitador:** Este slide DETONA la demo en vivo.
> Lanza la pregunta, espera respuestas, y usa esas respuestas como gancho para mostrar.

### Pregunta:
[Pregunta abierta sobre el concepto principal de hoy]

### Posibles respuestas a esperar:
- [Respuesta correcta que puedes validar]
- [Error común que puedes corregir en la demo]
- [Confusión que la demo debe aclarar]

---

## 🎯 COMPROBACIÓN

> **Nota:** Mostrar DESPUÉS de la demo, ANTES de iniciar el lab.
> Si varios estudiantes fallan, reforzar el concepto antes de continuar.

### Pregunta:
[Pregunta que valida comprensión de lo que acaban de ver en la demo]

A. [Distractor: error común de principiante]
B. [Distractor: confusión de conceptos similares]
C. [Respuesta correcta]
D. [Distractor: respuesta parcial o incompleta]

> **Respuesta:** [Letra] - [Explicación breve]

---

## ✅ CHECKPOINT HU1: [Nombre]

### Verificar:
```
[Comando o URL para probar]
```

**¿Qué debe funcionar?**
- Criterio 1
- Criterio 2

---

## ✅ CHECKPOINT HU2: [Nombre]

[Repetir formato para cada HU del lab]

---

## ✅ CHECKPOINT HU3: [Nombre]

[Repetir formato - puede ser menos si hay menos HUs]

---

## 💡 REFLEXIÓN: [Concepto clave 1]

| Aspecto | Opción A | Opción B |
|---------|----------|----------|
| ... | ... | ... |

> **Regla memorable**: "Frase que consolida el concepto"

---

## 💡 REFLEXIÓN: [Concepto clave 2]

### Pregunta de consolidación
[Pregunta que hace pensar, no memorizar]

---

## 🔗 TRANSICIÓN: Preview Clase [X+1]

### Hoy lograste:
- Logro 1
- Logro 2
- Logro 3

### Próxima clase:
- Preview de lo que viene

---

## ❓ Preguntas de Cierre

1. [Pregunta reflexiva sobre el "por qué"]

2. [Pregunta sobre cuándo usar lo aprendido]

3. [Pregunta que conecta con la próxima clase]

---

## 📝 Entrega

- [Requisito 1]
- [Requisito 2]
- Screenshot/GIF de [qué mostrar]

### Próxima clase: [Título]
```

## Lo que NO va en los Slides

| Contenido | Razón |
|-----------|-------|
| Código paso a paso | Va en `lab/README.md` |
| Explicaciones extensas | Va en `facilitador/README.md` |
| Definiciones de glosario | Va en `README.md` de clase |
| Referencias a rúbricas | Documento interno, no público |
| Estrategias pedagógicas | Va en `facilitador/README.md` |

## Reglas para Clase Final de Módulo

Las clases 4, 8, 12 son **labs calificados**. Ajustes:

1. **TRANSICIÓN de salida** → Preview del siguiente MÓDULO (no solo clase)
2. **Slide de cierre** → Celebrar logros del módulo completado
3. **Entrega** → Más detallada (URL repo + screenshot)

**IMPORTANTE:** No mencionar rúbricas ni criterios de evaluación en slides.

## Notas de Estilo

- **Formato**: Reveal.js markdown (separador `---`)
- **Fondo**: `data-background="#0A192F"` solo en portada
- **Código**: Mínimo, solo comandos de prueba
- **Tablas**: Para comparaciones conceptuales
- **Emojis**: Solo en headers para escaneo visual
- **Preguntas**: Abiertas, que generen discusión

## Ejemplos por Tipo de Slide

### QUIZ PRE-LAB (Code 101)

```markdown
## 🧠 QUIZ PRE-LAB

> **Nota para facilitador:** Este slide DETONA la demo en vivo.

### Pregunta:
¿Qué pasa si cambio el color de fondo en CSS pero no veo el cambio en el navegador?

### Posibles respuestas a esperar:
- "Hay que refrescar la página" ✓
- "Falta guardar el archivo" ✓
- "El CSS no está conectado al HTML"
- "No sé, me pasó y no supe qué hacer"
```

### COMPROBACIÓN (Code 101)

```markdown
## 🎯 COMPROBACIÓN

> **Nota:** Mostrar DESPUÉS de la demo del selector CSS.

### Pregunta:
¿Cuál selector aplica estilos SOLO a elementos con class="destacado"?

A. `#destacado { }`
B. `destacado { }`
C. `.destacado { }`
D. `*destacado { }`

> **Respuesta:** C - El punto indica selector de clase
```

### CHECKPOINT (Code 101)

```markdown
## ✅ CHECKPOINT: Header con navegación

### Verificar en Live Server:
- El header está fijo arriba
- Los links de navegación están horizontales
- Al hacer hover, cambia el color

**¿Problemas comunes?**
- Links verticales → falta `display: flex`
- Header se mueve → falta `position: fixed`
```

### REFLEXIÓN (Code 101)

```markdown
## 💡 REFLEXIÓN: Selectores CSS

| Selector | Ejemplo | ¿Cuántos elementos afecta? |
|----------|---------|---------------------------|
| Elemento | `p { }` | Todos los `<p>` |
| Clase | `.info { }` | Solo los que tienen `class="info"` |
| ID | `#hero { }` | Solo UNO (debe ser único) |

> **Regla**: Usa clases para reutilizar, IDs para únicos
```

## Meta

- **Líneas**: ~150 máximo
- **Slides**: 12 máximo
- **Tiempo por slide**: ~2-3 min promedio

## Checklist de Verificación

Antes de finalizar, verificar:

- [ ] ¿Tiene TRANSICIÓN de entrada conectando con clase anterior?
- [ ] ¿Tiene QUIZ PRE-LAB que detona la demo?
- [ ] ¿Tiene COMPROBACIÓN post-demo con pregunta de opción múltiple?
- [ ] ¿Tiene 1 CHECKPOINT por cada parte del lab?
- [ ] ¿Tiene al menos 1 REFLEXIÓN con tabla comparativa?
- [ ] ¿Tiene TRANSICIÓN de salida con preview?
- [ ] ¿Tiene 3 PREGUNTAS DE CIERRE reflexivas?
- [ ] ¿Tiene slide de ENTREGA con requisitos específicos?
- [ ] ¿Máximo 12 slides?
- [ ] ¿NO tiene código extenso? (eso va en el lab)

## Ejemplo de Referencia

Ver implementación en: `curriculum/class-10/slides/README.md`
