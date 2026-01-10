---
name: evaluacion-clase
description: Evalúa calidad y coherencia de una clase antes de publicar. Usar cuando se pida evaluar, revisar, QA, o diagnóstico de una clase.
allowed-tools: Read, Glob, Grep, Bash
---

# Evaluador de Clases

## Objetivo

Verificar que una clase está lista para publicar en Canvas, evaluando:
1. **Calidad individual** de cada recurso
2. **Coherencia horizontal** con clases adyacentes
3. **Coherencia vertical** con el módulo

## Proceso de Evaluación

### Paso 1: Identificar la clase

Extraer número de clase (X) del prompt del usuario.

### Paso 2: Determinar contexto

```
Módulo = floor((X - 1) / 4) + 1
Posición en módulo = ((X - 1) % 4) + 1
Es última del módulo = Posición == 4
```

### Paso 3: Leer recursos

```bash
# Clase actual
curriculum/class-{X}/README.md
curriculum/class-{X}/lab/README.md
curriculum/class-{X}/facilitator/README.md
curriculum/class-{X}/slides/README.md

# Clases adyacentes (si existen)
curriculum/class-{X-1}/README.md
curriculum/class-{X+1}/README.md

# Contexto del módulo
README.md (syllabus principal)
```

### Paso 4: Aplicar checklist

## Checklist de Evaluación

### 1. Recursos Individuales

#### README.md
| Criterio | Verificar |
|----------|-----------|
| Estructura de fases | Suma 150 min total |
| Objetivos | 4-5 items claros y medibles |
| Conexión M1 | Menciona conocimiento previo |
| Glosario | 5-8 términos nuevos |

#### lab/README.md
| Criterio | Verificar |
|----------|-----------|
| Longitud | Regular: < 400 líneas. Calificado (4, 8): < 500 líneas |
| Partes | Regular: 3 partes. Calificado: 5 partes (incluye Desafío) |
| Checkpoints | Visuales, definidos por parte |
| Código | Gaps intencionales (no completo) |
| Rúbrica | Si calificado: inline 5x20 pts + rubric.md sincronizado |
| Entrega | Instrucciones claras |

#### facilitator/README.md
| Criterio | Verificar |
|----------|-----------|
| Longitud | < 300 líneas (~8 min lectura) |
| Conceptos clave | 3-5 definiciones |
| Analogías | 3-4 útiles |
| Contexto histórico | Con fuentes verificables |
| Dinámicas | 2-3 con diálogos ejemplo |
| Errores comunes | Tabla con 4-6 |
| Checkpoints | Tabla con tiempos |

#### slides/README.md
| Criterio | Verificar |
|----------|-----------|
| Cantidad | ≤ 12 slides |
| Transiciones | Tiene entrada y salida |
| Quiz | Tiene preguntas pre-lab |
| Checkpoints | Uno por HU |
| Reflexiones | 1-2 conceptos clave |

### 2. Coherencia Horizontal (X-1 → X → X+1)

| Aspecto | Verificar |
|---------|-----------|
| Conexión hacia atrás | README menciona clase anterior |
| | Slides tienen transición de entrada |
| | Lab usa conceptos de X-1 |
| Conexión hacia adelante | Facilitador planta semilla para X+1 |
| | Slides tienen preview |
| Curva de dificultad | Complejidad incrementa gradualmente |
| | No hay saltos conceptuales bruscos |

### 3. Coherencia Vertical (Módulo)

| Aspecto | Verificar |
|---------|-----------|
| Proyecto integrador | Lab contribuye al proyecto del módulo |
| Preparación lab final | Si X es clase 1-3, prepara para clase 4 |
| | Si X es clase 4, integra conceptos de 1-3 |
| Lab calificado | Si es clase 4 u 8: lab es ~1.5x más extenso que regulares |
| | Diseñado para 50% clase + 50% post-clase |
| | Incluye Parte 5 Desafío + rúbrica 5x20 |
| Adherencia syllabus | Tema coincide con README.md del curso |

## Formato de Output

```markdown
## Evaluación Clase X: [Título]

**Módulo:** M{N} | **Posición:** {P} de 4 | **Proyecto:** [Nombre]

---

### Puntuación: X/10

---

### 📊 Recursos Individuales

| Recurso | Estado | Observación |
|---------|--------|-------------|
| README.md | ✅/⚠️/❌ | [Detalle] |
| lab/README.md | ✅/⚠️/❌ | [Detalle] |
| facilitator/README.md | ✅/⚠️/❌ | [Detalle] |
| slides/README.md | ✅/⚠️/❌ | [Detalle] |

---

### 🔗 Coherencia Horizontal

| Conexión | Estado | Observación |
|----------|--------|-------------|
| ← Clase X-1 | ✅/⚠️/❌ | [Detalle] |
| → Clase X+1 | ✅/⚠️/❌ | [Detalle] |
| Curva dificultad | ✅/⚠️/❌ | [Detalle] |

---

### 📐 Coherencia Vertical

| Aspecto | Estado | Observación |
|---------|--------|-------------|
| Proyecto integrador | ✅/⚠️/❌ | [Detalle] |
| Prep. lab final | ✅/⚠️/❌ | [Detalle] |
| Syllabus | ✅/⚠️/❌ | [Detalle] |

---

### ✅ Fortalezas
- [Punto fuerte 1]
- [Punto fuerte 2]

### ⚠️ Observaciones Menores
- [Mejora sugerida 1]
- [Mejora sugerida 2]

### 🔴 Problemas Críticos
- [Problema que bloquea publicación]

---

### Recomendación Final

[ ] **Lista para publicar**
[ ] **Requiere ajustes menores** (listar)
[ ] **Requiere revisión mayor** (listar)
```

## Escala de Puntuación

| Puntos | Significado |
|--------|-------------|
| 10 | Perfecta, publicar sin cambios |
| 9 | Excelente, detalles mínimos opcionales |
| 8 | Muy buena, 1-2 ajustes menores |
| 7 | Buena, algunos ajustes recomendados |
| 6 | Aceptable, necesita mejoras |
| < 6 | No lista, requiere trabajo significativo |

## Criterios de Bloqueo

La clase NO está lista si:
- Falta alguno de los 4 recursos
- Lab tiene código que no funciona
- Tiempos no suman ~150 min
- No hay conexión clara con clase anterior
- Facilitador tiene contenido de otra clase (error común)
