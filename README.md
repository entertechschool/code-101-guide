# Code 101 - Elementals Software Development

> **Status:** 🔄 Actualizando - Ver [PLAN_REFACTOR_COURSE.md](PLAN_REFACTOR_COURSE.md) para la nueva estructura

Guía completa del curso Code 101: introducción al desarrollo web con HTML, CSS, herramientas del desarrollador y fundamentos de JavaScript.

---

## Formato del Curso

| Aspecto | Detalle |
|---------|---------|
| **Total de clases** | 12 sesiones |
| **Duración por clase** | 180 min (blend) |
| **Estructura** | 3 módulos técnicos (4 clases c/u) |
| **Modalidad** | Blend (teoría + práctica) |

---

## Estructura del Curso

```
┌─────────────────────────────────────────────────────────────┐
│  M1: Introducción      M2: Herramientas    M3: Programación │
│  al Desarrollo Web     del Desarrollador   con JavaScript   │
│  (4 clases)            (4 clases)          (4 clases)       │
└─────────────────────────────────────────────────────────────┘
```

---

## Objetivos del Curso

1. **Comprender cómo funciona una aplicación web moderna**
   - Entender el ciclo de vida de una aplicación web: desde el navegador hasta el servidor
   - Distinguir el rol de HTML, CSS y JavaScript en la experiencia del usuario
   - Reconocer la relación entre frontend, backend, bases de datos y la nube
   - Explorar cómo interactúan los distintos componentes a través de ejemplos reales

2. **Diseñar interfaces accesibles con HTML y CSS**
   - Crear estructuras semánticas que mejoren la accesibilidad y comprensión del contenido
   - Aplicar estilos visuales utilizando selectores, propiedades y reglas de CSS
   - Comprender y utilizar el modelo de caja (Box Model) para controlar el espacio de los elementos
   - Usar colores, tamaños y espaciado para mejorar la legibilidad y organización del contenido

3. **Adoptar herramientas del desarrollador moderno**
   - Navegar eficientemente con editores de código (VS Code)
   - Usar comandos básicos en la terminal
   - Controlar versiones con Git y GitHub
   - Introducir herramientas de IA como apoyo al aprendizaje

4. **Desarrollar pensamiento lógico y algorítmico**
   - Comprender la lógica básica de programación
   - Utilizar pseudocódigo y diagramas de flujo para resolver problemas
   - Introducir estructuras como variables, condicionales y bucles
   - Resolver desafíos simples que refuercen la lógica computacional

---

## Módulo 1: Introducción al Desarrollo Web

**Proyecto:** Mi Perfil Personal

| Clase | Tema | Contenido Clave |
|-------|------|-----------------|
| 1 | Setup y Web Moderna | VS Code, Live Server, HTML básico, cliente-servidor |
| 2 | Diseña y Estructura | Wireframes, HTML semántico, navegación con anclas, accesibilidad |
| 3 | Estilos con CSS | Selectores, Box Model, Google Fonts, paleta de colores |
| **4** | **Layout Moderno con Flexbox** | Flexbox, cards, hover states, transiciones |

**Herramientas:** VS Code, Live Server, Excalidraw, Google Fonts, Coolors

> **Lab Evaluado:** Clase 4 - Mi Perfil Personal
>
> Un perfil personal con HTML semántico, CSS estilizado con paleta de colores y tipografía, layout con Flexbox (header horizontal + cards), y estados hover con transiciones.

---

## Módulo 2: Herramientas del Desarrollador

**Proyecto:** MyLinks - Tu Hub Personal en la Web

| Clase | Tema | Contenido Clave |
|-------|------|-----------------|
| 5 | Setup del Desarrollador Moderno | Terminal, Git básico, VS Code, clonar y push |
| 6 | Diseño Web Responsive + DevTools | Unidades relativas, Flexbox, media queries, DevTools |
| 7 | Wireframing y Pensamiento Creativo | Wireframes, fidelidad, Design Thinking, ideación |
| **8** | **Vibe Coding Tools** | Prototipado con IA, Prompt Engineering, tokens, límites |

**Herramientas:** Terminal, Visual Studio Code, Git, Chrome DevTools, Excalidraw, Figma

> **Lab Evaluado:** Clase 8 - MyLinks - Tu Hub Personal en la Web
>
> Un sitio web personalizado inspirado en Linktree que sirve como centro de enlaces para recursos, herramientas y proyectos, con diseño responsive, estructura semántica y publicación en GitHub Pages.

---

## Módulo 3: Introducción a la Programación con JavaScript

**Proyecto:** Adivina el Número - Juego Interactivo

| Clase | Tema | Contenido Clave |
|-------|------|-----------------|
| 9 | Fundamentos de JavaScript | Variables, tipos de datos, operadores, consola |
| 10 | Decisiones y Lógica Condicional | if/else, operadores de comparación, ternarios |
| 11 | Funciones: Los Bloques de Construcción | Declaración, parámetros, return, eventos |
| **12** | **Proyecto Final** | Presentación, demostración, evaluación entre pares |

> **Lab Evaluado:** Clase 12 - Adivina el Número - Juego Interactivo
>
> Un juego donde el sistema genera un número aleatorio entre 1 y 100, y el jugador debe adivinarlo con el menor número de intentos posibles. Incluye mensajes de pista, contador de intentos, historial visual de intentos anteriores y retroalimentación visual con colores.

---

## Sistema de Evaluación

### Labs Calificados

Solo el **último lab de cada módulo** es calificado con una rúbrica de **4 criterios x 25 pts = 100 pts**.

| Módulo | Clase | Lab Evaluado | Rúbrica |
|--------|-------|--------------|---------|
| M1 | 4 | Mi Perfil Personal | `class-04/lab/rubric.md` |
| M2 | 8 | MyLinks | `class-08/lab/rubric.md` |
| M3 | 12 | Adivina el Número | `class-12/lab/rubric.md` |

### Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente - Dominio completo |
| 80-89 | B | Bueno - Comprensión sólida |
| 70-79 | C | Satisfactorio - Cumple requisitos |
| < 70 | F | Necesita mejora |

### Tests Diagnósticos por Módulo

Al final de cada módulo (clases 4, 8, 12), se realiza un **test diagnóstico** de 15 minutos durante la clase:

| Módulo | Clase | Test | Contenido |
|--------|-------|------|-----------|
| M1 | 4 | Fundamentos Web | HTML, CSS, Box Model, Flexbox |
| M2 | 8 | Herramientas Dev | Terminal, Git, Responsive, DevTools |
| M3 | 12 | JavaScript Básico | Variables, condicionales, funciones |

> ⚠️ **Importante:** Los tests son **diagnósticos** y NO afectan la calificación del estudiante. Se usan para control interno de avance y ajustes pedagógicos (reemplaza el NPS tradicional).

---

## Proyectos Integradores

| Módulo | Proyecto | Tecnologías |
|--------|----------|-------------|
| M1 | Mi Perfil Personal | HTML semántico, CSS, Flexbox, hover states |
| M2 | MyLinks - Tu Hub Personal | HTML, CSS, Flexbox, responsive, Git |
| M3 | Adivina el Número | JavaScript, eventos, DOM básico |

---

## Estructura de Archivos por Clase

Cada clase en `curriculum/class-XX/` contiene:

```
class-XX/
├── README.md           # Resumen y preparación del estudiante
├── lab/
│   ├── README.md       # Guía de laboratorio paso a paso
│   └── rubric.md       # Solo en clases 4, 8, 12
├── slides/
│   └── README.md       # Presentación reveal.js
├── facilitator/
│   └── README.md       # Guía pedagógica para instructores
└── test/               # Solo en clases 4, 8, 12
    ├── README.md       # Info del test para estudiante
    └── questions.md    # Preguntas (formato Canvas)
```

---

## Recursos

- **Guía de desarrollo:** [CLAUDE.md](CLAUDE.md)

---

## Referencia Rápida de Contenidos

Tabla detallada de contenidos por clase para evaluación y referencia:

| Clase | Contenido Clave | Lab Calificado |
|-------|-----------------|----------------|
| 1 | Ciclo de vida web, URL, rol de HTML/CSS/JS | - |
| 2 | HTML semántico, etiquetas, accesibilidad, alt, href | - |
| 3 | CSS selectores, propiedades, Box Model, tipografía | - |
| **4** | **Markdown, GitHub, GitHub Pages, deploy** | ✓ M1 |
| 5 | Terminal, Git, VS Code, clonar, commit, push | - |
| 6 | Unidades relativas, Flexbox, media queries, DevTools | - |
| 7 | Wireframes, fidelidad, Design Thinking, ideación | - |
| **8** | **Vibe Coding, IA, Prompt Engineering, tokens** | ✓ M2 |
| 9 | Variables, tipos de datos, operadores, consola | - |
| 10 | if/else, comparación, lógica booleana, ternarios | - |
| 11 | Funciones, parámetros, return, eventos click/input | - |
| **12** | **Proyecto Final, presentación, evaluación** | ✓ M3 |

---

## Prerrequisitos

**Ninguno.** Code 101 es el curso de entrada al programa de Desarrollo de Software.

Este curso prepara a los estudiantes para Code 201, donde profundizarán en:
- JavaScript avanzado
- Manipulación del DOM
- Programación orientada a objetos
- Control de versiones avanzado con Git

---

*Última actualización: Enero 2026*
