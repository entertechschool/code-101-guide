---
name: class-slides-generator
description: Genera slides reveal.js para clases del bootcamp. Usar cuando se pida crear slides, presentación, o diapositivas para una clase.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Slides de Clase

## Objetivo

Crear slides optimizados para facilitar la clase. No son material de estudio, son herramientas para el facilitador.

## Filosofía: Slides que se usan, no se saltan

Cada slide tiene un propósito específico:
- **TRANSICIÓN**: Conectar clases (entrada/salida)
- **QUIZ**: Verificar conocimiento previo
- **CHECKPOINT**: Sincronizar progreso del grupo
- **REFLEXIÓN**: Consolidar conceptos antes de avanzar

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

### Pregunta 1:
[Pregunta sobre concepto previo necesario]

### Pregunta 2:
[Pregunta sobre concepto previo necesario]

### Pregunta 3:
[Pregunta sobre concepto previo necesario]

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

[Repetir formato]

---

## ✅ CHECKPOINT HU4: [Nombre]

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

## Notas de Estilo

- **Formato**: Reveal.js markdown (separador `---`)
- **Fondo**: `data-background="#0A192F"` solo en portada
- **Código**: Mínimo, solo comandos de prueba
- **Tablas**: Para comparaciones conceptuales
- **Emojis**: Solo en headers para escaneo visual
- **Preguntas**: Abiertas, que generen discusión

## Meta

- **Líneas**: ~150 máximo
- **Slides**: 12 máximo
- **Tiempo por slide**: ~2-3 min promedio

## Ejemplo de Referencia

Ver implementación en: `curriculum/class-10/slides/README.md`
