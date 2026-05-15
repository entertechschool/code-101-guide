# Lab Nivelación M3: Mi Mapa de Sueños

> 🚀 **Proyecto de Recuperación integrador del curso.** Integra los 3 módulos (HTML/CSS, Responsive/Git/Pages, JavaScript) escribiendo el código a mano

>
> ⚠️ **Lab Calificado:** Este lab será evaluado con la rúbrica del final.
>
> ⏱️ **Tiempo estimado:** 5-6 horas en un día.

## 🎯 Lo que vas a construir

Una página personal con tu **lista de sueños/metas de vida**, donde cada item es **interactivo**:

- HTML semántico con tu nombre, una frase personal y 6 sueños.
- CSS con tu paleta de colores, Google Fonts y Flexbox.
- Diseño responsive verificado en DevTools (móvil + desktop).
- **JavaScript real:** click en un sueño → se marca como **logrado** con check verde + tachado.
- **URL pública en GitHub Pages** que puedes compartir.

> 💡 **Resultado esperado:** una página viva en internet donde tú —y quien la visite— puede marcar visualmente los sueños cumplidos.
>
> 👀 **¿Quieres ver a dónde apuntas?** Mira el [**preview funcional**](preview/) — ejemplo de cómo debería quedar tu sitio al terminar (con personalización ficticia para que no copies).

---

## 🔑 Conceptos que cubrirás

| Concepto | Módulo | Cuándo lo verás |
|----------|--------|-----------------|
| HTML semántico (`header`, `main`, `section`, `article`) | M1 | Parte 2 |
| CSS, Box Model, paleta de colores | M1 | Parte 3 |
| Flexbox para layout vertical | M1 | Parte 3 |
| Google Fonts | M1 | Parte 3 |
| Hover y transiciones | M1 | Parte 6 |
| Diseño responsive con DevTools | M2 | Parte 4 |
| Media queries CSS | M2 | Parte 4 |
| Git (init, add, commit, push) | M2 | Parte 7 |
| GitHub Pages | M2 | Parte 7 |
| **Variables** (`let`, `const`) | **M3** | **Parte 5** |
| **Selección del DOM** (`getElementById`) | **M3** | **Parte 5** |
| **Eventos** (`addEventListener`) | **M3** | **Parte 5** |
| **Funciones con parámetros** (`function alternarLogrado(sueno, estado)`) | **M3** | **Parte 5** |
| **Condicionales** (`if (estado1) {...} else {...}`) | **M3** | **Parte 5** |
| **Manipulación del DOM** (`style.backgroundColor`, `style.opacity`, `textContent`) | **M3** | **Parte 5** |

---

## ⚠️ Prerrequisito

- VS Code con Live Server instalado.
- Cuenta de GitHub activa.
- Comandos básicos de Git (`init`, `add`, `commit`, `push`).
- Familiaridad mínima con HTML y CSS.

---

## ⚙️ Setup Inicial (15 min)

### Paso 1 · Crea la carpeta del proyecto

1. Crea una carpeta llamada `mi-mapa-de-suenos` en un lugar accesible (Documentos, Escritorio, donde guardas tus proyectos).
2. Abre VS Code → menú `File` → `Open Folder` → selecciona `mi-mapa-de-suenos`.
3. Crea estos 3 archivos vacíos (clic derecho en el panel lateral → `New File`):
   - `index.html`
   - `styles.css`
   - `script.js`

### Paso 2 · Activa Live Server

1. Clic derecho sobre `index.html` → **"Open with Live Server"**.
2. Tu navegador abre `http://127.0.0.1:5500/index.html`. Por ahora muestra una pantalla vacía — es normal.

✅ **Checkpoint Setup:** Tienes 3 archivos vacíos y Live Server corriendo.

---

## Parte 1 · Planifica tu sitio (15 min)

> 🧠 **Idea clave:** Antes de escribir código, define **qué** vas a poner. Si no decides ahora, te vas a perder en mitad del CSS preguntándote "¿qué color usaba?".

### 1.1 Elige tu paleta de 3 colores

Abre [coolors.co](https://coolors.co/){:target="_blank"} y dale clic a la barra espaciadora hasta encontrar una paleta que te guste. Anota:

```
Color de fondo principal: #______  (sugerencia: tono claro o oscuro pleno)
Color de acento:          #______  (color vivo para títulos o destacados)
Color de texto:           #______  (alto contraste con el fondo)
Color "logrado" (verde):  #16a34a  (sugerido, puedes cambiarlo)
```

> 💡 Mantén alto contraste entre fondo y texto. Si dudas, usa `#1a1a1a` para texto sobre fondo claro, o `#fafafa` sobre fondo oscuro.

### 1.2 Elige tu tipografía

Ve a [Google Fonts](https://fonts.google.com/){:target="_blank"} y elige UNA fuente. Recomendadas:

- **Inter** — limpia y moderna.
- **Poppins** — geométrica y amigable.
- **Caveat** — manuscrita, sentimental.
- **Space Grotesk** — tech y profesional.

Anota el nombre que elegiste: `_______________`

### 1.3 Escribe tus 6 sueños

Toma un papel o bloc de notas y escribe **exactamente 6 sueños o metas de vida**. Sé específico — evita genéricos.

| Tipo | Ejemplo bueno | Ejemplo flojo |
|------|---------------|---------------|
| Viaje | "Recorrer la Patagonia en moto" | "Viajar más" |
| Aprendizaje | "Tocar 5 canciones en guitarra" | "Aprender música" |
| Profesional | "Conseguir mi primer trabajo en tech" | "Trabajar" |
| Personal | "Correr una media maratón" | "Hacer ejercicio" |
| Creativo | "Publicar un cuento corto" | "Escribir" |
| Familia | "Llevar a mi mamá a conocer el mar" | "Viajar con familia" |

> 💡 Mezcla horizontes: algunos sueños cercanos (este año) y otros lejanos (5-10 años).

✅ **Checkpoint Parte 1:** Tienes tu paleta de 3 colores, tu fuente elegida y tu lista de 6 sueños escrita.

---

## Parte 2 · Estructura HTML semántico (45 min)

> 🧠 **Idea clave:** El HTML es el **esqueleto**. Usar etiquetas semánticas (no solo `div`) hace tu sitio más accesible, mejor para SEO y más fácil de estilar después.

### 2.1 Pega la estructura base

Abre `index.html` y pega esto **completo**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Mapa de Sueños — [Tu Nombre]</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <header>
    <h1>Mi Mapa de Sueños</h1>
    <p class="subtitulo">Estos son los sueños que persigo. Haz click para marcar los logrados.</p>
  </header>

  <main>
    <section class="lista-suenos">

      <article class="sueno" id="sueno-1">
        <h2>Sueño 1</h2>
        <p>Descripción breve del sueño 1.</p>
      </article>

      <article class="sueno" id="sueno-2">
        <h2>Sueño 2</h2>
        <p>Descripción breve del sueño 2.</p>
      </article>

      <article class="sueno" id="sueno-3">
        <h2>Sueño 3</h2>
        <p>Descripción breve del sueño 3.</p>
      </article>

      <article class="sueno" id="sueno-4">
        <h2>Sueño 4</h2>
        <p>Descripción breve del sueño 4.</p>
      </article>

      <article class="sueno" id="sueno-5">
        <h2>Sueño 5</h2>
        <p>Descripción breve del sueño 5.</p>
      </article>

      <article class="sueno" id="sueno-6">
        <h2>Sueño 6</h2>
        <p>Descripción breve del sueño 6.</p>
      </article>

    </section>
  </main>

  <footer>
    <p>Hecho con código por [Tu Nombre] — 2026</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

### 2.2 Personaliza con tu información

Ahora reemplaza:

- `[Tu Nombre]` en el `<title>` y `<footer>` por tu nombre real.
- En cada `<article class="sueno" id="sueno-N">`, cambia el `<h2>` y `<p>` por **uno de tus sueños** de la Parte 1.

**Ejemplo de un sueño personalizado:**

```html
<article class="sueno" id="sueno-1">
  <h2>Recorrer la Patagonia en moto</h2>
  <p>Salir desde Bariloche y llegar hasta Ushuaia en 21 días.</p>
</article>
```

> ⚠️ **NO cambies los `id="sueno-1"` … `id="sueno-6"`** — JavaScript los necesita exactamente con esos nombres para conectar el click de cada sueño en la Parte 5.
>
> Tampoco agregues más sueños ni quites — trabajamos con exactamente **6 sueños fijos**. Si tu lista de la Parte 1 tiene más de 6, elige los 6 que más te emocionan.

### 2.3 Verifica en el navegador

Guarda con `Ctrl+S`. El navegador con Live Server se refresca solo. Debes ver:

- Un título grande "Mi Mapa de Sueños".
- Un subtítulo.
- Tus 6 sueños listados verticalmente (sin estilo todavía).
- Un footer con tu nombre.

> 💡 Por qué cada etiqueta:
>
> | Etiqueta | Función |
> |----------|---------|
> | `<header>` | Encabezado del sitio (logo, título principal). |
> | `<main>` | Contenido principal único de la página. |
> | `<section>` | Agrupa contenido relacionado (la lista de sueños). |
> | `<article>` | Bloque independiente que tiene sentido por sí mismo (un sueño). |
> | `<footer>` | Pie de página (créditos, contacto). |

✅ **Checkpoint Parte 2:** Tu HTML tiene estructura semántica completa con tus sueños personalizados.

---

## Parte 3 · Estilos con CSS y paleta (60 min)

> 🧠 **Idea clave:** El CSS es la **piel**. Aquí aplicas tu paleta, tu tipografía y el Flexbox para que las cards se vean ordenadas.

### 3.1 Importa la fuente de Google Fonts

Vuelve a tu fuente en [Google Fonts](https://fonts.google.com/){:target="_blank"}. Selecciónala (botón "Get font") → "Get embed code" → copia el bloque `<link>`. **Pégalo en el `<head>` de `index.html`**, antes del `<link rel="stylesheet" href="styles.css">`:

```html
<!-- Ejemplo si elegiste Inter — usa el código de TU fuente -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
```

### 3.2 Pega los estilos base

Abre `styles.css` y pega esto. **Donde diga `/* TU COLOR */`, reemplaza por tu hex de la Parte 1**:

```css
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Estilos del cuerpo */
body {
  font-family: 'Inter', sans-serif;  /* Cambia 'Inter' por TU fuente */
  background-color: #f5f5f5;          /* TU color de fondo principal */
  color: #1a1a1a;                     /* TU color de texto */
  line-height: 1.6;
  padding: 20px;
}

/* Encabezado */
header {
  text-align: center;
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
}

header h1 {
  font-size: 40px;
  font-weight: 700;
  color: #5b21b6;                     /* TU color de acento */
  margin-bottom: 12px;
}

.subtitulo {
  font-size: 16px;
  color: #555;
}

/* Contenedor principal con Flexbox */
.lista-suenos {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 600px;
  margin: 40px auto;
}

/* Card de cada sueño */
.sueno {
  background-color: #ffffff;
  padding: 20px 24px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
}

.sueno h2 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 6px;
}

.sueno p {
  font-size: 14px;
  color: #666;
}

/* Pie de página */
footer {
  text-align: center;
  padding: 40px 20px;
  color: #999;
  font-size: 14px;
}
```

### 3.3 Personaliza los colores y la fuente

Repasa el CSS y cambia:

- `font-family: 'Inter'` → tu fuente de Google Fonts.
- `background-color: #f5f5f5` (body) → tu color de fondo principal.
- `color: #5b21b6` (header h1) → tu color de acento.
- `color: #1a1a1a` (body) → tu color de texto principal.

> ⚠️ **Importante:** si elegiste una fuente distinta a Inter, también debes actualizar el bloque `<link>` de Google Fonts que pegaste en el `<head>` del HTML (sección 3.1) para que cargue tu fuente real. Si el `<link>` apunta a Inter pero el CSS pide Poppins, el navegador caerá al `sans-serif` de respaldo.

### 3.4 Verifica en el navegador

Guarda. Refresca. Debes ver:

- Tu fuente aplicada en todo el sitio.
- El título grande en tu color de acento.
- Las cards de sueños con espaciado uniforme entre ellas (eso es `gap: 16px` de Flexbox).
- Cada card con fondo blanco y borde sutil.

> 💡 **¿Qué hace Flexbox aquí?**
>
> ```css
> .lista-suenos {
>   display: flex;
>   flex-direction: column;
>   gap: 16px;
> }
> ```
>
> - `display: flex` activa Flexbox en el contenedor.
> - `flex-direction: column` apila los hijos verticalmente.
> - `gap: 16px` agrega 16px de espacio entre cada card (sin necesidad de `margin`).

✅ **Checkpoint Parte 3:** Tu sitio tiene la paleta aplicada, la fuente de Google Fonts cargada y las cards alineadas con Flexbox.

---

## Parte 4 · Responsive con DevTools (30 min)

> 🧠 **Idea clave:** Tu sitio debe verse bien en cualquier pantalla. **DevTools** te permite simular distintos tamaños de pantalla sin tener varios dispositivos físicos.

### 4.1 Abre DevTools en modo dispositivo

1. Con tu sitio abierto en Live Server, presiona **`F12`** (o `Ctrl+Shift+I`).
2. Presiona el ícono de dispositivos 📱 o **`Ctrl+Shift+M`**.
3. Aparece la vista responsive con un selector de tamaño arriba.

### 4.2 Prueba en Móvil (375px)

Selecciona **iPhone SE** o cualquier tamaño ~375px. Verifica:

| ✓ | Verificación |
|---|--------------|
| ☐ | Sin scroll horizontal |
| ☐ | Texto legible (no muy pequeño) |
| ☐ | Cards ocupan ~todo el ancho con padding mínimo |
| ☐ | Título "Mi Mapa de Sueños" se ve bien (no muy grande) |

### 4.3 Si el título se ve muy grande en móvil, agrega media query

Al final de `styles.css`, agrega:

```css
/* Ajustes para pantallas pequeñas (móvil) */
@media (max-width: 600px) {
  header h1 {
    font-size: 30px;
  }

  body {
    padding: 10px;
  }

  .sueno {
    padding: 16px 18px;
  }
}
```

> 💡 **¿Qué hace `@media (max-width: 600px)`?**
>
> Aplica las reglas CSS de adentro **solo cuando la pantalla mide 600px o menos** (móviles). En pantallas más grandes (tablet, desktop), estas reglas se ignoran y se usan las generales.

### 4.4 Prueba en Desktop (1440px)

Cambia el tamaño a **1440 × 900** (Responsive). Verifica:

| ✓ | Verificación |
|---|--------------|
| ☐ | Contenido centrado, no estirado de borde a borde |
| ☐ | Las cards no se ven gigantes (el `max-width: 600px` en `.lista-suenos` debe limitarlas) |
| ☐ | Espacio aire alrededor del contenido principal |

✅ **Checkpoint Parte 4:** Tu sitio se ve correctamente en 375px y 1440px sin scroll horizontal.

---

## Parte 5 · JavaScript: marca tus sueños como logrados (60 min)

> 🧠 **Idea clave:** Hasta acá tu página es **estática** — bonita pero no hace nada. JavaScript le da **vida**: cuando hagas click en un sueño, cambia visualmente para mostrar que está logrado. **Esta es la parte central del Módulo 3.**

### 5.1 Verifica que `script.js` está conectado

Ya pusimos en el HTML, justo antes de `</body>`:

```html
<script src="script.js"></script>
```

Si no está, agrégalo ahora. **Debe estar al final del `<body>`** para que el HTML ya esté cargado cuando JavaScript empiece a buscar elementos.

### 5.2 Verifica que JavaScript "está vivo"

Abre `script.js` y escribe **una sola línea**:

```javascript
console.log("Mi Mapa de Sueños está vivo!");
```

Guarda, refresca el navegador, abre la consola con **`F12` → pestaña Console**. Debes ver el mensaje.

✅ **Checkpoint 5.2:** Ves el mensaje en la consola del navegador.

### 5.3 Selecciona tu primer sueño con `getElementById`

Vamos a empezar por seleccionar **un solo sueño** y verificar que JavaScript lo encuentra. Borra el `console.log` anterior y escribe:

```javascript
const sueno1 = document.getElementById('sueno-1');
console.log(sueno1);
```

Guarda, refresca, mira la consola. Debes ver el `<article id="sueno-1">` completo.

> 💡 **¿Qué hicimos?**
>
> - `document` = todo el HTML de tu página.
> - `getElementById('sueno-1')` = "tráeme el elemento que tenga el atributo `id="sueno-1"`".
> - `const sueno1` = guardamos ese elemento en una variable llamada `sueno1`.

✅ **Checkpoint 5.3:** Ves el `<article id="sueno-1">` en la consola.

### 5.4 Crea la función helper y conecta el primer sueño

> 🧠 **Idea clave:** Vamos a escribir **una función reutilizable** llamada `alternarLogrado` que recibe un sueño y un booleano, y aplica los estilos correctos según el estado. Después conectaremos un click al primer sueño. Esa función la vamos a reutilizar para los 5 sueños restantes en la siguiente sección.

Reemplaza el contenido de `script.js` por esto:

```javascript
// 1. Función helper: aplica o quita los estilos de "logrado" a un sueño
function alternarLogrado(sueno, estaLogrado) {
  if (estaLogrado) {
    sueno.style.backgroundColor = '#f0fdf4';
    sueno.style.borderColor = '#16a34a';
    sueno.style.opacity = '0.75';
    sueno.style.textDecoration = 'line-through';
  } else {
    sueno.style.backgroundColor = '#ffffff';
    sueno.style.borderColor = '#e5e5e5';
    sueno.style.opacity = '1';
    sueno.style.textDecoration = 'none';
  }
}

// 2. Sueño 1: estado inicial y click
let estado1 = false;
const sueno1 = document.getElementById('sueno-1');

sueno1.addEventListener('click', function() {
  if (estado1) {
    estado1 = false;
  } else {
    estado1 = true;
  }
  alternarLogrado(sueno1, estado1);
});
```

Guarda, refresca el navegador. **Haz click en el primer sueño.** Debe cambiar visualmente:

- Fondo verde claro.
- Tachado.
- Un poco transparente.

Vuelve a hacer click — vuelve a su estado normal. ¡Funciona el toggle!

> 💡 **¿Qué acabas de hacer? Línea por línea:**
>
> | Código | Qué hace |
> |--------|----------|
> | `function alternarLogrado(sueno, estaLogrado) {...}` | Define una función reutilizable que recibe 2 parámetros: el elemento `sueno` y un booleano `estaLogrado`. |
> | `if (estaLogrado) { ... } else { ... }` | Si `estaLogrado` es `true`, aplica los estilos de "logrado". Si no, aplica los estilos normales. |
> | `sueno.style.backgroundColor = '#f0fdf4'` | Cambia el color de fondo del sueño directamente desde JavaScript. |
> | `let estado1 = false` | Variable que recuerda si el sueño 1 está logrado o no. Empieza en `false` (pendiente). |
> | `addEventListener('click', function() {...})` | Cuando alguien hace click en el sueño 1, ejecuta este código. |
> | `if (estado1) { estado1 = false } else { estado1 = true }` | Voltea el estado: si estaba `true`, ahora `false`. Si estaba `false`, ahora `true`. |
> | `alternarLogrado(sueno1, estado1)` | Llama a la función helper con el sueño y su nuevo estado. |

✅ **Checkpoint 5.4:** Click en el primer sueño funciona. Toggle reversible.

### 5.5 Replica el patrón para los otros 5 sueños

Ahora vamos a hacer **lo mismo para los sueños 2 al 6**. Es código repetitivo a propósito — verás cómo el mismo patrón se aplica una y otra vez.

Agrega este código al final de `script.js`:

```javascript
// 3. Sueño 2
let estado2 = false;
const sueno2 = document.getElementById('sueno-2');
sueno2.addEventListener('click', function() {
  if (estado2) {
    estado2 = false;
  } else {
    estado2 = true;
  }
  alternarLogrado(sueno2, estado2);
});

// 4. Sueño 3
let estado3 = false;
const sueno3 = document.getElementById('sueno-3');
sueno3.addEventListener('click', function() {
  if (estado3) {
    estado3 = false;
  } else {
    estado3 = true;
  }
  alternarLogrado(sueno3, estado3);
});

// 5. Sueño 4
let estado4 = false;
const sueno4 = document.getElementById('sueno-4');
sueno4.addEventListener('click', function() {
  if (estado4) {
    estado4 = false;
  } else {
    estado4 = true;
  }
  alternarLogrado(sueno4, estado4);
});

// 6. Sueño 5
let estado5 = false;
const sueno5 = document.getElementById('sueno-5');
sueno5.addEventListener('click', function() {
  if (estado5) {
    estado5 = false;
  } else {
    estado5 = true;
  }
  alternarLogrado(sueno5, estado5);
});

// 7. Sueño 6
let estado6 = false;
const sueno6 = document.getElementById('sueno-6');
sueno6.addEventListener('click', function() {
  if (estado6) {
    estado6 = false;
  } else {
    estado6 = true;
  }
  alternarLogrado(sueno6, estado6);
});
```

Guarda, refresca. Verifica:

- [ ] Click en el sueño 1 → se marca como logrado.
- [ ] Click otra vez → vuelve a normal.
- [ ] Funciona en TODOS los sueños (1 al 6).
- [ ] Puedes marcar varios sueños al mismo tiempo.

> 💡 **¿Por qué tanto código repetitivo?** Porque por ahora trabajamos solo con conceptos que aprendiste en el M3. Más adelante (en Code 201) verás **arrays** y **loops** que permiten escribir esto en 8 líneas sin importar cuántos sueños tengas. Lo importante aquí es entender **el patrón**: variable de estado + getElementById + addEventListener + if/else.

✅ **Checkpoint 5.5:** Los 6 sueños son interactivos y reversibles.

### 5.6 Reto opcional: contador de sueños logrados

Si terminaste rápido, **agrega un contador**. Hazlo en este orden exacto — primero HTML, luego CSS, luego JS:

**Paso A · HTML.** En `index.html`, dentro del `<header>`, después del `<p class="subtitulo">`, agrega:

```html
<p class="contador">Sueños logrados: <span id="num-logrados">0</span></p>
```

**Paso B · CSS.** En `styles.css`, agrega al final:

```css
.contador {
  margin-top: 12px;
  font-size: 14px;
  color: #16a34a;
  font-weight: 700;
}
```

**Paso C · JS.** En `script.js`, agrega esta variable y esta función al inicio del archivo (justo después de la función `alternarLogrado`):

```javascript
// Variable global que cuenta sueños logrados
let totalLogrados = 0;
const contador = document.getElementById('num-logrados');

function actualizarContador() {
  contador.textContent = totalLogrados;
}
```

Luego, en CADA bloque de sueño (1 al 6), agrega 3 líneas:

1. Dentro del `if (estado1) { ... }` agrega `totalLogrados = totalLogrados - 1;` (al desmarcar, baja).
2. Dentro del `else { ... }` agrega `totalLogrados = totalLogrados + 1;` (al marcar, sube).
3. Antes de `alternarLogrado(...)`, llama a `actualizarContador();`.

**Así queda el bloque del sueño 1 completo** (replica el mismo patrón en los 6 bloques):

```javascript
let estado1 = false;
const sueno1 = document.getElementById('sueno-1');
sueno1.addEventListener('click', function() {
  if (estado1) {
    estado1 = false;
    totalLogrados = totalLogrados - 1;
  } else {
    estado1 = true;
    totalLogrados = totalLogrados + 1;
  }
  actualizarContador();
  alternarLogrado(sueno1, estado1);
});
```

> ⚠️ **El orden importa:** si pegas el JS antes de agregar el `<span id="num-logrados">` en HTML, `document.getElementById('num-logrados')` devuelve `null` y el sitio se rompe al hacer click. Asegúrate de hacer el Paso A primero.

Guarda, refresca, haz click. Debes ver el número subir y bajar en tu encabezado.

> 💡 **¿Qué agregamos?**
>
> - `let totalLogrados = 0` — variable global que guarda el conteo.
> - `getElementById('num-logrados')` — busca el `<span>` específico por su `id` (igual que con los sueños).
> - `function actualizarContador()` — función simple que pone el valor de `totalLogrados` en el `textContent` del span.
> - Dentro de cada bloque de sueño, sumamos o restamos 1 antes de llamar a `actualizarContador()`.

✅ **Checkpoint Parte 5:** Sabes explicar qué hace `addEventListener`, qué hace la función `alternarLogrado` y por qué necesitas la variable `estadoN` por cada sueño. Tu sitio es **interactivo**.

---

## Parte 6 · Hover, transiciones y pulido (30 min)

> 🎨 **Idea clave:** Los detalles visuales son lo que hace la diferencia entre un sitio "que funciona" y un sitio "agradable de usar".

### 6.1 Agrega hover a las cards

Abre `styles.css` y haz **dos cambios**. Usa `Ctrl+F` (buscar) y escribe `.sueno {` para ubicar rápido la regla existente.

**Cambio 1 · Dentro de la regla `.sueno` existente**, agrega la línea `transition` al final de las propiedades. Tu regla debe quedar así:

```css
.sueno {
  background-color: #ffffff;
  padding: 20px 24px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
}
```

**Cambio 2 · Agrega esta nueva regla `.sueno:hover` justo debajo** de la regla `.sueno`:

```css
.sueno:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

Guarda, refresca. Pasa el mouse sobre una card — debe **elevarse ligeramente** con sombra suave.

### 6.2 Suaviza el cambio "logrado"

La línea `transition` que agregaste en 6.1 incluye `background-color`, `border-color` y `opacity` — tres de las propiedades que cambia tu función `alternarLogrado`. Haz click en un sueño: esos cambios ahora son elegantes, no abruptos.

> 💡 **Nota:** `text-decoration: line-through` aparece de golpe (sin animación) porque CSS no permite animar `text-decoration`. Es una limitación conocida del navegador. No te preocupes — el efecto general queda igual de pulido.

### 6.3 Mejora la accesibilidad básica

Asegúrate de que el HTML tenga:

- [ ] `<html lang="es">` para que el navegador sepa el idioma.
- [ ] `<title>` con tu nombre.
- [ ] Las cards tienen `cursor: pointer` para indicar que son clickeables (ya está en el CSS base).

✅ **Checkpoint Parte 6:** Las cards tienen hover suave con elevación y la transición al marcar como logrado es elegante.

---

## Parte 7 (Desafío Calificado) · Git + GitHub Pages (45 min)

> 🌍 **Idea clave:** Tu Mapa de Sueños debe estar vivo en internet con URL pública. Es la **evidencia entregable** del lab.

### 7.1 Inicializa Git y haz el primer commit

Abre la terminal integrada de VS Code (Menú → Terminal → New Terminal) y ejecuta:

```bash
git init
git add index.html styles.css script.js
git commit -m "feat: crear Mi Mapa de Suenos con HTML, CSS y JS interactivo"
```

> 💡 No incluyas tildes ni ñ en los mensajes de commit (algunas terminales antiguas las muestran mal).

### 7.2 Crea el repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new){:target="_blank"}.
2. **Repository name:** `mi-mapa-de-suenos`.
3. **Public**, NO marques "Initialize with README".
4. Clic en **Create repository**.

### 7.3 Conecta tu repo local con GitHub

GitHub te muestra unos comandos. Copia los de la sección **"…or push an existing repository from the command line"**, o ejecuta directamente:

```bash
git remote add origin https://github.com/TU-USUARIO/mi-mapa-de-suenos.git
git branch -M main
git push -u origin main
```

> Reemplaza `TU-USUARIO` por tu username real de GitHub.

### 7.4 Activa GitHub Pages

1. En GitHub, ve a tu repo `mi-mapa-de-suenos` → pestaña **Settings**.
2. Menú lateral izquierdo → **Pages**.
3. En `Source`: **Deploy from a branch**.
4. En `Branch`: **main** + **/ (root)**.
5. Clic en **Save**.

### 7.5 Espera el deploy (1-3 min)

Refresca la página de Settings → Pages. Cuando aparezca:

> ✅ **Your site is live at https://TU-USUARIO.github.io/mi-mapa-de-suenos/**

…tu sitio está publicado.

### 7.6 Pruébalo en tu celular

1. Copia la URL → envíatela por WhatsApp a ti mismo.
2. Ábrela en tu celular.
3. **Toca un sueño** → debe marcarse como logrado.
4. Tócalo de nuevo → debe volver al estado normal.

> 💡 Si funciona en tu celular, has demostrado que **integraste los 3 módulos completos**: HTML/CSS (M1), responsive y publicación (M2) e interactividad JavaScript (M3).

### 7.7 Haz commits adicionales para evidenciar trabajo iterativo

Después de pulir, agrega más commits. Mínimo **3 commits descriptivos** en total para puntaje completo en la rúbrica.

**Commit 2 — Hover y transiciones (después de la Parte 6):**

```bash
git add styles.css
git commit -m "style: agregar hover y transicion suave a las cards"
git push
```

**Commit 3 — elige según lo que hiciste:**

- Si hiciste el **reto opcional del contador** (sección 5.6):

  ```bash
  git add index.html styles.css script.js
  git commit -m "feat: agregar contador de suenos logrados"
  git push
  ```

- Si **no hiciste el contador**, ajusta cualquier detalle visual (un color, espaciado, texto) y comitea:

  ```bash
  git add .
  git commit -m "refactor: ajustar paleta y espaciado del header"
  git push
  ```

### 7.8 Troubleshooting rápido

| Problema | Solución |
|----------|----------|
| Error 404 al abrir la URL | Verifica que el archivo se llame exactamente `index.html` |
| Pages dice "site not built" | Espera 3-5 min más, GitHub está construyendo |
| Cambios no aparecen tras nuevo `git push` | Espera 1-2 min y haz hard refresh (`Ctrl+Shift+R`) |
| El JavaScript no funciona en GitHub Pages pero sí en local | Verifica que la ruta `<script src="script.js"></script>` no tenga `/` al inicio |

✅ **Checkpoint final:** Tu Mapa de Sueños está vivo en internet, es interactivo, responsive y tiene 3+ commits.

---

## ✅ Cierre y Verificación

Antes de cerrar, valida toda la lista:

- [ ] `index.html`, `styles.css` y `script.js` corren correctamente con Live Server.
- [ ] El sitio está publicado en GitHub Pages con URL pública funcionando.
- [ ] El diseño usa tu paleta y tu fuente elegida en la Parte 1.
- [ ] Mínimo 3 commits descriptivos en el historial (`git log --oneline`).
- [ ] Click en cualquier sueño lo marca como logrado (y se puede revertir).
- [ ] Responsive verificado en 375px y 1440px+ sin scroll horizontal.
- [ ] Puedes explicar qué hace `addEventListener` y qué hace la función `alternarLogrado`.

---

## 📝 Entrega

📦 **Envía por la plataforma del curso (Blackboard):**

1. **URL de GitHub Pages:** `https://tu-usuario.github.io/mi-mapa-de-suenos/`
2. **URL del repositorio:** `https://github.com/tu-usuario/mi-mapa-de-suenos`

---

## 📊 Rúbrica de Evaluación (100 pts)

| Criterio | Excelente (25) | Bueno (20) | Satisfactorio (15) | Bajo (10) |
|----------|----------------|------------|--------------------|-----------|
| **HTML, CSS y Diseño Visual (M1)** | HTML semántico (`header`, `main`, `section`, `article`), Flexbox correcto, paleta coherente, Google Fonts aplicada, hover con transición | Mayoría de etiquetas semánticas, paleta aplicada, hover básico | Estructura básica con algunos `div`, paleta incoherente, sin hover | Solo `div`, sin paleta, sin hover |
| **Responsive, Git y Publicación (M2)** | Responsive verificado en 375px y 1440px+ sin scroll, media query implementada, 3+ commits descriptivos, GitHub Pages funcionando sin errores | Responsive parcial, 2-3 commits, publicado con errores menores | Responsive roto en algún tamaño, 1-2 commits, publicado con problemas | No responsive o no publicado |
| **JavaScript Funcional (M3)** | Click en sueño cambia visualmente entre normal/logrado (reversible), código limpio en `script.js` con función helper, alumno explica `addEventListener` y `alternarLogrado` | Click funciona pero sin reversibilidad, código funcional pero desorganizado | Click funciona solo en 1 sueño, alumno no explica el código | JS no funciona o no implementado |
| **Coherencia y Personalización** | Contenido 100% personal (nombre, sueños propios), diseño coherente con la paleta elegida, footer con tu nombre | Contenido personal en su mayoría, pequeñas inconsistencias visuales | Contenido genérico, paleta poco aplicada | Sin personalización, contenido literal del template |

**Escala:** A (90-100), B (80-89), C (70-79), F (<70).


---

## 🚀 ¿Y ahora qué?

Felicidades — completaste un **proyecto integrador de los 3 módulos** del curso en un día. Ya tienes:

- Tu **Mi Mapa de Sueños** vivo en internet — un sitio que puedes actualizar cuando logres cada meta.
- Dominio de **HTML semántico, CSS con Flexbox y diseño responsive** (M1 + M2).
- Comprensión de **eventos y manipulación del DOM** — la base de toda interactividad web (M3).
- Capacidad para **integrar HTML + CSS + JS** en un solo producto publicado.

> 💡 **Bonus para tu portafolio:** "Mi Mapa de Sueños" combina diseño personal + código real + storytelling. Compártelo en LinkedIn con la URL pública.
