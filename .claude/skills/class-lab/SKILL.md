---
name: class-lab
description: Genera laboratorios para clases del bootcamp. Usar cuando se pida crear lab, laboratorio, práctica guiada, o ejercicio de clase.
allowed-tools: Read, Glob, Grep, Write, Edit
---

# Generador de Laboratorios

## Objetivo

Crear laboratorios prácticos con arquitectura incremental dentro de cada módulo. Los estudiantes construyen sobre el trabajo de clases anteriores, acumulando código en un proyecto que culmina en el lab calificado (clases 4, 8, 12).

## Decisiones de Diseño

| Aspecto | Decisión |
|---------|----------|
| **Arquitectura** | Incremental - cada lab construye sobre el anterior |
| **Código** | Gaps intencionales - el estudiante debe pensar y completar |
| **Checkpoints** | Visuales simples en el lab (técnicos en slides) |
| **Duración** | Lab regular: 90 min (en clase). Lab calificado: ~135 min (50% clase + 50% post-clase) |
| **Retos** | Preview de conceptos futuros (no solo consolidación) |

---

## Proceso de Generación

### Paso 1: Identificar contexto

```
Clase X → Módulo = floor((X-1)/4) + 1
        → Posición = ((X-1) % 4) + 1
        → Es lab calificado = (Posición == 4)
```

### Paso 2: Leer recursos previos

```bash
# Clase actual
curriculum/class-{X}/README.md
curriculum/class-{X}/slides/README.md

# Clase anterior (para continuidad del proyecto)
curriculum/class-{X-1}/lab/README.md

# Syllabus (para contexto del módulo)
README.md
```

### Paso 3: Determinar tipo de lab

| Tipo | Clases | Características |
|------|--------|-----------------|
| **Lab Regular** | 1-3, 5-7, 9-11 | ~90 min, completable en clase, sin rúbrica |
| **Lab Calificado (M1, M2)** | 4, 8 | ~135 min (~1.5x), 50% en clase + 50% post-clase, con `rubric.md` |
| **Lab Demo Day (M3)** | 12 | Formato especial, máx 100 líneas, con `rubric.md` |

> ⚠️ **Importante:** Solo hay Demo Day en la Clase 12 (última del curso). Las clases 4 y 8 son labs calificados normales SIN Demo Day.
>
> 📌 **Labs Calificados (4, 8):** Se espera que el estudiante avance ~50% durante la sesión en vivo y complete el resto antes de la fecha de entrega.

### Paso 4: Generar archivos

**Lab Regular:**
- `curriculum/class-{X}/lab/README.md`

**Lab Calificado:**
- `curriculum/class-{X}/lab/README.md`
- `curriculum/class-{X}/lab/rubric.md`

---

## Template: Lab Regular

```markdown
# Lab [XX]: [Título del Lab]

## 🎯 Objetivos

1. [Objetivo medible 1]
2. [Objetivo medible 2]
3. [Objetivo medible 3]

---

## 🔑 Conceptos Clave

- **[Término 1]** - Definición concisa
- **[Término 2]** - Definición concisa
- **[Término 3]** - Definición concisa

---

## ⚙️ Setup Inicial

Este lab continúa el trabajo de la Clase X-1. Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | [Requisito 1] | [Cómo verificar] |
| ☐ | [Requisito 2] | [Cómo verificar] |
| ☐ | [Requisito 3] | [Cómo verificar] |

> ⚠️ Si no completaste el lab anterior, completa los requisitos antes de continuar.

---

## Parte 1: [Título] (XX min)

### 1.1 [Subtarea]

Explicación breve de qué haremos.

```html
<!-- Completa el código faltante -->
<elemento>
    <!-- Tu código aquí -->
</elemento>
```

> 💡 **Tip:** Consejo útil para esta parte.

### 1.2 [Subtarea]

Explicación breve.

```css
/* Agrega las propiedades necesarias */
.selector {
    /* ¿Qué propiedad necesitas aquí? */
}
```

✅ **Checkpoint:** [Descripción visual de lo que debe verse]

---

## Parte 2: [Título] (XX min)

### 2.1 [Subtarea]

[Contenido con gaps intencionales]

### 2.2 [Subtarea]

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripción visual]

---

## Parte 3: [Título] (XX min)

### 3.1 [Subtarea]

[Contenido con gaps intencionales]

### 3.2 [Subtarea]

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripción visual]

---

## Logros Adicionales (Opcional)

### 🟢 [Título del logro básico]
[Descripción que introduce concepto futuro de forma simple]

### 🟡 [Título del logro intermedio]
[Descripción que introduce concepto más avanzado]

### 🔴 [Título del logro avanzado]
[Descripción que da preview de próximas clases]

---

## 📝 Entrega

### Checklist

- [ ] [Requisito 1]
- [ ] [Requisito 2]
- [ ] [Requisito 3]

### Entregable

📸 **Screenshot** de tu [descripción de lo que debe mostrar] donde se vea claramente:
- [Elemento verificable 1]
- [Elemento de autenticidad - nombre del estudiante, URL, etc.]

> ⚠️ El screenshot debe mostrar [elemento de autenticidad] para verificar que es tu trabajo.
```

---

## Template: Lab Calificado (Clases 4, 8)

> ⚠️ Este template es para clases 4 y 8. Para clase 12, usar "Template: Lab Demo Day".
>
> ⚠️ **IMPORTANTE:** La rúbrica debe incluirse INLINE en el lab (sección "Rúbrica de Evaluación"), NO como referencia a `rubric.md`. El archivo `rubric.md` es solo para el facilitador/evaluador.

```markdown
# Lab [XX]: [Nombre del Proyecto Integrador]

> ⚠️ **Lab Calificado** - Este lab será evaluado según la rúbrica incluida abajo.
>
> 📌 **Distribución:** Se espera completar ~50% durante la sesión en vivo (Partes 1-2) y el resto antes de la fecha de entrega.

## 🎯 Objetivos del Módulo

Este lab integra todo lo aprendido en el Módulo X:

1. [Objetivo integrador 1]
2. [Objetivo integrador 2]
3. [Objetivo integrador 3]

---

## 🔑 Conceptos Clave

- **[Término 1]** - Definición concisa
- **[Término 2]** - Definición concisa
- **[Término 3]** - Definición concisa

---

## ⚙️ Setup Inicial

Este lab integra todo el Módulo X. Verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | [Elemento del lab clase X-3] | [Cómo verificar] |
| ☐ | [Elemento del lab clase X-2] | [Cómo verificar] |
| ☐ | [Elemento del lab clase X-1] | [Cómo verificar] |

> ⚠️ Si te falta algo, este es el momento de completarlo antes de continuar.

---

## Parte 1: [Título] (XX min)

[Contenido con gaps intencionales siguiendo el mismo formato]

✅ **Checkpoint:** [Descripción visual]

---

## Parte 2: [Título] (XX min)

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripción visual]

---

## Parte 3: [Título] (XX min)

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripción visual]

---

## Parte 4: [Título] (XX min)

[Contenido con gaps intencionales]

✅ **Checkpoint:** [Descripción visual]

---

## Parte 5: Desafío Avanzado (XX min)

> 🔥 **Desafío Post-Clase** - Esta sección es más avanzada y se espera completar después de la sesión en vivo.

### 5.1 [Subtarea desafiante]

[Contenido que requiere investigación o aplicación creativa]

### 5.2 [Subtarea integradora]

[Contenido que integra múltiples conceptos del módulo]

✅ **Checkpoint:** [Descripción del resultado esperado]

---

## Verificación Final

Usa la rúbrica de abajo para verificar que tu proyecto esté completo antes de entregar.

---

## Logros Adicionales (Opcional)

### 🟢 [Título]
[Preview de concepto del siguiente módulo - nivel introductorio]

### 🟡 [Título]
[Preview de concepto del siguiente módulo - nivel intermedio]

### 🔴 [Título]
[Preview de concepto del siguiente módulo - nivel avanzado]

---

## Rúbrica de Evaluación

| Criterio | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|---------------|------------|-------------------|----------|
| **[Criterio 1]** | [Descripción excelente] | [Descripción buena] | [Descripción satisfactoria] | [Descripción baja] |
| **[Criterio 2]** | [Descripción excelente] | [Descripción buena] | [Descripción satisfactoria] | [Descripción baja] |
| **[Criterio 3]** | [Descripción excelente] | [Descripción buena] | [Descripción satisfactoria] | [Descripción baja] |
| **[Criterio 4]** | [Descripción excelente] | [Descripción buena] | [Descripción satisfactoria] | [Descripción baja] |
| **[Criterio 5 - Desafío]** | [Descripción excelente] | [Descripción buena] | [Descripción satisfactoria] | [Descripción baja] |

**Total: 100 puntos** (5 criterios x 20 pts)

| Nota | Rango |
|------|-------|
| A | 90-100 |
| B | 80-89 |
| C | 70-79 |
| F | < 70 |

---

## 📝 Entrega

📦 **Entregable:**

1. **Screenshot** de tu proyecto terminado mostrando:
   - [Elemento verificable 1]
   - [Elemento de autenticidad - tu nombre visible]

2. **Código fuente** (una de estas opciones):
   - Link a repositorio de GitHub, o
   - Archivo comprimido (.zip) del proyecto
```

---

## Template: Lab Demo Day (Clase 12 únicamente)

> ⚠️ **Máximo 100 líneas.** Este es el único lab con Demo Day.

```markdown
# Lab 12: Demo Day

> 🎉 **Proyecto Final del Curso** - Presenta tu trabajo ante la clase

## Objetivo

Presentar tu proyecto del Módulo 3 demostrando las habilidades adquiridas durante el curso.

---

## Estructura de Presentación (3 min por persona)

### 1. Introducción (30 seg)
- Tu nombre
- Nombre de tu proyecto

### 2. Demostración (1 min 30 seg)
- Muestra tu proyecto funcionando
- Destaca una funcionalidad que te enorgullece

### 3. Reflexión Técnica (1 min)
- Un desafío que enfrentaste y cómo lo resolviste
- Algo que aprendiste que no esperabas

---

## Checklist Pre-Presentación

- [ ] Proyecto funcionando localmente
- [ ] Navegador listo (sin pestañas personales)
- [ ] Código subido a GitHub (o .zip listo)
- [ ] Practicaste tu presentación al menos una vez

---

## Criterios de Evaluación

Ver `rubric.md` para la rúbrica completa del proyecto.

**Recordatorio:** La presentación NO se califica por nervios o fluidez verbal. Se evalúa:
- Que el proyecto funcione
- Que demuestres comprensión de lo que hiciste
- Que puedas explicar una decisión técnica

---

## Durante las Presentaciones

- Escucha activamente a tus compañeros
- Aplausos al final de cada presentación
- Preguntas constructivas si hay tiempo

---

## Entrega Final

📦 **Antes de presentar, asegúrate de haber entregado:**
- Screenshot del proyecto terminado
- Link a repositorio de GitHub o archivo .zip

> ⚠️ Este lab es **CALIFICADO**. Ver `rubric.md`
```

---

## Template: Rúbrica (rubric.md) - SOLO PARA FACILITADOR

> ⚠️ **Este archivo es para el facilitador/evaluador, NO para el estudiante.**
> El estudiante ve la rúbrica INLINE en el lab. Este archivo tiene detalles adicionales para evaluación.
>
> ⚠️ **IMPORTANTE:** El contenido de `rubric.md` DEBE coincidir exactamente con la sección "Rúbrica de Evaluación" del lab. Si actualizas uno, actualiza el otro.

```markdown
# Rúbrica - Lab Módulo X: [Nombre del Proyecto]

> 📋 **Documento interno para evaluadores**

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | [Nombre del proyecto] |
| **Módulo** | X - [Nombre del módulo] |
| **Clase** | X - [Título de la clase] |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluación

### 1. [Criterio 1] (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripción de excelencia] |
| **Bueno** | 15 | [Descripción de buen desempeño] |
| **Satisfactorio** | 10 | [Descripción de desempeño mínimo] |
| **Bajo** | 5 | [Descripción de desempeño insuficiente] |

**Aspectos evaluados:**
- [Aspecto específico 1]
- [Aspecto específico 2]
- [Aspecto específico 3]

---

### 2. [Criterio 2] (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripción] |
| **Bueno** | 15 | [Descripción] |
| **Satisfactorio** | 10 | [Descripción] |
| **Bajo** | 5 | [Descripción] |

**Aspectos evaluados:**
- [Aspecto específico 1]
- [Aspecto específico 2]
- [Aspecto específico 3]

---

### 3. [Criterio 3] (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripción] |
| **Bueno** | 15 | [Descripción] |
| **Satisfactorio** | 10 | [Descripción] |
| **Bajo** | 5 | [Descripción] |

**Aspectos evaluados:**
- [Aspecto específico 1]
- [Aspecto específico 2]
- [Aspecto específico 3]

---

### 4. [Criterio 4] (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripción] |
| **Bueno** | 15 | [Descripción] |
| **Satisfactorio** | 10 | [Descripción] |
| **Bajo** | 5 | [Descripción] |

**Aspectos evaluados:**
- [Aspecto específico 1]
- [Aspecto específico 2]
- [Aspecto específico 3]

---

### 5. [Criterio 5 - Desafío] (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | [Descripción] |
| **Bueno** | 15 | [Descripción] |
| **Satisfactorio** | 10 | [Descripción] |
| **Bajo** | 5 | [Descripción] |

**Aspectos evaluados:**
- [Aspecto específico 1]
- [Aspecto específico 2]
- [Aspecto específico 3]

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente - Dominio completo de los conceptos |
| 80-89 | B | Bueno - Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio - Cumple requisitos mínimos |
| < 70 | F | Necesita mejora - No cumple requisitos básicos |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] [Archivo 1]
- [ ] [Archivo 2]
- [ ] [Archivo 3]

### Documentación
- [ ] [Documentación requerida]

### Verificación Técnica
- [ ] [Verificación 1]
- [ ] [Verificación 2]

---

## Notas para el Evaluador

1. **[Nota importante 1]**
2. **[Nota importante 2]**
3. **[Nota importante 3]**

---

## Ejemplo de Retroalimentación

### Retroalimentación Positiva
> "[Ejemplo de feedback positivo]"

### Áreas de Mejora
> "[Ejemplo de feedback constructivo]"
```

---

## Reglas de Contenido

### Límites de Estructura

| Elemento | Lab Regular | Lab Calificado | Notas |
|----------|-------------|----------------|-------|
| **Objetivos** | Máximo 3 | Máximo 3 | Deben ser medibles y específicos |
| **Conceptos Clave** | 3 (máximo 4) | 3 (máximo 4) | Solo términos nuevos de esta clase |
| **Partes del lab** | 3 | 5 | Calificado incluye Parte 5 Desafío |
| **Logros Adicionales** | 3 | 3 | 🟢 🟡 🔴 |
| **Criterios rúbrica** | N/A | 5 x 20 pts | Total 100 puntos |

### Entregables por Tipo

| Tipo de Lab | Entregable |
|-------------|------------|
| **Regular** | Screenshot con elemento de autenticidad (nombre, URL) |
| **Calificado** | Screenshot + código fuente (GitHub o .zip) |

---

### Gaps Intencionales

El código debe tener espacios para que el estudiante piense:

**❌ Incorrecto (todo completo):**
```html
<header>
    <h1>Mi Nombre</h1>
    <nav>
        <a href="#about">Sobre Mí</a>
        <a href="#hobbies">Hobbies</a>
    </nav>
</header>
```

**✅ Correcto (gaps intencionales):**
```html
<header>
    <h1><!-- Tu nombre aquí --></h1>
    <nav>
        <!-- Agrega al menos 3 enlaces de navegación -->
        <!-- Recuerda usar href="#id" para enlazar a secciones -->
    </nav>
</header>
```

### Checkpoints Visuales

Los checkpoints describen lo que el estudiante DEBE VER, no el código:

**❌ Incorrecto (técnico):**
> ✅ **Checkpoint:** El elemento header debe tener `display: flex` y `justify-content: space-between`

**✅ Correcto (visual):**
> ✅ **Checkpoint:** Tu nombre aparece a la izquierda y la navegación a la derecha del header

### Logros como Preview

Los logros introducen conceptos FUTUROS, no consolidan lo actual:

**❌ Incorrecto (consolidación):**
> 🟢 Agrega más secciones a tu página

**✅ Correcto (preview):**
> 🟢 Investiga la etiqueta `<a>` con `target="_blank"` para abrir enlaces en nueva pestaña (lo veremos en la Clase X+1)

---

## Distribución de Tiempo

### Lab Regular (90 min real → 120 min estructurado)

| Sección | Tiempo en guía | Tiempo real esperado |
|---------|---------------|---------------------|
| Parte 1 | 30 min | 20-25 min |
| Parte 2 | 35 min | 25-30 min |
| Parte 3 | 35 min | 25-30 min |
| Logros | 20 min | 10-15 min (opcional) |
| **Total** | **120 min** | **~90 min** |

### Lab Calificado - Clases 4 y 8 (~135 min total: 50% en clase + 50% post-clase)

**Diseño:** El lab es ~1.5x más extenso que un lab regular. Se espera que el estudiante avance ~50% durante la sesión en vivo y complete el resto antes de la fecha de entrega.

| Fase | Secciones | Tiempo | Dónde |
|------|-----------|--------|-------|
| En clase | Partes 1-2 | ~65-70 min | Sesión en vivo |
| Post-clase | Partes 3-5 + Verificación | ~65-70 min | Tarea individual |
| **Total** | **5 partes** | **~135 min** | **Mixto** |

**Estructura sugerida:**

| Sección | Tiempo | Dónde |
|---------|--------|-------|
| Parte 1 | 30 min | En clase |
| Parte 2 | 35 min | En clase |
| Parte 3 | 30 min | Post-clase |
| Parte 4 | 20 min | Post-clase |
| Parte 5 (Desafío) | 20 min | Post-clase |

### Lab Demo Day - Clase 12 (formato especial)

| Sección | Tiempo |
|---------|--------|
| Preparación pre-presentación | 15 min |
| Presentaciones (3 min x persona) | Variable |
| Cierre y celebración | 15 min |

> ⚠️ El Lab 12 es máximo 100 líneas. El contenido técnico se completó en Clase 11.

---

## Coherencia con Otros Recursos

El lab debe alinearse con:

| Recurso | Alineación |
|---------|------------|
| **README.md** | Los objetivos del lab = objetivos de la clase |
| **slides/README.md** | Los checkpoints técnicos van en slides, no en lab |
| **facilitator/README.md** | Los checkpoints de tiempo coinciden |

---

## Validación Final

### Lab Regular (clases 1-3, 5-7, 9-11)

- [ ] Emojis en secciones: 🎯 Objetivos, 🔑 Conceptos Clave, ⚙️ Setup Inicial, 📝 Entrega
- [ ] Sección "⚙️ Setup Inicial" con tabla de requisitos (clases 2, 3, 5, 6, 7, 9, 10, 11)
- [ ] Duración ~90 min (3 partes)
- [ ] Código tiene gaps intencionales
- [ ] Checkpoints son visuales (no técnicos)
- [ ] 3 Logros Adicionales con preview de conceptos futuros
- [ ] Checklist de entrega claro

### Lab Calificado (clases 4, 8)

- [ ] Emojis en secciones: 🎯 Objetivos, 🔑 Conceptos Clave, ⚙️ Setup Inicial, 📝 Entrega
- [ ] Sección "⚙️ Setup Inicial" con tabla de requisitos
- [ ] Duración ~135 min (5 partes, incluyendo Parte 5 Desafío)
- [ ] Nota sobre distribución 50/50 (clase + post-clase)
- [ ] Código tiene gaps intencionales
- [ ] Checkpoints son visuales (no técnicos)
- [ ] 3 Logros Adicionales con preview de conceptos futuros
- [ ] Rúbrica INLINE con 5 criterios x 20 pts
- [ ] `rubric.md` sincronizado con rúbrica inline
- [ ] Checklist de entrega claro (screenshot + código)
