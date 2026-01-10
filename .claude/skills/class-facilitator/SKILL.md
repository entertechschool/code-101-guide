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

## Ejemplo de Referencia

Ver implementación completa en: `curriculum/class-09/facilitator/README.md`
