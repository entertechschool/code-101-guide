---
name: module-test
description: Genera tests diagnósticos por módulo. Usar cuando se pida crear test, quiz, evaluación diagnóstica, o checkpoint de módulo.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Tests Diagnósticos por Módulo

## Objetivo

Crear tests de verificación rápida (15 min) para evaluar comprensión al final de cada módulo. Los tests son **diagnósticos internos** - NO afectan la calificación del estudiante.

## Propósito del Test

- Control interno de avance del grupo
- Identificar temas que necesitan refuerzo
- Ajustar ritmo/contenido si es necesario
- Medir satisfacción de forma imperceptible (pregunta 8)

---

## Estructura de Archivos

```
curriculum/class-XX/test/
├── README.md        # Info para estudiante (qué esperar)
└── questions.md     # Preguntas con respuestas (copy-paste a Canvas)
```

**Ubicación:** Solo en clases de cierre de módulo (ej: última clase de cada módulo)

---

## Proceso de Generación

### Paso 1: Identificar contexto

Determinar:
- Número de clase (ej: 4, 8, 12)
- Módulo correspondiente
- Clases que cubre el test (ej: clases 1-4 del módulo)

### Paso 2: Leer contenido del módulo

```bash
# Leer READMEs de las clases del módulo
curriculum/class-{X-3}/README.md
curriculum/class-{X-2}/README.md
curriculum/class-{X-1}/README.md
curriculum/class-{X}/README.md

# Leer slides para conceptos clave
curriculum/class-{X-3}/slides/README.md
...
```

### Paso 3: Generar archivos

1. `test/README.md` - Info para estudiante
2. `test/questions.md` - 8 preguntas formato Canvas

---

## Template: README.md (estudiante)

```markdown
# Test Módulo [N]: [Título del Módulo]

**Duración:** 15 min | **Preguntas:** 8 | **Formato:** Opción múltiple

---

## ¿Qué evalúa?

Conceptos de las Clases [X-3] a [X]:

- [Tema 1]
- [Tema 2]
- [Tema 3]
- [Tema 4]

---

## Instrucciones

1. Se realiza en Canvas durante la clase
2. Tienes 15 minutos
3. Individual y a libro cerrado

> 📊 **Nota:** Este test es diagnóstico - nos ayuda a identificar qué temas necesitan más práctica. **No afecta tu calificación**.
```

---

## Template: questions.md (Canvas)

```markdown
# Test Módulo [N] - Questions

**8 preguntas diagnósticas**

---

## Preguntas 1-6 (Clases 1-3)

[2 preguntas por clase, cubriendo conceptos fundamentales]

## Pregunta 7 (Clase 4)

[1 pregunta de aplicación práctica del proyecto]

## Pregunta 8 (Autoevaluación)

Después de completar este módulo, ¿cómo describirías tu nivel de confianza
para [APLICACIÓN PRINCIPAL DEL MÓDULO]?

- A) Muy seguro/a - podría hacerlo sin ayuda
- B) Bastante seguro/a - con algo de referencia
- C) Algo inseguro/a - necesitaría bastante guía
- D) Muy inseguro/a - no sabría por dónde empezar

> ⚠️ Sin respuesta correcta - todas las opciones son válidas para diagnóstico
```

**Nota:** La Pregunta 8 mide satisfacción de forma imperceptible. No tiene respuesta correcta.

---

## Reglas de Contenido

### Distribución de Preguntas (7 técnicas + 1 autoevaluación)

| Pregunta | Clase | Tipo |
|----------|-------|------|
| 1-2 | Clase X-3 | Conceptos iniciales |
| 3-4 | Clase X-2 | Desarrollo del tema |
| 5-6 | Clase X-1 | Profundización |
| 7 | Clase X | Aplicación práctica |
| 8 | — | Autoevaluación (satisfacción oculta) |

### Tipos de Preguntas (1-7)

- **Conceptuales:** ¿Qué es...? ¿Cuál es el propósito de...?
- **Aplicación:** ¿Cómo se hace...? ¿Cuál es la forma correcta de...?
- **Análisis:** ¿Por qué...? ¿Cuál es la diferencia entre...?

### Formato de Opciones

- 4 opciones (A, B, C, D)
- Solo UNA respuesta correcta
- Distractores plausibles pero claramente incorrectos
- Evitar "Todas las anteriores" o "Ninguna de las anteriores"

---

## Validación Final

- [ ] README.md es conciso (~20 líneas) y NO menciona "umbral de aprobación"
- [ ] README.md tiene nota de "NO afecta calificación"
- [ ] questions.md tiene exactamente 8 preguntas (7 técnicas + 1 autoevaluación)
- [ ] Preguntas 1-7: 4 opciones con respuesta marcada `> Respuesta: X`
- [ ] Pregunta 8: autoevaluación sin respuesta correcta
- [ ] Distribución: 2+2+2 (clases 1-3) + 1 (clase 4) + 1 (autoevaluación)
- [ ] Formato compatible con Canvas (copy-paste)

---

## Notas Importantes

1. **Agnóstico:** Este skill funciona para cualquier curso (101, 201, 301, 401)
2. **Timing:** El test se toma a mitad de la clase de cierre de módulo
3. **Propósito:** Diagnóstico interno, NO calificación
4. **Canvas:** El formato de `questions.md` es copy-paste directo
