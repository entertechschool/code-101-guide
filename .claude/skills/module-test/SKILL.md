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
- Reemplaza NPS con métrica objetiva de comprensión

---

## Estructura de Archivos

```
curriculum/class-XX/test/
├── README.md        # Info para estudiante (qué esperar)
└── questions.md     # Preguntas con respuestas (copy-paste a Canvas)
```

**Ubicación:** Solo en clases de cierre de módulo (ej: 4, 8, 12 en Code 101)

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

Este test verifica tu comprensión de los conceptos de las Clases [X-3] a [X]:

- [Tema 1]
- [Tema 2]
- [Tema 3]
- [Tema 4]

---

## Instrucciones

1. El test se realiza en Canvas durante la clase
2. Tienes 15 minutos
3. Es individual y a libro cerrado
4. El umbral de aprobación es 80% (6/8 correctas)

---

## ¿Por qué este test?

Nos ayuda a saber si los conceptos están claros antes de avanzar al siguiente módulo. Si tienes dudas después del test, es el momento perfecto para resolverlas.

> ⚠️ **Nota:** Este test es diagnóstico y **NO afecta tu calificación**. Es una herramienta para identificar qué temas necesitan más práctica.
```

---

## Template: questions.md (Canvas)

```markdown
# Test Módulo [N] - Questions

**8 preguntas x 12.5 pts = 100 pts**

---

## Pregunta 1

[Pregunta clara y directa]

- A) [Opción incorrecta]
- B) [Opción correcta]
- C) [Opción incorrecta]
- D) [Opción incorrecta]

> Respuesta: B

---

## Pregunta 2

[...]

---

## Escala de Evaluación

| Correctas | Puntaje | Nivel |
|-----------|---------|-------|
| 8 | 100 | Excelente |
| 7 | 87.5 | Muy Bueno |
| 6 | 75 | Bueno (Aprobado) |
| 5 | 62.5 | Necesita refuerzo |
| < 5 | < 62.5 | Requiere apoyo adicional |
```

---

## Reglas de Contenido

### Distribución de Preguntas

| Clase | Preguntas |
|-------|-----------|
| Clase X-3 | 2 preguntas |
| Clase X-2 | 2 preguntas |
| Clase X-1 | 2 preguntas |
| Clase X (inicio) | 2 preguntas |

### Tipos de Preguntas

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

- [ ] README.md tiene nota de "NO afecta calificación"
- [ ] questions.md tiene exactamente 8 preguntas
- [ ] Cada pregunta tiene 4 opciones
- [ ] Respuestas marcadas con `> Respuesta: X`
- [ ] Distribución equilibrada de temas
- [ ] Formato compatible con Canvas (copy-paste)
- [ ] Escala de evaluación incluida

---

## Notas Importantes

1. **Agnóstico:** Este skill funciona para cualquier curso (101, 201, 301, 401)
2. **Timing:** El test se toma a mitad de la clase de cierre de módulo
3. **Propósito:** Diagnóstico interno, NO calificación
4. **Canvas:** El formato de `questions.md` es copy-paste directo
