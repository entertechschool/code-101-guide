---
name: module-planner
description: Planifica la arquitectura completa de un módulo (4 clases). Usar ANTES de crear clases individuales. Genera MODULE-PLAN.md para aprobación.
allowed-tools: Read, Glob, Grep, WebSearch, AskUserQuestion
---

# Planificador de Módulos

## Objetivo

Diseñar la arquitectura completa de un módulo de 4 clases ANTES de crear los recursos individuales. Este skill genera un documento `MODULE-PLAN.md` que sirve como blueprint para los demás skills.

---

## Cuándo Usar Este Skill

| Escenario | Usar |
|-----------|------|
| Crear módulo nuevo desde cero | Sí |
| Ajustar módulo existente (reordenar, actualizar, expandir) | Sí |
| Crear una sola clase de un módulo ya planificado | No (usar skills individuales) |
| Evaluar calidad de clases existentes | No (usar `evaluation-class`) |

---

## Filosofía de Diseño

### Principio Central
**"Las competencias definen el destino; el proyecto integrador es el vehículo"**

### Patrones Obligatorios

1. **Proyecto Único Incremental**
   - Los 4 labs construyen el MISMO proyecto
   - Cada clase añade UNA capa de complejidad
   - El estudiante ve evolución concreta de su trabajo

2. **Capas de Complejidad**
   ```
   Clase 1: Fundamento   → Lo mínimo funcional
   Clase 2: Estructura   → Organización y semántica
   Clase 3: Presentación → Diseño visual
   Clase 4: Integración  → Todo junto + concepto avanzado
   ```

3. **Conexiones Explícitas**
   - Cada lab referencia qué se necesita de la clase anterior
   - "Logros Adicionales" anticipan el siguiente módulo
   - La clase 4 integra conceptos de clases 1-3

4. **Lab Calificado (Clase 4)**
   - ~1.5x más extenso que labs regulares
   - 50% en clase + 50% post-clase
   - 5 partes (incluye Desafío Avanzado)
   - Rúbrica 5 criterios x 20 pts = 100 pts

---

## Proceso de Planificación

### Fase 0: Leer scaffolding

Leer `AGENTS.md > ## Scaffolding` para obtener las variables de nivel del curso:
- Tabla de Autonomía → distribuir porcentaje de gaps por módulo (ej. M1=10%, M2=15%, M3=20%)
- `part_naming` → nombrar partes del lab en checkpoints (ej. "Parte 1" no "HU1")
- `checkpoint_style` → formato de checkpoints en el plan (ej. `visual` = describe lo que se ve)
- `scaffolding_style` → calibrar nivel de detalle en labs planificados
- `gap_types` → tipos de gap disponibles para el nivel

### Fase 1: Recopilar Contexto

```
1. Identificar número de módulo (M)
   - M1 = clases 1-4
   - M2 = clases 5-8
   - M3 = clases 9-12

2. Leer contexto existente:
   - README.md del curso (syllabus)
   - Si M > 1: módulo anterior (para continuidad)
   - Si ajuste: recursos actuales del módulo

3. Obtener del usuario:
   - Competencias objetivo (qué debe SABER HACER el estudiante)
   - Nombre del proyecto integrador
   - Herramientas/tecnologías principales
   - Conexión con módulo anterior (si aplica)
```

### Fase 2: Diseñar Arquitectura

```
1. Mapear competencias a clases
   - Una competencia principal por clase
   - Verificar que sean medibles y verificables

2. Diseñar progresión del proyecto
   - Qué tiene el proyecto al final de cada clase
   - Cómo cada capa se construye sobre la anterior

3. Definir checkpoints por lab (usar `part_naming` y `checkpoint_style` de Fase 0)
   - 3 checkpoints para labs regulares (clases 1-3)
   - 5 partes para lab calificado (clase 4)

4. Establecer criterios de evaluación (clase 4)
   - 5 criterios que reflejen las competencias del módulo
   - Incluir criterio de "Desafío Avanzado"

5. Identificar conexiones
   - Pre-requisitos del módulo anterior
   - Semillas para el módulo siguiente
```

### Fase 3: Generar MODULE-PLAN.md

Crear documento en: `curriculum/module-{M}/MODULE-PLAN.md`

(Ver template completo abajo)

---

## Template: MODULE-PLAN.md

```markdown
# Plan del Módulo {N}: {Título}

> Este documento define la arquitectura del módulo. Aprobar antes de crear clases.

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Módulo** | {N} |
| **Título** | {Título descriptivo} |
| **Proyecto Integrador** | {Nombre del proyecto} |
| **Clases** | {4N-3} a {4N} |
| **Pre-requisitos** | {Qué necesita saber el estudiante} |

---

## Competencias del Módulo

Al finalizar el módulo, el estudiante podrá:

1. **{Competencia 1}** - {verbo de acción + objeto + contexto}
2. **{Competencia 2}** - {verbo de acción + objeto + contexto}
3. **{Competencia 3}** - {verbo de acción + objeto + contexto}
4. **{Competencia 4}** - {verbo de acción + objeto + contexto}

---

## Proyecto Integrador: {Nombre}

### Descripción
{2-3 párrafos describiendo:
- Qué es el proyecto
- Por qué es relevante para el estudiante
- Qué aprenderá construyéndolo}

### Evolución por Clase

| Clase | Capa | Estado del Proyecto al Finalizar |
|-------|------|----------------------------------|
| {4N-3} | Fundamento | {Descripción concreta} |
| {4N-2} | Estructura | {Qué se añade} |
| {4N-1} | Presentación | {Qué se añade} |
| {4N} | Integración | {Estado final completo} |

### Entregable Final
{Descripción de qué entrega el estudiante al final del módulo}

---

## Arquitectura de Clases

### Clase {4N-3}: {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {UN solo concepto} |
| **Objetivo del Lab** | {Qué construye/aprende} |
| **Herramientas** | {Software, extensiones, sitios} |
| **Entregable** | {Screenshot / código / ambos} |

**Checkpoints del Lab:**
1. {Checkpoint verificable visualmente - describe QUÉ debe ver el estudiante}
2. {Checkpoint 2}
3. {Checkpoint 3}

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |
| {Término 2} | {Definición} |

**Dependencias:**
- **Requiere:** {Nada / Conceptos del módulo anterior}
- **Habilita:** {Qué conceptos de clase {4N-2} dependen de esto}

---

### Clase {4N-2}: {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {UN solo concepto} |
| **Objetivo del Lab** | {Qué construye/aprende} |
| **Herramientas** | {Software, extensiones, sitios} |
| **Entregable** | {Screenshot / código / ambos} |

**Checkpoints del Lab:**
1. {Checkpoint 1}
2. {Checkpoint 2}
3. {Checkpoint 3}

**Tu Proyecto Hasta Ahora (del lab anterior):**
- [ ] {Requisito 1 de clase anterior}
- [ ] {Requisito 2 de clase anterior}

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |

**Dependencias:**
- **Requiere:** Clase {4N-3} ({concepto específico})
- **Habilita:** {Qué conceptos de clase {4N-1} dependen de esto}

---

### Clase {4N-1}: {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {UN solo concepto} |
| **Objetivo del Lab** | {Qué construye/aprende} |
| **Herramientas** | {Software, extensiones, sitios} |
| **Entregable** | {Screenshot / código / ambos} |

**Checkpoints del Lab:**
1. {Checkpoint 1}
2. {Checkpoint 2}
3. {Checkpoint 3}

**Tu Proyecto Hasta Ahora:**
- [ ] {Requisito de clase {4N-3}}
- [ ] {Requisito de clase {4N-2}}

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |

**Dependencias:**
- **Requiere:** Clases {4N-3} y {4N-2}
- **Habilita:** Lab calificado (clase {4N})

---

### Clase {4N} (Lab Calificado): {Título}

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | {Integración + concepto nuevo avanzado} |
| **Objetivo del Lab** | Demostrar dominio del módulo completo |
| **Herramientas** | {Todas las del módulo} |
| **Entregable** | Proyecto completo + código fuente |
| **Distribución** | 50% en clase + 50% post-clase |

**Checkpoints del Lab (5 partes):**

| Parte | Título | Tiempo | Dónde | Descripción |
|-------|--------|--------|-------|-------------|
| 1 | {Título} | 30 min | En clase | {Qué se hace} |
| 2 | {Título} | 35 min | En clase | {Qué se hace} |
| 3 | {Título} | 30 min | Post-clase | {Qué se hace} |
| 4 | Verificación | 15 min | Post-clase | Revisar con rúbrica |
| 5 | Desafío Avanzado | 25 min | Post-clase | {Qué se hace} |

**Tu Proyecto Hasta Ahora:**
- [ ] {Requisito de clase {4N-3}}
- [ ] {Requisito de clase {4N-2}}
- [ ] {Requisito de clase {4N-1}}

**Criterios de Evaluación (5 x 20 pts = 100 pts):**

| Criterio | Qué Evalúa | Excelente (20) | Bueno (15) | Satisfactorio (10) | Bajo (5) |
|----------|-----------|----------------|------------|-------------------|----------|
| **{Criterio 1}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 2}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 3}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 4}** | {Aspecto} | {Descripción} | {Descripción} | {Descripción} | {Descripción} |
| **{Criterio 5 - Desafío}** | Parte 5 | {Descripción} | {Descripción} | {Descripción} | {Descripción} |

**Glosario de la Clase:**
| Término | Definición breve |
|---------|------------------|
| {Término 1} | {Definición} |

---

## Mapa de Dependencias

```
Clase {4N-3} ──→ Clase {4N-2} ──→ Clase {4N-1} ──→ Clase {4N}
     │               │               │               │
     └───────────────┴───────────────┴───────────────┘
                  Proyecto: {Nombre}
```

### Flujo de Conceptos

| Clase | Introduce | Usa de Anteriores |
|-------|-----------|-------------------|
| {4N-3} | {Concepto} | {Nada / Módulo anterior} |
| {4N-2} | {Concepto} | {De clase {4N-3}} |
| {4N-1} | {Concepto} | {De clases {4N-3}, {4N-2}} |
| {4N} | {Concepto avanzado} | {Todo lo anterior} |

---

## Conexión con Otros Módulos

### Módulo Anterior (M{N-1})
| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se asumen** | {Lista de conceptos} |
| **Proyecto anterior** | {Nombre} |
| **¿Se conecta?** | {Sí: cómo / No: proyectos independientes} |

### Módulo Siguiente (M{N+1})
| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se anticipan** | {Lista para "Logros Adicionales"} |
| **Semillas plantadas** | {Qué se menciona pero no se profundiza} |

---

## Glosario Completo del Módulo

| Término | Clase | Definición |
|---------|-------|------------|
| {Término 1} | {4N-3} | {Definición} |
| {Término 2} | {4N-3} | {Definición} |
| {Término 3} | {4N-2} | {Definición} |
| ... | ... | ... |

---

## Checklist de Verificación

Antes de aprobar este plan, verificar:

- [ ] Las 4 competencias son medibles con verbos de acción
- [ ] El proyecto tiene sentido como unidad coherente
- [ ] Cada clase tiene UN concepto principal claro
- [ ] Los checkpoints son verificables visualmente
- [ ] Las dependencias entre clases son explícitas
- [ ] La clase 4 integra conceptos de las 3 anteriores
- [ ] Los 5 criterios de evaluación reflejan las competencias
- [ ] El Criterio 5 corresponde al Desafío Avanzado
- [ ] Hay conexión clara con módulos adyacentes
- [ ] El glosario cubre todos los términos nuevos

---

## Notas de Diseño

{Espacio para anotar decisiones de diseño, alternativas consideradas, o contexto adicional}
```

---

## Para Módulos Existentes (Ajustes)

Cuando el módulo ya existe, el proceso cambia:

### Paso 1: Extraer Arquitectura Actual

```
1. Leer los 4 READMEs de clase
2. Leer los 4 labs
3. Identificar:
   - Proyecto integrador actual
   - Conceptos por clase
   - Checkpoints existentes
   - Criterios de evaluación (si hay)
```

### Paso 2: Identificar Tipo de Ajuste

| Tipo | Descripción | Impacto |
|------|-------------|---------|
| **Reordenar** | Mover contenido entre clases | Medio - ajustar dependencias |
| **Actualizar** | Cambiar herramientas/versiones | Bajo - mantener estructura |
| **Expandir** | Agregar contenido nuevo | Alto - verificar tiempos |
| **Reducir** | Quitar contenido | Medio - verificar coherencia |

### Paso 3: Generar MODULE-PLAN.md con Diff

```markdown
## Cambios Propuestos

### Clase X: {Título}
| Aspecto | Actual | Propuesto | Razón |
|---------|--------|-----------|-------|
| {Aspecto} | {Valor actual} | {Nuevo valor} | {Por qué} |
```

---

## Integración con Otros Skills

### Flujo Completo

```
┌─────────────────────┐
│   module-planner    │ ← ESTE SKILL
└──────────┬──────────┘
           │
           ▼
    MODULE-PLAN.md
    (Usuario aprueba)
           │
           ▼
┌──────────────────────────────────────────────┐
│  Para cada clase (1-4):                      │
│                                              │
│  1. class-readme  → README.md                │
│  2. class-lab     → lab/README.md            │
│                     (+ rubric.md si clase 4) │
│  3. class-slides  → slides/README.md         │
│  4. class-facilitator → facilitator/README.md│
└──────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────┐
│  evaluation-class   │ (Verificar cada clase)
└─────────────────────┘
```

### Información que Este Skill Provee

| Información | Skills que la Usan |
|-------------|-------------------|
| Competencias del módulo | class-readme, class-lab |
| Concepto por clase | class-readme, class-slides |
| Checkpoints por lab | class-lab, class-slides |
| Glosario por clase | class-readme |
| Criterios evaluación | class-lab (rubric.md) |
| Dependencias entre clases | class-slides (transiciones) |
| Conexión con otros módulos | class-lab (Logros Adicionales) |
| "Tu Proyecto Hasta Ahora" | class-lab |

---

## Ejemplo: M1 Fundamentos Web

Para referencia, así se ve la arquitectura del M1:

```
Módulo 1: Fundamentos Web
Proyecto: "Mi Perfil Personal"

Clase 1: Setup y Web Moderna
- Concepto: HTML básico + ciclo cliente-servidor
- Entregable: Página con nombre, foto, bio, hobbies

Clase 2: Diseña y Estructura
- Concepto: Wireframing + HTML semántico
- Entregable: Wireframe + página con <header>, <main>, <section>, <footer>

Clase 3: Estilos con CSS
- Concepto: Selectores CSS + Box Model + Tipografía
- Entregable: Perfil estilizado con paleta de colores y Google Fonts

Clase 4: Layout Moderno con Flexbox (Lab Calificado)
- Concepto: Flexbox + estados hover + transiciones
- Entregable: Proyecto completo con header horizontal, cards, footer
- Criterios: HTML (20), CSS (20), Flexbox (20), Calidad (20), Desafío (20)
```

---

## Validación Final

Después de generar MODULE-PLAN.md, verificar que:

1. **Coherencia vertical:** Cada clase prepara para la siguiente
2. **Coherencia horizontal:** Las 4 clases forman una unidad temática
3. **Medibilidad:** Todos los checkpoints son verificables
4. **Completitud:** El plan tiene toda la info necesaria para crear clases
5. **Realismo:** Los tiempos y alcances son alcanzables
