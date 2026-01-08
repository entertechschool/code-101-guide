# CLAUDE.md - Code 101 Guide

## Referencia Principal
- **Syllabus (fuente de verdad):** [README.md](README.md)
- **Estructura:** 3 módulos técnicos (4 clases c/u) = 12 clases
- **Formato:** 180 min por clase (blend)

---

## Checklist de Progreso

### M1: Introducción al Desarrollo Web (Clases 1-4)
- [ ] **Clase 1:** Cómo funciona la web moderna
- [ ] **Clase 2:** HTML Semántico: estructura y accesibilidad
- [ ] **Clase 3:** CSS Básico, estilos y estructura visual
- [ ] **Clase 4:** Markdown y GitHub Pages: mi web en la nube

### M2: Herramientas del Desarrollador (Clases 5-8)
- [ ] **Clase 5:** Setup del Desarrollador Moderno
- [ ] **Clase 6:** Diseño Web Responsive + DevTools
- [ ] **Clase 7:** Wireframing y Pensamiento Creativo
- [ ] **Clase 8:** Vibe Coding Tools

### M3: Introducción a la Programación con JavaScript (Clases 9-12)
- [ ] **Clase 9:** Fundamentos de JavaScript y Pensamiento Algorítmico
- [ ] **Clase 10:** Decisiones y Lógica Condicional
- [ ] **Clase 11:** Funciones: Los Bloques de Construcción
- [ ] **Clase 12:** Proyecto Final

---

## Convenciones por Archivo

Cada clase tiene 4 archivos en `curriculum/class-XX/`:

| Archivo | Propósito | Restricciones |
|---------|-----------|---------------|
| `README.md` | Resumen + preparación del estudiante | Estructura estándar |
| `lab/README.md` | Guía de laboratorio paso a paso | Máximo 250 líneas |
| `slides/README.md` | Presentación reveal.js | Mantener CSS actual |
| `facilitator/README.md` | Guía pedagógica para instructor | Reflexiones profundas |

---

## Estructura de Archivos

### README.md (raíz de clase)
```markdown
> Módulo X: Clase Y de Z

# Título de la Clase

## Resumen (3-4 párrafos)
## Estructura sugerida (tabla de fases)
## Objetivos de aprendizaje (4-5 items)
## Preparación para la clase
## Glosario de nuevos términos
```

### lab/README.md
```markdown
# Lab: Título

## Objetivos (1-4 items)
## Conceptos clave (3-4 términos)
## Setup inicial (comandos)
## Parte 1, 2, 3... (~25-50 min c/u)
## Retos autónomos (básico/intermedio/avanzado)
## Instrucciones de entrega (checklist)
```

### slides/README.md
```markdown
<style>
  /* CSS custom para grids */
</style>

<!-- Diapositivas separadas por --- -->
- Portada
- Objetivo
- Conexión con clase anterior
- Contenido técnico
- Lab integrado
- Validación
- Cierre
```

### facilitator/README.md
```markdown
# Guía del Facilitador: Tema

## Secciones numeradas (1-10)
- Momentos clave
- Conceptos mal entendidos
- Estrategias de enseñanza
- Errores comunes
- Señales de comprensión
- Conexión con futuras clases
```

---

## Referencias de Estilo

- **Idioma:** Español latinoamericano
- **Tono README:** Profesional, inspirador
- **Tono Lab:** Práctico, paso a paso
- **Tono Slides:** Educativo, conversacional
- **Tono Facilitator:** Reflexivo, mentor-a-mentor
- **Emojis:** Estratégicos en labs y slides

---

## Sugerencias de Commit

Después de implementaciones importantes, sugerir commit con mensaje listo para copiar:

```
Sugerencia de commit:
git commit -m "tipo: descripción concisa"
```

**Cuándo sugerir:**
- Nuevo archivo/feature completado
- Corrección de bugs
- Refactorización significativa
- Actualización de documentación

**Formato del mensaje:**
- `feat:` nueva funcionalidad
- `fix:` corrección de error
- `docs:` documentación
- `refactor:` reestructuración sin cambio funcional
- `style:` formato, sin cambio de lógica

**Nota:** El usuario decide si hace el commit o no.

---

## Reglas de Encoding (OBLIGATORIO)

**SIEMPRE usar UTF-8 puro para todos los archivos.**

Al escribir contenido en español:
- Usar tildes directamente: á, é, í, ó, ú, ñ, ü
- Usar signos de interrogación/exclamación: ¿?, ¡!
- **NUNCA** usar Write tool con strings que contengan caracteres especiales sin verificar encoding
- Si aparecen caracteres como `�` o `\u00f3`, el archivo está corrupto y debe reescribirse

**Verificación:** Después de crear/editar archivos con español, leer el archivo para confirmar que los caracteres se muestran correctamente.

---

## Fuente de Verdad (OBLIGATORIO)

**README.md es la única fuente de verdad para:**
- Tabla de contenidos por clase
- Estructura de módulos y labs calificados
- Objetivos del curso

**Al modificar contenido de clases:**
1. Actualizar **primero** la tabla en `README.md → Referencia Rápida de Contenidos`
2. Los demás archivos (CLAUDE.md, labs, etc.) referencian a README.md
3. **NUNCA** duplicar tablas de contenido en otros archivos

**Razón:** Evitar inconsistencias cuando el contenido del curso cambia.

---

## Sistema de Evaluación

**Solo el lab del último día de cada módulo es calificado (0-100)**

| Módulo | Lab Calificado | Archivo Rúbrica |
|--------|----------------|-----------------|
| M1 | Clase 4 | `class-04/lab/rubric.md` |
| M2 | Clase 8 | `class-08/lab/rubric.md` |
| M3 | Clase 12 | `class-12/lab/rubric.md` |

### Estructura de Rúbrica
```markdown
# Rúbrica - Lab Módulo X

## Criterios (4 categorías x 25 pts = 100 pts total)
| Criterio | Excelente (25) | Bueno (18) | Satisfactorio (10) | Bajo (5) |
|----------|----------------|------------|---------------------|----------|

## Escala
- 90-100: A (Excelente)
- 80-89: B (Bueno)
- 70-79: C (Satisfactorio)
- < 70: F (Necesita Mejora)

## Checklist de Entrega
```

---

## Herramientas del Curso

### Módulo 1
- Excalidraw (diagramas)
- Google IDX / Firebase Studio (IDE en la nube)
- Codepen (prototipos rápidos)

### Módulo 2
- Terminal (comandos básicos)
- Visual Studio Code (editor)
- Git (control de versiones)
- Chrome DevTools (inspección)
- Excalidraw (wireframes)
- Figma (diseño)

### Módulo 3
- Consola del navegador
- VS Code con extensiones JS

---

## Proyectos Integradores

| Módulo | Proyecto | Repositorio |
|--------|----------|-------------|
| M1 | Mi Primer Catálogo Web en la Nube | Por definir |
| M2 | MyLinks - Tu Hub Personal | Por definir |
| M3 | Adivina el Número | Por definir |

---

## Notas de Desarrollo

*Última actualización: Enero 2026*

- Curso inicial del programa (sin prerrequisitos)
- 12 clases en 3 módulos técnicos
- Enfoque: HTML, CSS, herramientas dev, JavaScript básico
- Prepara para Code 201

---

## Al reportar problemas

Siempre incluir:
1. **Ubicación:** `archivo:línea`
2. **Referencia:** "Clase X enseña..." o "Lab X Parte Y pide..." (consultar tabla en README.md)
