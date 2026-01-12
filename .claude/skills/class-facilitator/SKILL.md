---
name: facilitator-guide
description: Genera guías de facilitador para clases del bootcamp code-301-guide. Usar cuando se pida crear guía de facilitador, guía del instructor, material para el profesor, o facilitator guide.
allowed-tools: Read, Glob, Grep, WebSearch, WebFetch, Write, Edit
---

# Generador de Guías de Facilitador

## Objetivo

Crear guías de referencia rápida (lectura 5-10 min antes de clase) para instructores del bootcamp. El tono debe ser narrativo estilo Medium.com con párrafos cortos (3-5 líneas máximo).

## Proceso

1. **Leer el contenido de la clase**: README.md, lab/README.md, slides/README.md
2. **Investigar contexto histórico**: Usar WebSearch para obtener datos reales sobre las tecnologías
3. **Generar el archivo**: `curriculum/class-XX/facilitator/README.md`

## Estructura del Documento

```markdown
# Guía del Facilitador - Clase XX: [Título]

> Tiempo de lectura: X minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **[Concepto 1]**: Definición de 1 línea.
- **[Concepto 2]**: Definición de 1 línea.
- **[Concepto 3]**: Definición de 1 línea.
(3-5 conceptos máximo, solo lo esencial)

---

## 🔗 Analogías Útiles

**[Idea compleja] <> [Analogía simple]:**
Explicación de por qué funciona esta analogía. 2-3 líneas máximo.

(3-4 analogías listas para usar en clase)

---

## 📚 Contexto Histórico

### [Tecnología 1]: [Título narrativo]

Historia real de la tecnología con datos verificados:
- Quién la creó y cuándo
- El problema que intentaba resolver
- Datos curiosos del desarrollo
- Estadísticas actuales de uso

> **Para contar en clase:** "Cita memorable o dato impactante"

### [Tecnología 2]: [Título narrativo]

(Repetir formato. Incluir fuentes al final de la sección)

**Fuentes:** [Link 1](url), [Link 2](url)

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "[Nombre descriptivo]"

Contexto de cuándo usar esta dinámica.

> "Narrativa o script sugerido para el facilitador"

**Dinámica sugerida:**
```
Facilitador: "Pregunta inicial"
(Reacción esperada)
Facilitador: "Seguimiento"
```

(2-3 dinámicas con diálogos ejemplo)

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: [Nombre del ejemplo]

**Cuándo usarlo:** Contexto específico.

```código
// Código copiable y funcional
```

**Tip de facilitación:** Consejo específico para presentar este ejemplo.

(3-4 ejemplos con código copiable)

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| "Error message" | Causa del error | Solución específica |
| Síntoma visible | Causa del error | Solución específica |

(4-6 errores típicos de estudiantes)

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| XX | Hito 1 | Qué debe verse/funcionar |
| XX | Hito 2 | Qué debe verse/funcionar |

---

## 🔗 Conexión con la Próxima Clase

Al cerrar, planta la semilla para la siguiente clase:

> "Preview de lo que viene en la próxima clase"

**Tarea implícita:** Sugerencia de reflexión o preparación.
```

## Notas de Estilo

- **Tono**: Narrativo, como artículo de Medium. Mentor hablando a mentor.
- **Párrafos**: Cortos (3-5 líneas máximo)
- **Emojis**: Solo en headers de sección para escaneo visual
- **Código**: Siempre funcional y copiable
- **Analogías**: Cotidianas y universales (restaurantes, llamadas, etc.)
- **Datos históricos**: Siempre verificados con WebSearch, incluir fuentes

---

## Template Adicional: Clases de Cierre (4, 8)

> ⚠️ **Solo para clases 4 y 8.** La clase 12 tiene formato especial (Demo Day).

Las clases de cierre de módulo (4 y 8) requieren secciones adicionales:

### Sección: 📊 Test Diagnóstico del Módulo

```markdown
## 📊 Test Diagnóstico del Módulo

### Logística (30 min total)

| Actividad | Tiempo | Qué hacer |
|-----------|--------|-----------|
| Test en Canvas | 15 min | Proyectar countdown, ambiente silencioso |
| Revisión en vivo | 15 min | Compartir pantalla Canvas, solo estadísticas |

### Durante el test

> "Tienen 15 minutos. Es individual y a libro cerrado. Recuerden: esto NO afecta su calificación—es para que nosotros sepamos qué temas necesitan más práctica."

**Tips:**
- Proyectar un timer en pantalla
- Mantener ambiente silencioso
- Circular por el salón sin presionar

### Revisión de resultados

**Preparación:** En Canvas, ir a "Estadísticas de Quiz" (NO muestra nombres)

[Diálogo de ejemplo para revisión]

**Qué buscar:**
- Preguntas con <60% acierto → tema que necesita refuerzo
- Preguntas con >90% acierto → tema dominado, celebrar
- Pregunta 8 (autoevaluación) → termómetro de confianza del grupo
```

### Sección: 🎤 Presentaciones de Cierre

```markdown
## 🎤 Presentaciones de Cierre

### Antes de empezar
> "Este es SU momento. Han trabajado X clases para llegar aquí..."

### Durante presentaciones
- Mantener ambiente positivo
- Una pregunta breve a cada presentador
- Aplaudir genuinamente después de cada uno

### Si alguien no terminó
> "Está bien no haber terminado al 100%. ¿Qué parte quieres mostrar?"

### Cierre de las Presentaciones
> "Hace X clases no sabían qué era [tema]. Hoy tienen [logro]. ¡Increíble!"
```

### Checkpoints para Clases de Cierre

Los checkpoints deben incluir explícitamente:

| Minuto | Actividad |
|--------|-----------|
| 0-10 | Intro |
| 10-70 | Lab (partes 1-4) |
| 70-85 | **Test diagnóstico** |
| 85-100 | **Revisión resultados** |
| 100-130 | **Presentaciones de cierre** |
| 130-150 | Cierre + preview siguiente módulo |

> ⚠️ **IMPORTANTE:** NO usar "Demo Day" para clases 4 y 8. "Demo Day" es exclusivo de la clase 12.

---

## Ejemplo de Referencia

Ver implementación completa en: `curriculum/class-04/facilitator/README.md`
