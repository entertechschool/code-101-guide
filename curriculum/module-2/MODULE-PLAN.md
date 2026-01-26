# Plan del Módulo 2: Herramientas del Desarrollador

> Este documento define la arquitectura del módulo. Aprobar antes de crear clases.

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Módulo** | 2 |
| **Título** | Herramientas del Desarrollador |
| **Proyecto Integrador** | MyLinks - Tu Hub Personal en la Web |
| **Clases** | 5 a 8 |
| **Pre-requisitos** | M1: HTML básico, CSS, Flexbox, Box Model |

---

## Competencias del Módulo

Al finalizar el módulo, el estudiante podrá:

1. **Usar la terminal y Git** - Ejecutar comandos básicos de terminal y gestionar versiones de código con Git/GitHub
2. **Crear diseños responsive** - Aplicar unidades relativas, media queries y DevTools para adaptar sitios a diferentes dispositivos
3. **Diseñar con wireframes** - Planificar interfaces usando wireframes de baja y alta fidelidad con pensamiento de diseño
4. **Utilizar IA como herramienta** - Aplicar prompt engineering para prototipar y resolver problemas de desarrollo

---

## Proyecto Integrador: MyLinks

### Descripción

MyLinks es un sitio web personal inspirado en Linktree que sirve como centro de enlaces para recursos, herramientas y proyectos del estudiante. Es una página sencilla pero profesional que pueden usar en sus perfiles de redes sociales.

El proyecto es relevante porque:
- **Utilidad real:** Los estudiantes pueden usarlo inmediatamente en sus redes sociales
- **Portfolio inicial:** Es una pieza de portfolio que demuestra sus habilidades
- **Publicación:** Aprenden a publicar un sitio en GitHub Pages

A diferencia del perfil personal (M1), MyLinks se enfoca en la funcionalidad de hub de enlaces y requiere dominio de herramientas profesionales (Git, terminal, DevTools).

### Evolución por Clase

| Clase | Capa | Estado del Proyecto al Finalizar |
|-------|------|----------------------------------|
| 5 | Fundamento | Repositorio clonado, estructura HTML básica con enlaces placeholder |
| 6 | Estructura | Diseño responsive con unidades relativas y media queries funcionando |
| 7 | Presentación | Wireframe completo + diseño visual mejorado basado en ideación |
| 8 | Integración | Sitio completo publicado en GitHub Pages + refinamiento con IA |

### Entregable Final

Un sitio MyLinks funcional y publicado en GitHub Pages que incluye:
- Foto de perfil y nombre
- Mínimo 5 enlaces personalizados (redes, proyectos, recursos)
- Diseño responsive (mobile-first)
- Estilos personalizados (colores, tipografía)
- URL pública accesible

---

## Arquitectura de Clases

### Clase 5: Setup del Desarrollador Moderno

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Terminal y control de versiones con Git |
| **Objetivo del Lab** | Clonar un repositorio template y hacer el primer push |
| **Herramientas** | Terminal (Bash/Zsh), Git, GitHub, VS Code |
| **Entregable** | Repositorio MyLinks con estructura inicial + primer commit |

**Checkpoints del Lab:**
1. Terminal abierta y navegación exitosa a la carpeta del proyecto (`cd`, `ls`, `pwd` funcionando)
2. Repositorio clonado localmente y abierto en VS Code
3. Archivo `index.html` modificado, commit creado y push exitoso a GitHub

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Terminal | Interfaz de texto para ejecutar comandos en el sistema operativo |
| Git | Sistema de control de versiones para rastrear cambios en el código |
| Repositorio | Carpeta que contiene el proyecto y su historial de cambios |
| Clone | Copiar un repositorio remoto a tu computadora local |
| Commit | Guardar un punto en el historial con los cambios realizados |
| Push | Subir los commits locales al repositorio remoto |

**Dependencias:**
- **Requiere:** M1 - conocimiento de HTML básico, uso de VS Code
- **Habilita:** Clase 6 necesita repositorio configurado para guardar cambios responsive

---

### Clase 6: Diseño Web Responsive + DevTools

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Diseño responsive con unidades relativas y media queries |
| **Objetivo del Lab** | Transformar MyLinks en un sitio que se adapta a móvil y desktop |
| **Herramientas** | VS Code, Chrome DevTools, Live Server |
| **Entregable** | MyLinks responsive con breakpoints funcionando + screenshots móvil/desktop |

**Checkpoints del Lab:**
1. DevTools abierto mostrando la vista responsive con diferentes dispositivos
2. Unidades relativas aplicadas (`rem`, `%`, `vh/vw`) y layout adaptándose al cambiar tamaño
3. Media query funcionando: diseño diferente visible en móvil vs desktop

**Tu Proyecto Hasta Ahora (del lab anterior):**
- [ ] Repositorio MyLinks clonado y conectado a GitHub
- [ ] Estructura HTML básica con `index.html`
- [ ] Al menos un commit y push exitoso

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Responsive | Diseño que se adapta automáticamente a diferentes tamaños de pantalla |
| Viewport | El área visible de una página web en el navegador |
| Media Query | Regla CSS que aplica estilos solo cuando se cumple una condición (ej: ancho de pantalla) |
| Breakpoint | Punto de quiebre donde el diseño cambia (ej: 768px para tablets) |
| DevTools | Herramientas de desarrollo integradas en el navegador para inspeccionar y depurar |
| rem | Unidad relativa basada en el tamaño de fuente del elemento raíz |

**Dependencias:**
- **Requiere:** Clase 5 (repositorio Git configurado) + M1 (CSS, Flexbox)
- **Habilita:** Clase 7 usará DevTools para probar wireframes

---

### Clase 7: Wireframing y Pensamiento Creativo

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Wireframes y proceso de ideación con Design Thinking |
| **Objetivo del Lab** | Crear wireframes low-fi y high-fi para mejorar el diseño de MyLinks |
| **Herramientas** | Excalidraw, Figma, papel y lápiz |
| **Entregable** | Wireframe low-fi + wireframe high-fi de MyLinks rediseñado |

**Checkpoints del Lab:**
1. Wireframe low-fi dibujado (papel o Excalidraw) mostrando estructura básica de MyLinks
2. Sesión de ideación completada: 3 ideas diferentes para mejorar el diseño
3. Wireframe high-fi en Figma con colores, tipografía y espaciado definidos

**Tu Proyecto Hasta Ahora:**
- [ ] Repositorio MyLinks con commits regulares
- [ ] Diseño responsive funcionando (móvil + desktop)
- [ ] Media queries aplicadas

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Wireframe | Esquema visual simplificado que muestra la estructura de una página |
| Low-fidelity | Boceto rápido sin detalles visuales, enfocado en estructura |
| High-fidelity | Diseño detallado con colores, tipografía y elementos finales |
| Design Thinking | Metodología de diseño centrada en entender al usuario |
| Ideación | Fase creativa donde se generan múltiples ideas sin juzgar |
| Prototipo | Versión preliminar de un diseño para probar conceptos |

**Dependencias:**
- **Requiere:** Clases 5 y 6 (proyecto base responsive)
- **Habilita:** Lab calificado (clase 8) implementará el diseño del wireframe

---

### Clase 8 (Lab Calificado): Vibe Coding Tools

| Aspecto | Detalle |
|---------|---------|
| **Concepto Principal** | Prototipado con IA + Prompt Engineering |
| **Objetivo del Lab** | Completar MyLinks usando herramientas de IA y publicar en GitHub Pages |
| **Herramientas** | ChatGPT/Claude, GitHub Pages, VS Code, Git |
| **Entregable** | Sitio MyLinks completo publicado en GitHub Pages |
| **Distribución** | 50% en clase + 50% post-clase |

**Checkpoints del Lab (5 partes):**

| Parte | Título | Tiempo | Dónde | Descripción |
|-------|--------|--------|-------|-------------|
| 1 | Prompt Engineering Básico | 30 min | En clase | Escribir prompts efectivos para generar CSS y resolver problemas |
| 2 | Refinamiento con IA | 35 min | En clase | Iterar sobre resultados de IA, entender tokens y límites |
| 3 | Implementación Final | 30 min | Post-clase | Aplicar mejoras del wireframe al código real |
| 4 | Publicación en GitHub Pages | 15 min | Post-clase | Configurar y publicar el sitio en GitHub Pages |
| 5 | Desafío Avanzado | 25 min | Post-clase | Agregar animaciones CSS o efectos hover avanzados con ayuda de IA |

**Tu Proyecto Hasta Ahora:**
- [ ] Repositorio MyLinks con historial de commits
- [ ] Diseño responsive con media queries
- [ ] Wireframe high-fi del diseño final

**Criterios de Evaluación (4 x 25 pts = 100 pts):**

| Criterio | Qué Evalúa | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|-----------|----------------|------------|-------------------|----------|
| **Estructura y Git** | Uso de Git, commits, organización | +5 commits descriptivos, estructura clara de archivos | 3-4 commits, estructura organizada | 2 commits, estructura básica | 1 commit o estructura desordenada |
| **Diseño Responsive** | Adaptación a dispositivos | Funciona perfectamente en móvil, tablet y desktop | Funciona bien en móvil y desktop | Funciona en un tamaño, problemas en otros | No responsive o roto en múltiples tamaños |
| **Contenido y Estilo** | Enlaces, personalización visual | 5+ enlaces, paleta coherente, tipografía, personalizado | 4 enlaces, estilos aplicados | 3 enlaces, estilos básicos | Menos de 3 enlaces o sin estilos |
| **Publicación** | GitHub Pages funcionando | URL pública accesible, carga rápido, sin errores | URL funciona con errores menores | URL funciona pero con problemas visuales | No publicado o URL rota |

**Glosario de la Clase:**

| Término | Definición breve |
|---------|------------------|
| Prompt | Instrucción o pregunta que se le da a una IA para obtener una respuesta |
| Prompt Engineering | Técnica de escribir prompts efectivos para obtener mejores resultados de IA |
| Token | Unidad de texto que la IA procesa (aproximadamente 4 caracteres) |
| GitHub Pages | Servicio gratuito de GitHub para publicar sitios web estáticos |
| Vibe Coding | Estilo de programación que usa IA como asistente de desarrollo |
| Iteración | Proceso de mejorar algo a través de múltiples versiones |

---

## Mapa de Dependencias

```
Clase 5 ──→ Clase 6 ──→ Clase 7 ──→ Clase 8
  │           │           │           │
  Git       Responsive  Wireframe   IA + Deploy
  Setup     Design      Ideación    GitHub Pages
  │           │           │           │
  └───────────┴───────────┴───────────┘
              Proyecto: MyLinks
```

### Flujo de Conceptos

| Clase | Introduce | Usa de Anteriores |
|-------|-----------|-------------------|
| 5 | Terminal, Git, clone, commit, push | HTML básico (M1), VS Code (M1) |
| 6 | Responsive, media queries, DevTools, rem | Git (5), CSS/Flexbox (M1) |
| 7 | Wireframes, Design Thinking, ideación | DevTools (6), diseño responsive (6) |
| 8 | Prompt Engineering, GitHub Pages, tokens | Todo lo anterior + Git para deploy |

---

## Conexión con Otros Módulos

### Módulo Anterior (M1)

| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se asumen** | HTML semántico, CSS básico, selectores, Box Model, Flexbox, hover states |
| **Proyecto anterior** | Mi Perfil Personal |
| **¿Se conecta?** | No directamente - MyLinks es proyecto independiente, pero usa las mismas habilidades de HTML/CSS |

### Módulo Siguiente (M3)

| Aspecto | Detalle |
|---------|---------|
| **Conceptos que se anticipan** | Variables, lógica, eventos (mencionados en Logros Adicionales) |
| **Semillas plantadas** | "Podrías agregar interactividad con JavaScript" como logro adicional en clase 8 |

---

## Glosario Completo del Módulo

| Término | Clase | Definición |
|---------|-------|------------|
| Terminal | 5 | Interfaz de texto para ejecutar comandos en el sistema operativo |
| Git | 5 | Sistema de control de versiones para rastrear cambios en el código |
| Repositorio | 5 | Carpeta que contiene el proyecto y su historial de cambios |
| Clone | 5 | Copiar un repositorio remoto a tu computadora local |
| Commit | 5 | Guardar un punto en el historial con los cambios realizados |
| Push | 5 | Subir los commits locales al repositorio remoto |
| Responsive | 6 | Diseño que se adapta automáticamente a diferentes tamaños de pantalla |
| Viewport | 6 | El área visible de una página web en el navegador |
| Media Query | 6 | Regla CSS que aplica estilos solo cuando se cumple una condición |
| Breakpoint | 6 | Punto de quiebre donde el diseño cambia |
| DevTools | 6 | Herramientas de desarrollo integradas en el navegador |
| rem | 6 | Unidad relativa basada en el tamaño de fuente del elemento raíz |
| Wireframe | 7 | Esquema visual simplificado que muestra la estructura de una página |
| Low-fidelity | 7 | Boceto rápido sin detalles visuales |
| High-fidelity | 7 | Diseño detallado con colores y tipografía |
| Design Thinking | 7 | Metodología de diseño centrada en el usuario |
| Ideación | 7 | Fase creativa de generación de ideas |
| Prototipo | 7 | Versión preliminar de un diseño |
| Prompt | 8 | Instrucción que se le da a una IA |
| Prompt Engineering | 8 | Técnica de escribir prompts efectivos |
| Token | 8 | Unidad de texto que la IA procesa |
| GitHub Pages | 8 | Servicio de GitHub para publicar sitios web |
| Vibe Coding | 8 | Programación con asistencia de IA |
| Iteración | 8 | Proceso de mejora a través de múltiples versiones |

---

## Checklist de Verificación

Antes de aprobar este plan, verificar:

- [x] Las 4 competencias son medibles con verbos de acción
- [x] El proyecto tiene sentido como unidad coherente
- [x] Cada clase tiene UN concepto principal claro
- [x] Los checkpoints son verificables visualmente
- [x] Las dependencias entre clases son explícitas
- [x] La clase 8 integra conceptos de las 3 anteriores
- [x] Los 4 criterios de evaluación reflejan las competencias
- [x] Hay conexión clara con módulos adyacentes
- [x] El glosario cubre todos los términos nuevos

---

## Notas de Diseño

### Decisiones Tomadas

1. **Proyecto independiente de M1:** MyLinks no extiende Mi Perfil Personal para evitar arrastrar errores del módulo anterior y dar un "fresh start" con las herramientas de desarrollador.

2. **Git desde el inicio:** La clase 5 establece el flujo de trabajo Git que se usa durante todo el módulo. Esto prepara para M3 donde Git será natural.

3. **DevTools antes de Wireframes:** El orden (6 → 7) permite que los estudiantes usen DevTools para probar sus wireframes en diferentes tamaños antes de implementar.

4. **IA como herramienta, no como solución:** La clase 8 enseña prompt engineering como skill, no como atajo. Los estudiantes deben entender qué piden y evaluar las respuestas.

5. **GitHub Pages como cierre:** Publicar el proyecto da un sentido de logro tangible y crea un portfolio inicial que pueden mostrar.

### Riesgos Identificados

- **Terminal intimidante:** Algunos estudiantes pueden encontrar la terminal intimidante. Mitigar con práctica guiada y comandos limitados.
- **Configuración de Git:** Puede haber problemas de autenticación. Tener guía de troubleshooting lista.
- **Dependencia de IA:** Riesgo de que estudiantes copien sin entender. Enfatizar la comprensión del código generado.

### Alternativas Consideradas

- Se consideró hacer el perfil de M1 responsive en M2, pero se descartó para dar un proyecto fresco.
- Se consideró usar Netlify en lugar de GitHub Pages, pero GitHub Pages es más integrado con el flujo Git enseñado.
