# Lab Nivelación M2: MyLinks

> 🚀 **Proyecto integrador del Módulo 2.** Cubre los 4 temas (Git/Terminal, Responsive/DevTools, Figma, Vibe Coding) en un solo lab autodirigido.
>
> 📌 **Para quién:** alumnos que se incorporaron tarde o no pudieron asistir a las clases 5-8 del curso.
>
> ⚠️ **Lab Calificado:** Este lab será evaluado con la rúbrica del final.
>
> ⏱️ **Tiempo estimado:** 6-7 horas en un día.

## 🎯 Lo que vas a construir

Un sitio personal tipo Linktree publicado en internet con:

- Diseño en Figma propio (móvil 390×844 + escritorio 1440×900).
- Código generado con Claude usando un prompt scaffolded profesional.
- Botones personalizados con CSS real de uiverse.io.
- Diseño responsive verificado en DevTools.
- **URL pública en GitHub Pages** que puedes compartir.

> 💡 **Resultado esperado:** un sitio web profesional vivo en internet, con tu Spec Sheet detrás respaldando cada decisión visual.

---

## 🔑 Conceptos que cubrirás

| Concepto | Cuándo lo verás |
|----------|-----------------|
| Git y terminal (clone, branch, push avanzado) | Setup + Parte 7 |
| Spec Sheet (objetivo, tokens, enlaces) | Parte 1 |
| Figma desde cero (Frame, herramientas, Auto Layout) | Parte 2 |
| Mockups responsive (móvil + escritorio) | Parte 2 |
| Vibe Coding Responsable vs Irresponsable | Parte 3 |
| Prompt Scaffolding (Rol + Contexto + Tarea + Restricciones + Formato) | Parte 3 |
| Iteración con código real (uiverse.io) | Parte 4 |
| DevTools modo dispositivo (375px / 1440px) | Parte 6 |
| GitHub Pages (deploy de sitio estático) | Parte 7 |

---

## ⚠️ Prerrequisito

Necesitas tener completado el **Módulo 1** — sea por las clases regulares o el [Lab Nivelación M1](../../m1/lab/). Asume que ya tienes:

- Mi Perfil Personal funcionando localmente.
- VS Code con Live Server.
- Cuenta de GitHub con al menos un repo.
- Comandos básicos de Git (`init`, `add`, `commit`, `push`).

---

## ⚙️ Setup Inicial (30 min)

### Paso 1 · Crea cuentas en las herramientas que vas a usar

| ✓ | Herramienta | URL | Por qué |
|---|-------------|-----|---------|
| ☐ | **Claude.ai** | [claude.ai](https://claude.ai/){:target="_blank"} | IA constructora — genera tu código con Artifacts en vivo |
| ☐ | **Gemini** | [gemini.google.com](https://gemini.google.com/){:target="_blank"} | IA planificadora — convierte tu Spec Sheet en prompt estructurado |
| ☐ | **Figma** | [figma.com](https://www.figma.com/){:target="_blank"} | Herramienta de diseño donde harás tus mockups |

> 💡 Las 3 cuentas son gratis. Si ya tienes cuenta de Google/Gmail, Gemini ya la tienes.

### Paso 2 · Crea la carpeta de tu nuevo proyecto

> ⚠️ **Importante:** este es un proyecto **nuevo**, no es una continuación de Mi Perfil Personal. Vas a tener 2 carpetas separadas en tu computadora.

1. Crea una carpeta llamada `mylinks` en un lugar accesible.
2. Abre VS Code → menú `File` → `Open Folder` → selecciona `mylinks`.
3. Crea estos 2 archivos vacíos por ahora:
   - `index.html`
   - `styles.css`

### Paso 3 · Verifica que tienes los entregables del M1

Antes de seguir, confirma:

- [ ] Mi Perfil Personal existe en otra carpeta.
- [ ] Tu cuenta de GitHub tiene un repo `mi-perfil-personal`.
- [ ] Sabes cómo abrir la terminal integrada de VS Code (Menú → Terminal → New Terminal).

✅ **Checkpoint Setup:** Tienes 3 cuentas activas y la carpeta `mylinks` abierta en VS Code.

---

## 🚦 Antes de arrancar: ¿Qué tipo de programador vas a ser hoy?

> 🎯 **Marco mental.** Andrej Karpathy acuñó el término *Vibe Coding* en febrero de 2025: programar describiendo en lenguaje natural y dejar que la IA escriba el código. Pero hay 2 formas de hacerlo, y la diferencia define a un profesional:

| ❌ Vibe Coding Irresponsable | ✅ Vibe Coding Profesional |
|---|---|
| Prompt vago → acepta sin leer | Prompt scaffolded → evalúa el output |
| Copia y pega sin entender | Entiende cada bloque del código |
| "Arréglalo" cuando falla | Localiza el error y guía a la IA con precisión |
| El código es una caja negra | El código es **su responsabilidad** |

> 💡 **Tu objetivo:** salir de este lab sabiendo qué hace cada bloque del HTML/CSS que la IA generó por ti.

---

## Parte 1 · Spec Sheet Relámpago (30 min)

> 🧠 **Idea clave:** El **Spec Sheet** es una hoja de texto que documenta TUS decisiones de diseño. Es el insumo que la IA necesita para construir TU sitio (no uno genérico).

### 1.1 Mira 2 referencias de Carrd

Visita [Carrd Templates](https://carrd.co/build){:target="_blank"} y abre **2 plantillas tipo Linktree** que te gusten. Mira con ojo de **diseñador**, no de admirador.

### 1.2 Responde las 4 preguntas clave

Escribe respuestas concretas (1-2 frases) en tu bloc de notas. La columna **Ejemplo** te muestra el nivel de detalle que se espera.

| # | Pregunta | Ejemplo |
|---|----------|---------|
| 1 | ¿Qué elementos visuales se **repiten** entre las 2 referencias? | "Ambas tienen foto circular arriba, nombre grande, bio corta y botones uniformes en columna." |
| 2 | ¿Cómo organizan la información? (centrado, asimétrico, flujo libre) | "La primera está centrada en columna; la segunda alineada a la izquierda con asimetría." |
| 3 | ¿Qué colores/estilos te gustan y por qué? | "Me gusta la asimetría minimalista de la primera y los acentos vibrantes con sombras duras de la segunda." |
| 4 | ¿Qué tomarías prestado de cada una y combinarías? | "La asimetría alineada-izquierda de la primera + las sombras brutalistas de la segunda." |

### 1.3 Define tu Objetivo de Rediseño

Completa esta plantilla:

> "Mi MyLinks debe ser **\[3-4 adjetivos de personalidad\]** usando **\[recurso visual concreto\]**. Mi usuario ideal es **\[reclutador, colega técnico, cliente\]** que necesita **\[acción específica en X segundos\]**."

**Ejemplo:**

> *"Mi MyLinks debe ser **minimalista, profesional y con personalidad** usando **alineación a la izquierda y sombras duras estilo brutalista**. Mi usuario ideal es **un reclutador técnico** que necesita **encontrar mi LinkedIn o GitHub en 3 segundos sin leer 20 enlaces**."*

### 1.4 Crea tu archivo `spec-sheet.txt`

En la carpeta `mylinks`, crea un archivo `spec-sheet.txt` con esta estructura. Rellena cada sección con tu información:

```
═══════════════════════════════════════════════════════════════
  SPEC SHEET — MyLinks
═══════════════════════════════════════════════════════════════

1. OBJETIVO DE REDISEÑO
[Pega aquí tu frase de la sección 1.3]

2. ESTILO EN UNA FRASE
Ej: "Brutalista minimalista alineado a la izquierda"

3. IDENTIDAD
   Nombre completo: ____________________________________
   Bio (1 línea, máx 80 caracteres — quién eres / qué haces):
   _______________________________________________________

4. TOKENS DE DISEÑO
   Color de fondo:  #______
   Color de acento: #______
   Color de texto:  #______
   Sombra:          X: __ Y: __ Blur: __ Color: #______
   Tipografía:      ________________________
                    (Ej: Inter, Poppins, Space Mono)

5. ENLACES (3-6 enlaces máximo)
   - LinkedIn:  https://
   - GitHub:    https://
   - Email:     mailto:
   - Portfolio: https://
   -
```

> 💡 **Para los colores:** usa [imagecolorpicker.com](https://imagecolorpicker.com/){:target="_blank"} sobre tu referencia favorita y saca 3 hex.
>
> **Para la fuente:** elige una en [Google Fonts](https://fonts.google.com/){:target="_blank"} (Inter, Poppins, Space Grotesk son seguras).

✅ **Checkpoint Parte 1:** Tienes `spec-sheet.txt` completo y guardado en la carpeta `mylinks`.

---

## Parte 2 · Figma desde cero (60 min)

> 🧠 **Idea clave:** Vas a aprender Figma haciendo, no leyendo. Te enseñamos solo lo necesario para producir 2 mockups (móvil y escritorio) que la IA pueda leer en la Parte 3.

### 2.1 Las 3 zonas y las 5 teclas

Cuando abras Figma encontrarás 3 paneles:

| Panel | Ubicación | Para qué sirve |
|-------|-----------|----------------|
| **Capas** | Izquierda | Lista de tus elementos (lo de arriba tapa lo de abajo) |
| **Lienzo** | Centro | Espacio infinito donde dibujas |
| **Propiedades** | Derecha | Tamaño, color, fuente del elemento seleccionado |

5 teclas que vas a usar hoy:

| Tecla | Herramienta |
|-------|-------------|
| `V` | Mover (Move) |
| `F` | Frame |
| `R` | Rectángulo |
| `O` | Elipse (círculo con Shift) |
| `T` | Texto |

Atajo extra: **`Shift + A`** activa **Auto Layout** (es el `display: flex` de Figma — hace que un contenedor abrace a sus hijos).

### 2.2 Crea tu archivo Figma

1. Ve a [figma.com](https://www.figma.com/){:target="_blank"} → inicia sesión.
2. Pestaña **Drafts** → clic en **"New design file"** (o `+` arriba).
3. Renombra el archivo a `MyLinks - [Tu Nombre]`.

### 2.3 Crea los 2 Frames (Móvil + Escritorio)

**Frame Móvil:**

1. Presiona **`F`** (herramienta Frame).
2. En el panel derecho aparece una lista de presets. Busca **"iPhone 14 & 15 Pro"** o cualquier móvil entre 375-393 de ancho. Haz clic.
3. En las propiedades del Frame (derecha), ajusta a `390 × 844` si no quedó así.
4. Renómbralo a `Móvil` (doble clic en el panel de Capas izquierda).

**Frame Escritorio:**

1. Presiona **`F`** otra vez.
2. Busca **"Desktop"** o haz uno custom de `1440 × 900`.
3. Arrástralo al lado del Móvil (separa con espacio entre ambos).
4. Renómbralo a `Escritorio`.

✅ **Checkpoint 2.3:** Tienes 2 Frames vacíos lado a lado.

### 2.4 Diseña la versión Móvil

Vas a poner los elementos directamente en el Frame Móvil. **Aplica los colores de tu Spec Sheet directamente al panel `Fill`** (no uses Styles).

**Foto de perfil:**

1. Presiona **`O`** (elipse) + mantén `Shift` para círculo perfecto.
2. Dibuja un círculo de unos `120×120 px` en la parte superior del Frame Móvil.
3. En el panel derecho → `Fill` → clic en el cuadro de color → cambia a **Image** → sube tu foto. Figma la recorta al círculo.

**Nombre:**

1. Presiona **`T`** (texto).
2. Escribe tu nombre. Tamaño `32-40px`, peso **Bold**, color = tu `texto` del Spec Sheet.

**Bio:**

1. **`T`** otra vez. Escribe una frase corta sobre ti (máx 80 caracteres). Tamaño `14-16px`, color = tu `texto`.

**Botón maestro (con Auto Layout):**

1. Presiona **`T`** y escribe `LinkedIn`.
2. Selecciónalo y presiona **`Shift + A`** → ¡Auto Layout activado!
3. En el panel derecho aparece el panel de Auto Layout. Configura:
   - `Padding`: 16 vertical, 24 horizontal.
   - `Fill`: tu color `acento` del Spec Sheet.
   - El texto de adentro: cámbialo a color blanco (`#FFFFFF`).
   - `Corner radius`: 10.
4. Aplica sombra: panel derecho → sección `Effects` → clic en `+` → `Drop Shadow`. Configúrala con los valores de tu Spec Sheet (X, Y, Blur, Color).

> 💡 **Prueba la magia del Auto Layout:** doble clic sobre el texto del botón y escribe `Mi canal de YouTube y Twitch`. El botón **crece solo** sin romperse. Eso es `display: flex` de Figma.

**Duplica el botón:**

1. Selecciona tu botón maestro.
2. **`Ctrl + D`** (Cmd+D en Mac) → aparece una copia.
3. Cambia el texto al siguiente enlace (GitHub, Email, etc.).
4. Repite hasta tener **4-6 botones**.
5. Acomódalos verticalmente uno debajo del otro.

**Fondo del Frame:**

1. Selecciona el Frame `Móvil` haciendo clic en su nombre en el panel de Capas.
2. En `Fill`, asigna tu color `bg-principal`.

✅ **Checkpoint 2.4:** Tu Frame Móvil tiene foto, nombre, bio y 4-6 botones high-fi con tu paleta.

### 2.5 Adapta a Escritorio

**No empieces de cero** — copia lo del Móvil y adáptalo:

1. Selecciona TODO el contenido del Frame Móvil (`Ctrl+A` estando dentro del Frame).
2. Copia (`Ctrl+C`) y pega dentro del Frame `Escritorio` (`Ctrl+V`).
3. Reorganiza:
   - Considera poner foto y textos **lado a lado** (en lugar de uno encima del otro).
   - Aumenta el tamaño del nombre a `56-72px`.
   - Limita el ancho del contenido a unos `~700px` centrados (no estires todo a 1440).
4. Aplica el mismo color de fondo `bg-principal` al Frame `Escritorio`.

✅ **Checkpoint 2.5:** Tu Frame Escritorio tiene los mismos elementos pero adaptados a más ancho.

### 2.6 Exporta los 2 Frames como PNG

**Para el Frame Móvil:**

1. Selecciona el Frame `Móvil` (clic en el nombre en panel de Capas).
2. Panel derecho → sección `Export` → clic en `+`.
3. Formato: **PNG**, escala **2x** (para que no se vea pixelado).
4. Clic en **Export Móvil** y guarda como `mockup-mobile.png` en tu carpeta `mylinks`.

**Para el Frame Escritorio:**

5. Repite con el Frame `Escritorio` y guarda como `mockup-desktop.png`.

✅ **Checkpoint Parte 2:** Tienes `mockup-mobile.png` y `mockup-desktop.png` en tu carpeta `mylinks`.

---

## Parte 3 · Prompt Scaffolded con Claude (45 min)

> 🧠 **Idea clave:** Gemini es excelente razonando contexto largo — lo usaremos para **planificar** el prompt. Claude es el **constructor** que ejecuta ese prompt y muestra el código en vivo (Artifact).

### 3.1 V1: Prompt Vago (10 min — el contraste pedagógico)

Antes de hacerlo bien, vamos a hacerlo mal a propósito. Esto te da una vara de comparación.

1. Abre [claude.ai](https://claude.ai/){:target="_blank"}.
2. Pega **literal** este prompt sin modificar:

```
Crea una aplicación web tipo linktree con botones para mis
redes sociales y una sección para mi información de perfil.
```

3. Espera el Artifact. Mira el resultado.
4. **¿Aparece tu nombre? ¿Tus colores? ¿Tu estilo?** No. Es genérico.

> 💡 Esto es **Vibe Coding Irresponsable**: aceptar el primer output sin haber dado contexto.

### 3.2 V2: Prompt Scaffolded con Gemini

1. Abre [gemini.google.com](https://gemini.google.com/){:target="_blank"} en otra pestaña.
2. Pega esta plantilla y **NO la ejecutes todavía** — vas a llenarla primero:

```
Actúa como un experto en Prompt Engineering para desarrollo web.

Necesito que conviertas mi Spec Sheet en un prompt scaffolded
profesional para que Claude genere mi sitio MyLinks.

Estructura el prompt con esta arquitectura:

[ROL] - Asignar identidad de desarrollador frontend senior
[CONTEXTO] - Quién soy, para qué es el sitio, quién lo usará
[TAREA] - Qué debe construir
[RESTRICCIONES TÉCNICAS] - Stack y reglas técnicas
[RESTRICCIONES DE DISEÑO] - Tokens y estilo
[FORMATO DE SALIDA] - Cómo entregar el resultado

Aquí mi Spec Sheet:
---
[PEGA AQUÍ TODO EL CONTENIDO DE TU spec-sheet.txt]
---

Genera el prompt estructurado listo para pegar en Claude.
Al final del prompt, agrega esta instrucción literal:
"Genera el código completo en un Artifact renderizable
para que pueda ver el resultado visual en tiempo real."
```

3. Abre tu archivo `spec-sheet.txt`, copia **todo el contenido**, y pégalo donde dice `[PEGA AQUÍ...]`.
4. Envía a Gemini. Te devuelve un prompt estructurado mucho más largo y específico.
5. **Cópialo entero** (todo el bloque que generó).

### 3.3 Disparar V2 en Claude con tus mockups adjuntos

1. Vuelve a [claude.ai](https://claude.ai/){:target="_blank"} y abre **conversación nueva** (no la del V1).
2. **Antes de enviar**, adjunta los 2 mockups:
   - Clic en el ícono de **clip 📎**.
   - Selecciona `mockup-mobile.png` Y `mockup-desktop.png`.
3. Pega el prompt scaffolded que te dio Gemini.
4. Envía.

> 💡 **Por qué adjuntas ambos mockups:** Claude lee las imágenes, extrae colores y proporciones, y construye un sitio **responsive real** desde la primera generación.

### 3.4 Compara V1 vs V2

Abre las 2 conversaciones lado a lado:

- **V1:** genérico, podría ser de cualquiera.
- **V2:** tu nombre, tus colores, tu estilo, tus links.

Esa es la diferencia entre Vibe Coding Irresponsable y Profesional.

✅ **Checkpoint Parte 3:** Tienes tu MyLinks personalizado generado en Claude V2.

---

## Parte 4 · Itera con Código Real: Botones de uiverse.io (30 min)

> 🎨 **Idea clave:** Los botones que generó Claude son los default. Vamos a personalizarlos con código real de [uiverse.io](https://uiverse.io){:target="_blank"} — librería open-source de componentes CSS. **No copiamos el botón tal cual** — le damos su código a Claude para que lo adapte a TU paleta.

### 4.1 Encuentra un botón

1. Abre [uiverse.io/buttons](https://uiverse.io/buttons){:target="_blank"}.
2. Filtra/scrollea hasta encontrar uno que combine con tu estilo.
3. Clic sobre el botón → copia el **código CSS** completo.

### 4.2 Pásale el código a Claude con instrucción precisa

En tu conversación V2 de Claude, pega esto sustituyendo el bloque entre corchetes:

```
Quiero modificar los botones de enlace de mi MyLinks usando
como referencia el estilo CSS de este botón que encontré
en uiverse.io:

[PEGAR AQUÍ EL CÓDIGO CSS DEL BOTÓN ELEGIDO]

Instrucciones:
- Aplica este estilo visual (sombras, bordes, hover effects)
  a TODOS los botones de enlace.
- Adapta los colores del botón a mi paleta existente
  (no uses los colores originales del snippet tal cual).
- Mantén la estructura HTML que ya tienes.
- Genera el código completo actualizado en un nuevo Artifact.
```

### 4.3 Evalúa el resultado

Mira el nuevo Artifact. Si algo no quedó bien, **itera con criterio**:

- "El hover no se aplica, asegúrate de incluir `:hover` en el CSS final".
- "Los botones quedaron muy oscuros. Usa `#______` (tu color de acento) como fondo".

> ⚠️ **Esto es iterar con criterio.** Cero "hazlo más bonito". Siempre con instrucción específica.

✅ **Checkpoint Parte 4:** Tus botones tienen estilo personalizado, generado por IA pero adaptado a tu paleta.

---

## Parte 5 · Extracción a VS Code (30 min)

> 🛠 **Idea clave:** El código vive en Claude. Hay que sacarlo y ponerlo en tu máquina como un proyecto real.

### 5.1 Copia el Artifact final

1. En el Artifact con los botones personalizados, clic en **"Copy"** (ícono arriba del código).

### 5.2 Pega en VS Code

1. Abre VS Code en tu carpeta `mylinks`.
2. Abre `index.html`.
3. **Reemplaza TODO el contenido** del archivo con lo que copiaste de Claude.
4. Guarda con `Ctrl+S`.

> 💡 Si el código incluye `<style>` con CSS dentro del `<head>`, está bien — lo dejas así. Si Claude separó CSS en un archivo, copia ese contenido a `styles.css` y agrega `<link rel="stylesheet" href="styles.css">` en el `<head>`.

### 5.3 Verifica con Live Server

1. Clic derecho sobre `index.html` → **"Open with Live Server"**.
2. Tu navegador abre `http://127.0.0.1:5500/index.html`.
3. Coloca Claude a la izquierda y Live Server a la derecha. **¿Se ven iguales?**

Si hay diferencias, ajústalas en VS Code — ya sabes CSS suficiente del M1.

✅ **Checkpoint Parte 5:** Tu MyLinks corre en `localhost` con tu diseño personalizado.

---

## Parte 6 · Responsive con DevTools (30 min)

> 🧠 **Idea clave:** Tu MyLinks debe verse bien en cualquier pantalla. **DevTools** es la herramienta del navegador para probar tu sitio en distintos tamaños sin necesidad de un dispositivo real.

### 6.1 Abre DevTools en modo dispositivo

1. Con tu MyLinks abierto en Live Server, presiona **`F12`** (o `Ctrl+Shift+I`).
2. DevTools se abre. En la barra superior, presiona el ícono de dispositivos (📱) o **`Ctrl+Shift+M`**.
3. Aparece una vista responsive con un selector de tamaños arriba.

### 6.2 Prueba en Móvil (375px)

Selecciona **iPhone SE** o cualquier tamaño cercano a 375px. Verifica:

| Verificar | ✓ |
|-----------|---|
| Sin scroll horizontal | ☐ |
| Texto legible (no muy pequeño) | ☐ |
| Botones fáciles de tocar (altura ≥ 40px) | ☐ |
| El contenido cabe en el ancho de pantalla | ☐ |

### 6.3 Prueba en Desktop (1440px)

Cambia el tamaño a **1440px** o **Responsive → 1440 x 900**. Verifica:

| Verificar | ✓ |
|-----------|---|
| Contenido centrado (no estirado a 1440 completo) | ☐ |
| Botones con ancho máximo razonable | ☐ |
| Hover funciona al pasar el mouse | ☐ |
| Espaciado proporcional | ☐ |

### 6.4 Si algo se rompe, vuelve a Claude

Describe el problema con precisión:

```
"En 375px (móvil) los botones se ven muy pequeños.
Aumenta el padding a 1rem y el font-size a 1.1rem
en pantallas con max-width: 600px."
```

Pega el código corregido a tu `index.html`.

> 💡 **Mini-explicación: media queries.** Una media query es una regla CSS que aplica solo en cierto tamaño:
>
> ```css
> @media (max-width: 600px) {
>   .boton { padding: 1rem; }
> }
> ```
>
> Esto se aplica solo en pantallas de máximo 600px de ancho.

✅ **Checkpoint Parte 6:** Tu MyLinks se ve correctamente en 375px y 1440px sin scroll horizontal.

---

## Parte 7 (Desafío Calificado) · Publicación en GitHub Pages (30 min)

> 🌍 **Idea clave:** Tu código existe solo en tu computadora. GitHub Pages convierte tu repo en una **URL pública gratuita**.

### 7.1 Inicializa Git en tu carpeta

Abre la terminal integrada de VS Code (Menú → Terminal → New Terminal) y ejecuta:

```bash
git init
git add index.html styles.css
git commit -m "feat: crear MyLinks con prompt scaffolded e iteración uiverse"
```

> 💡 **No subas los mockups PNG ni el spec-sheet.txt** al repo — son archivos privados de tu proceso, no del producto final.

### 7.2 Crea el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new){:target="_blank"}.
2. **Repository name:** `mylinks`.
3. **Public**, NO marques "Initialize with README".
4. Clic en **Create repository**.

### 7.3 Conecta tu repo local con GitHub

GitHub te muestra unos comandos. Copia los de la sección **"…or push an existing repository from the command line"**:

```bash
git remote add origin https://github.com/TU-USUARIO/mylinks.git
git branch -M main
git push -u origin main
```

> Reemplaza `TU-USUARIO` por tu username real.

### 7.4 Activa GitHub Pages

1. En GitHub, ve a tu repo `mylinks` → pestaña **Settings**.
2. Menú lateral izquierdo → **Pages**.
3. En `Source`: **Deploy from a branch**.
4. En `Branch`: **main** + **/ (root)**.
5. Clic en **Save**.

### 7.5 Espera el deploy (1-3 min)

Refresca la página de Settings → Pages. Cuando aparezca:

> ✅ **Your site is live at https://TU-USUARIO.github.io/mylinks/**

…tu sitio está publicado.

### 7.6 Prueba en tu celular

1. Copia la URL.
2. Envíatela por WhatsApp a ti mismo.
3. Ábrela en tu celular.
4. **Prueba todos los enlaces.**

### 7.7 Troubleshooting rápido

| Problema | Solución |
|----------|----------|
| Error 404 al abrir la URL | Verifica que el archivo se llame exactamente `index.html` |
| Pages dice "site not built" | Espera 3-5 min más, GitHub está construyendo |
| Cambios no aparecen tras nuevo `git push` | Espera 1-2 min y haz hard refresh (`Ctrl+Shift+R`) |

✅ **Checkpoint final:** Tu MyLinks está vivo en internet con URL pública.

---

## ✅ Cierre y Verificación

Antes de cerrar, valida:

- [ ] `mylinks/index.html` corre correctamente con Live Server.
- [ ] Está publicado en GitHub Pages con URL pública funcionando.
- [ ] El diseño publicado coincide con tu Spec Sheet (tokens, layout, estilo).
- [ ] Mínimo 3 commits descriptivos en el historial.
- [ ] Todos los enlaces de los botones funcionan.

---

## 📝 Entrega

📦 **Envía por la plataforma del curso (Blackboard):**

1. **URL de GitHub Pages:** `https://tu-usuario.github.io/mylinks/`
2. **URL del repositorio:** `https://github.com/tu-usuario/mylinks`

---

## 📊 Rúbrica de Evaluación (100 pts)

| Criterio | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|----------------|------------|--------------------|-----------|
| **Prompt Scaffolded y uso del Spec Sheet** | Prompt completo (Rol+Contexto+Tarea+Restricciones+Formato), Spec Sheet incorporado, ambos mockups adjuntos a Claude | Prompt estructurado básico, Spec Sheet usado parcialmente, 1 mockup adjunto | Prompt mediocre, sin mockups | Prompt vago, sin Spec Sheet |
| **Iteración con criterio** | Iteración con código real de uiverse.io adaptado a la paleta, instrucción específica | Iteración con instrucciones genéricas | Iteración mínima | No iteró o copió sin entender |
| **Extracción y Diseño Responsive** | Live Server local + responsive verificado en 375px y 1440px | Funciona con problemas menores | Funciona pero responsive roto | No corre o no es responsive |
| **Publicación y Coherencia** | URL pública sin errores, coherencia con Spec Sheet, 3+ commits | Publicado con errores menores, 2-3 commits | Publicado con problemas, 1-2 commits | No publicado o URL rota |

**Escala:** A (90-100), B (80-89), C (70-79), F (<70).

> Ver rúbrica detallada con evidencia a revisar en [rubric.md](rubric.md).

---

## 🚀 ¿Y ahora qué?

Felicidades — completaste el M2 en un día y publicaste tu primer sitio en internet. Ya tienes:

- Tu **MyLinks** vivo en `tunombre.github.io/mylinks` — para tu CV, LinkedIn, bio de Instagram.
- Experiencia con **Vibe Coding profesional** — usaste IA con criterio, no a ciegas.
- Dominio de **Figma** suficiente para diseñar interfaces básicas.
- Comprensión de **diseño responsive** verificable con DevTools.

En el **Módulo 3** vas a darle vida a tus páginas con **JavaScript** — interactividad, lógica, eventos. Tu MyLinks pasa de ser un poster digital a ser una aplicación real.
