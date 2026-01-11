# Guía del Facilitador - Clase 03: Estilos con CSS

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **CSS**: Cascading Style Sheets—el lenguaje que controla la apariencia visual de HTML.
- **Selector**: Define QUÉ elementos estilizar (`h1`, `.clase`, `#id`).
- **Box Model**: El modelo de caja que define cómo se calcula el espacio (content + padding + border + margin).
- **Google Fonts**: Servicio gratuito de tipografías web de Google.
- **Especificidad**: ID > Clase > Elemento—determina qué estilo "gana" cuando hay conflictos.

---

## 🔗 Analogías Útiles

**CSS <> Ropa y maquillaje:**
HTML es el cuerpo (estructura), CSS es la ropa y el maquillaje (apariencia). Puedes cambiar completamente cómo te ves sin cambiar tu cuerpo.

**Box Model <> Caja de regalo:**
El contenido es el regalo. El padding es el papel de seda que lo envuelve. El border es la caja. El margin es el espacio que dejas entre cajas en el estante.

**Cascada <> Cascada de agua:**
Los estilos "caen" de arriba hacia abajo. Si defines un color dos veces, el último gana—como el agua que termina en el punto más bajo.

**Google Fonts <> Armario de ropa gratis:**
Google Fonts es como un armario gigante de tipografías gratuitas. Entras, eliges lo que te gusta, y lo usas en tu proyecto.

---

## 📚 Contexto Histórico

### CSS: De la pesadilla al control total

El 10 de octubre de 1994, Håkon Wium Lie propuso CSS mientras trabajaba con Tim Berners-Lee en el CERN. El problema que intentaba resolver: cada navegador mostraba las páginas diferente, y los desarrolladores no tenían control sobre la apariencia.

CSS 1 se convirtió en recomendación del W3C el 17 de diciembre de 1996. Pero el soporte de navegadores era terrible—Internet Explorer 3 (1996) tenía soporte "limitado" y lleno de bugs. Tomó más de tres años para que algún navegador implementara CSS correctamente.

Lie trabajó junto a Bert Bos para desarrollar el estándar. Ambos escribieron el libro "Cascading Style Sheets: Designing for the Web" en 1997. Lie luego se convirtió en CTO de Opera Software hasta 2016.

> **Para contar en clase:** "Antes de CSS, si querías texto rojo, tenías que escribir `<font color='red'>` en CADA lugar. Imagina tener 100 párrafos... CSS solucionó eso: escribes `p { color: red }` UNA vez y aplica a todos."

### Google Fonts: Tipografía para todos

Antes de Google Fonts (lanzado en 2010), usar tipografías personalizadas era un dolor de cabeza. Tenías que comprar licencias, convertir formatos, y esperar que funcionara en todos los navegadores.

Google Fonts cambió todo: tipografías gratuitas, optimizadas para web, con un simple `<link>` en el HTML. Hoy tiene más de 1,500 familias tipográficas y es usado por millones de sitios web.

> **Para contar en clase:** "¿Ven cómo Netflix tiene su tipografía distintiva? ¿O cómo Medium se ve elegante? Todo es CSS + tipografías web. Y ustedes van a hacer lo mismo hoy—gratis."

**Fuentes:** [Wikipedia - CSS](https://en.wikipedia.org/wiki/CSS){:target="_blank"}, [Wikipedia - Håkon Wium Lie](https://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie){:target="_blank"}, [Web Design Museum - CSS1](https://www.webdesignmuseum.org/web-design-history/css-1-1996){:target="_blank"}

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "La Transformación Mágica"

El momento más poderoso de la clase. Preparación clave.

**Preparación:**
1. Tener una página HTML sin CSS (la de clases anteriores)
2. Tener un archivo CSS listo pero NO vinculado

**Dinámica sugerida:**
```
Facilitador: (Muestra página HTML sin estilos)
Facilitador: "Esto es lo que tienen ahora. Funciona, pero..."
(Pausa para que registren lo "feo")
Facilitador: (Abre index.html en VS Code)
Facilitador: (Agrega <link rel="stylesheet" href="styles.css">)
Facilitador: (Guarda)
(Live Server actualiza - la página se transforma)
Facilitador: "...Un archivo. Una línea para vincularlo. Y TODO cambia."
```

### Dinámica 2: "Tu Paleta Personal"

Momento de expresión creativa. No impongas colores.

```
Facilitador: "Abran coolors.co. Presionen la barra espaciadora."
(Generan paletas aleatorias)
Facilitador: "Cuando encuentren una que les guste, hagan clic en el candado."
Facilitador: "Necesitan mínimo 3 colores: primario, fondo, y texto."
(5 minutos de exploración libre)
```

**Si alguien no puede decidir:**
```
Facilitador: "¿Cuál es tu color favorito?"
Estudiante: "Azul"
Facilitador: "Empieza con un azul oscuro como primario. Blanco o gris claro como fondo. Negro o gris oscuro para texto. Simple."
```

### Dinámica 3: "DevTools Box Model"

Hacer visible lo invisible.

```
Facilitador: (Abre DevTools con F12)
Facilitador: (Selecciona un elemento)
Facilitador: (Va a Computed → muestra el diagrama del Box Model)
Facilitador: "¿Ven esos colores? El azul es el contenido. El verde es padding. El amarillo es border. El naranja es margin."
Facilitador: (Cambia valores en vivo)
Facilitador: "Pueden experimentar aquí antes de cambiar su código."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Vincular CSS (el orden importa)

**Cuándo usarlo:** Primer paso del lab.

```html
<head>
    <!-- Google Fonts PRIMERO -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">

    <!-- Tu CSS DESPUÉS -->
    <link rel="stylesheet" href="styles.css">
</head>
```

**Tip de facilitación:** Si Google Fonts no funciona, 90% de las veces el link está DESPUÉS del CSS.

### Ejemplo 2: Paleta documentada

**Cuándo usarlo:** Para enseñar buenas prácticas desde el inicio.

```css
/* =========================
   MI PALETA DE COLORES
   =========================
   Primario:    #2d3436
   Secundario:  #0984e3
   Fondo:       #f5f6fa
   Texto:       #2d3436
   Acento:      #00b894
   ========================= */

body {
    background-color: #f5f6fa;
    color: #2d3436;
}
```

**Tip de facilitación:** Esto les ayuda cuando olvidan qué colores eligieron.

### Ejemplo 3: Box Model Reset

**Cuándo usarlo:** Para explicar por qué los elementos tienen espacios raros por defecto.

```css
/* Reset - elimina estilos por defecto del navegador */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

**Tip de facilitación:** Muestra antes/después del reset para que vean la diferencia.

### Ejemplo 4: Header estilizado

**Cuándo usarlo:** Como objetivo del lab guiado.

```css
header {
    background-color: #2d3436;
    color: white;
    padding: 20px;
    text-align: center;
}

nav a {
    color: white;
    text-decoration: none;  /* Quita el subrayado */
    margin: 0 10px;
}

nav a:hover {
    color: #00b894;  /* Cambia de color al pasar el mouse */
}
```

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| CSS no aplica nada | Link no está en head o ruta incorrecta | Verificar `<link>` y nombre de archivo |
| Google Font no funciona | Link después del CSS o mal copiado | Mover link de fonts ANTES del CSS |
| `.clase` no funciona | Falta el punto en CSS | Agregar punto: `.mi-clase { }` |
| `#id` no funciona | Falta el # en CSS | Agregar hash: `#mi-id { }` |
| Propiedad ignorada | Error de tipeo | `backgorund` → `background` |
| Falta punto y coma | Estilos siguientes no aplican | Verificar `;` al final de cada línea |
| Padding/margin confusión | No entienden la diferencia | Demo en DevTools con visualización |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 20 | CSS vinculado | Cambio de color de fondo visible |
| 40 | Paleta elegida | Comentario con colores en CSS |
| 60 | Google Fonts | Tipografía cambió visualmente |
| 90 | Box Model aplicado | Padding visible en header y sections |
| 120 | Hover en nav | Color cambia al pasar mouse |

---

## 🔗 Conexión con la Próxima Clase

Al cerrar, planta la semilla para la Clase 04:

> "Ahora su perfil tiene identidad: colores, tipografía, espaciado. Pero los elementos siguen uno debajo del otro. ¿Cómo hace Netflix para poner películas lado a lado? ¿O Spotify sus álbumes en filas? La próxima clase aprenderemos Flexbox—UNA propiedad que cambia todo. Y prepárense: es la última clase del módulo. Habrá Demo Day."

**Tarea implícita:** "Exploren layouts de sitios que les gusten. ¿Cómo organizan los elementos? Netflix, Spotify, Amazon..."
