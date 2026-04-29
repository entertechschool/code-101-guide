# Guía del Facilitador - Clase 07: Wireframing y Pensamiento Creativo

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Wireframe** — Esqueleto visual del diseño sin pintura. Define jerarquía y posición.
- **Low-fi vs High-fi** — Cajas grises sin estilo vs diseño pixel-perfect. **En este lab viven en el mismo archivo Figma**, evolucionando sobre el mismo Frame.
- **Design Thinking** — Metodología centrada en el usuario, no en el gusto del diseñador.
- **Token de diseño** — Variable reutilizable de color/sombra/tipografía. En Figma se llaman **Styles**.
- **Auto Layout** — El `display: flex` de Figma. Hace que los componentes crezcan y se adapten.
- **Componente** — Pieza reutilizable. La plantilla starter trae 4 componentes low-fi listos para arrastrar.

---

## 🎁 La Plantilla Starter (preparación previa, una sola vez)

Antes de la primera clase con esta versión del lab, debes crear el archivo Figma **MyLinks Starter Kit**. Hay 2 caminos:

**Camino rápido (recomendado):** Ejecuta el plugin local en `dev/figma-starter-kit/`. Genera todo el kit en 3 segundos. Ver instrucciones en `dev/figma-starter-kit/README.md`.

**Camino manual:** Crea a mano un archivo Figma con: 2 Frames (`Móvil` 390×844, `Escritorio` 1440×900), 3 Color Styles (`bg-principal`, `acento`, `texto`), 1 Effect Style (`sombra` brutalista), 4 componentes low-fi (`foto`, `titulo`, `bio`, `boton`) y 1 Botón Maestro con Auto Layout.

Una vez creado el archivo, **comparte con permiso "Anyone with the link can view & duplicate"** y pega el link en el chat al inicio de la clase.

---

## 🔗 Analogías Útiles

**Wireframe ↔ Plano arquitectónico:** Antes de construir una casa, el arquitecto dibuja planos sin colores. No te dice de qué color son las paredes, solo dónde van. Un wireframe hace lo mismo para una página web.

**Low-fi → High-fi en el mismo Figma ↔ Boceto que se convierte en pintura:** El artista no dibuja a lápiz en una libreta y después pinta en otro lienzo. Empieza con líneas en el lienzo final y le aplica color encima. Eso es lo que hacemos en Figma: las cajas grises de la Parte 3 se convierten en el diseño high-fi de la Parte 4 sobre el mismo Frame.

**Token ↔ Variable CSS:** Un desarrollador pro no escribe `#FF6B35` veinte veces — define `--color-acento: #FF6B35` y lo reutiliza. En Figma esa idea se llama **Style**. Si cambias el Style, todos los elementos vinculados se actualizan al instante.

**Auto Layout ↔ Flexbox:** Si dominas `display: flex`, ya dominas Auto Layout. Es el mismo concepto: contenedor que abraza a sus hijos y se adapta cuando crece el contenido.

---

## 📚 Contexto Histórico

### Figma: Del dormitorio universitario a la industria

Dylan Field y Evan Wallace fundaron Figma en 2012 cuando eran estudiantes de Brown University. Field recibió una Thiel Fellowship — $100,000 para dejar la universidad y enfocarse en la startup.

La apuesta era arriesgada: crear una herramienta de diseño que corriera 100% en el navegador, sin instalación. Adobe dominaba el mercado. Muchos pensaron que era imposible.

Figma lanzó en 2016. Para 2025 tiene 13 millones de usuarios activos mensuales y el **95% de las empresas Fortune 500** lo usa. Adobe intentó comprarlo por $20 mil millones en 2022 — bloqueado por reguladores. Figma salió a bolsa en NYSE en agosto de 2025.

> **Para contar en clase:** "El fundador de Figma dejó la universidad a los 19 años para crear esta herramienta. Hoy el 95% de las empresas Fortune 500 la usan. Y ustedes la van a aprender gratis, hoy."

### Design Thinking: De Stanford a Apple

David Kelley fundó IDEO en 1978 — la firma que diseñó el primer mouse de Apple. En 2004 fundó la d.school en Stanford con una misión radical: enseñar a personas de cualquier disciplina a resolver problemas como diseñadores.

Las 5 fases (Empatizar, Definir, Idear, Prototipar, Testear) nacieron ahí. Apple, Google y Airbnb adoptaron la metodología.

> **Para contar en clase:** "Si Apple lo usa para crear iPhones, podemos usarlo para crear nuestro MyLinks."

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Caso de Estudio 0 en vivo"

Tú eres el caso de estudio. **Construye TU MyLinks paralelamente a los alumnos**, en pantalla compartida. No es performance — es liderazgo. Si tú te atascas, ellos verán cómo se sale del atasco.

```
Facilitador: "Voy a hacer mi propio MyLinks junto con ustedes. Vean mis decisiones.
              Si me equivoco, se los digo. Si me atasco, sale en vivo."
```

### Dinámica 2: "Análisis de Carrd con ojo de detective"

Pega 2 plantillas de Carrd lado a lado. Discusión guiada de las 4 preguntas:

```
1. ¿Qué se REPITE? (jerarquía vertical: foto → nombre → bio → botones)
2. ¿Qué VARÍA? (centrado vs asimétrico, contenedor vs flujo libre)
3. ¿Qué te GUSTA y por qué?
4. ¿Qué TOMARÍAS PRESTADO de cada una?
```

> **Tip táctico:** Insiste en "tomar prestado", no "robar". Es más respetuoso y conceptualmente igual.

### Dinámica 3: "Demo de Auto Layout — la magia revelada"

Cuando llegues al Botón Maestro, haz esto:

```
1. Edita el texto del botón → escribe "LinkedIn y mi Twitch y mi Patreon"
2. El botón crece sin romperse
3. Pausa dramática: "Eso, desarrolladores, es display: flex en Figma."
```

El "wow" es real. Los alumnos verán que el botón se comporta como un componente web real.

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Objetivo de Rediseño del Caso de Estudio 0

```
"Mi MyLinks actual es un documento HTML genérico y centrado, pero quiero
que sea un hub asimétrico, minimalista y con personalidad fuerte usando
alineación a la izquierda y botones brutalistas con sombras duras.
Mi usuario ideal es un reclutador técnico que necesita encontrar
mi LinkedIn o mis proyectos en menos de 3 segundos sin leer 20 enlaces."
```

> **Tip:** Compártelo entero en el chat. Es la vara de calidad que los alumnos deben alcanzar.

### Ejemplo 2: Sombra brutalista vs sombra suave

```
Brutalista: X:4 Y:4 Blur:0 #000        (sello del Caso de Estudio)
Suave:      X:0 Y:8 Blur:24 rgba(0,0,0,0.2)  (estilo minimalista)
```

> **Tip:** Pregunta a los alumnos cuál eligen y por qué. Decisión por intención.

### Ejemplo 3: Atajos esenciales de Figma

```
Selección y movimiento:  V (mover), Ctrl+0 (encajar lienzo), Ctrl+D (duplicar)
Crear elementos:         F (Frame), R (Rectángulo), O (Elipse), T (Texto)
Auto Layout:             Shift+A (activar), gap entre items en panel derecho
Exportar:                Frame seleccionado → Export panel → +PNG @2x
```

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Alumno arrastra cajas y aplica colores en la Parte 3 | No respeta la regla "low-fi sin pintura" | "En esta parte solo cajas grises. Los colores vienen en la Parte 4." |
| El Frame no se pinta cuando aplica el Style `bg-principal` | El Frame tenía un color suelto | "Selecciona el Frame → Fill → 4 puntitos → asignar Style" |
| Boton crece pero el texto sale volando | Auto Layout aplicado al texto, no al frame contenedor | "Borra todo, selecciona solo el texto, Shift+A" |
| Exporta el lienzo gris en lugar del Frame | Seleccionó un elemento interno, no el Frame padre | "En el panel izquierdo de capas, clic exactamente donde dice 'Móvil'" |
| Imagen del avatar queda detrás del Frame | Z-index: la arrastró al lienzo, no al Frame | "Arrástrala desde el panel de capas al interior del Frame" |
| Sigue queriendo dibujar 3 variantes | Trae el flujo viejo de la versión anterior | "Una sola decisión documentada. Si quieres explorar variantes, lo haces en privado después." |

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-5 | Setup | Todos duplicaron la plantilla Starter Kit a su cuenta |
| 5-25 | Parte 1 completa | Objetivo de Rediseño compartido en chat por todos |
| 25-35 | Parte 2 completa | Pregunta rápida: "¿Quién recuerda qué hace la tecla T?" |
| 35-50 | Parte 3 completa | Frames con cajas grises armadas (screenshot opcional) |
| 50-100 | Parte 4 completa | Frame Móvil + Escritorio con tokens y contenido real |
| 100-110 | Parte 5 completa | 3 archivos entregables (Spec Sheet + 2 mockups PNG) |

**Señales de que van bien:**
- El salón está silencioso durante la Parte 3 (concentración + arrastre).
- Preguntas son sobre decisiones de diseño, no sobre la herramienta.
- Alumnos comparten screenshots de su Frame en el chat voluntariamente.

**Señales de problemas:**
- Muchos preguntan dónde está el panel de Local Styles → repasa el Momento de "Las 3 zonas".
- Auto Layout se rompe constantemente → demo extra del Botón Maestro.
- Algunos alumnos terminan en 30 minutos → diles que prueben los Bonus.

---

## 🔗 Conexión con la Próxima Clase (Lab Calificado)

Al cerrar, planta la semilla para el Lab 08:

> "Esos 3 archivos que acaban de generar — `spec-sheet.txt` + `mockup-mobile.png` + `mockup-desktop.png` — son el **input directo** del prompt que le van a dar a una IA en la próxima clase. Sin esos 3 archivos, no pueden ejecutar el lab calificado. La IA va a leer sus mockups, extraer colores y proporciones, y construir su MyLinks publicado en GitHub Pages. Pero solo si llegan con los 3."

---

## 🎨 Notas Específicas de Esta Clase

### Sobre el cambio de ritmo

Esta es la única clase del módulo donde casi no escriben código. Algunos alumnos se sentirán "improductivos". Normaliza esto:

> "Hoy no van a escribir HTML ni CSS. Eso está bien. Los desarrolladores profesionales pasan más tiempo planeando que codificando. Mañana la IA va a escribir el código por ustedes — pero solo si hoy diseñan bien."

### Sobre el plugin del Starter Kit

El plugin Figma en `dev/figma-starter-kit/` te permite regenerar el archivo en cualquier momento. Si los alumnos accidentalmente borran un componente del kit, regeneras y compartes en 3 segundos.

### Sobre los Bonus

Los Bonus (Componente Maestro + Prototipo Interactivo) son para alumnos que terminen rápido. **No los enseñes en el flujo normal** — solo si alguien levanta la mano antes de tiempo.
