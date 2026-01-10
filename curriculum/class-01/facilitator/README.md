# Guía del Facilitador - Clase 01: Setup y Web Moderna

> Tiempo de lectura: 8 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **HTML**: HyperText Markup Language—el lenguaje que estructura todo el contenido de la web.
- **Cliente-Servidor**: El navegador (cliente) pide, el servidor responde con archivos.
- **Live Server**: Extensión de VS Code que actualiza el navegador automáticamente al guardar.
- **Etiquetas**: Elementos HTML que definen el tipo de contenido (`<h1>`, `<p>`, `<img>`).
- **Atributo `alt`**: Texto alternativo en imágenes—crítico para accesibilidad y SEO.

---

## 🔗 Analogías Útiles

**HTML <> Esqueleto:**
HTML es la estructura ósea de una página. Sin él, no hay forma. CSS es la ropa y maquillaje, JavaScript son los músculos que dan movimiento.

**Cliente-Servidor <> Restaurante:**
El cliente (comensal) hace un pedido al servidor (mesero). El mesero va a la cocina (servidor web) y trae la comida (archivos HTML, CSS, JS). No ves la cocina, pero confías en que existe.

**View Source <> Rayos X:**
Ver el código fuente es como hacerle rayos X a cualquier sitio web. Ves la estructura interna sin importar qué tan bonito se vea por fuera.

---

## 📚 Contexto Histórico

### HTML: El invento que cambió el mundo

En marzo de 1989, un físico británico llamado Tim Berners-Lee escribió un documento en el CERN titulado "Information Management: A Proposal". Su jefe anotó en la portada: "Vague but exciting" (Vago pero emocionante).

Para diciembre de 1990, Berners-Lee tenía funcionando el primer servidor web, el primer navegador (llamado WorldWideWeb), y había definido HTML como formato de documentos. El 6 de agosto de 1991, publicó el primer sitio web público, explicando qué era la World Wide Web.

El CERN liberó la tecnología como dominio público el 30 de abril de 1993. Para finales de 1994, la web tenía 10,000 servidores y 10 millones de usuarios.

> **Para contar en clase:** "El creador de HTML trabajaba en un laboratorio de física. No era diseñador, no era empresario—era un científico que quería que los investigadores compartieran información más fácil. Y terminó inventando la web."

### VS Code: De cero a dominación en 5 años

Microsoft anunció VS Code el 29 de abril de 2015 en la conferencia Build. El equipo había empezado a trabajar en octubre de 2014 con la meta de tener un beta para mayo 2015—lo lograron.

VS Code está construido sobre Electron (el mismo framework de Slack y Discord), basándose en el Monaco Editor que Microsoft había lanzado en 2013. En noviembre de 2015, liberaron el código fuente bajo licencia MIT.

Para abril de 2016, cuando lanzaron la versión 1.0, ya había sido instalado por 2 millones de desarrolladores.

> **Para contar en clase:** "VS Code tiene menos de 10 años y ya es el editor más usado del mundo. Es gratuito, open source, y lo usa todo el mundo—desde estudiantes hasta ingenieros de Google."

**Fuentes:** [Wikipedia - Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee), [CERN - Birth of the Web](https://home.cern/science/computing/birth-web), [Wikipedia - VS Code](https://en.wikipedia.org/wiki/Visual_Studio_Code), [VS Code 1.0 Announcement](https://code.visualstudio.com/blogs/2016/04/14/vscode-1.0)

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "La Pregunta del DNS"

La clase empieza con una pregunta aparentemente simple que revela cuánto no sabemos.

> "¿Qué pasa cuando escribes google.com y presionas Enter?"

**Dinámica sugerida:**
```
Facilitador: "¿Qué pasa cuando escribes google.com y presionas Enter?"
(Silencio o respuestas vagas como "se abre Google")
Facilitador: "Pero ¿CÓMO se abre? ¿De dónde viene?"
(Más especulación)
Facilitador: "Hay servidores, hay DNS, hay HTTP... pero no necesitan saber todo eso hoy. Lo importante es: hay una computadora en algún lugar que les ENVÍA archivos. Y esos archivos... son código que podemos VER."
```

### Dinámica 2: "View Source en Google"

El momento de revelación más poderoso de la clase.

> "Todo sitio web que han visitado en su vida está hecho de código que pueden ver."

**Dinámica sugerida:**
```
Facilitador: (Abre google.com)
Facilitador: "Esto se ve limpio, minimalista, profesional..."
Facilitador: (Clic derecho → Ver código fuente)
Facilitador: "...pero por dentro es ESTO."
(Pausa dramática mientras procesan el código)
Facilitador: "¿Ven algo que reconozcan? ¿Un <div>? ¿Un <script>?"
(Alguien señala algo)
Facilitador: "Exacto. Y hoy van a escribir SU propio código."
```

### Dinámica 3: "El Primer ¡Hola Mundo!"

Celebrar el momento en que ven su primera página en el navegador.

```
(Estudiante ve "¡Hola Mundo!" en el navegador)
Facilitador: "¡Felicidades! Acabas de crear tu primera página web."
Facilitador: "Ahora cambia el texto a tu nombre y guarda."
(Live Server actualiza automáticamente)
Facilitador: "¿Vieron eso? El navegador se actualizó SOLO. Así trabajaremos todo el curso."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Estructura HTML mínima

**Cuándo usarlo:** Para explicar qué hace cada línea del boilerplate.

```html
<!DOCTYPE html>        <!-- Dice: "Esto es HTML5" -->
<html lang="es">       <!-- Inicio del documento, en español -->
<head>
    <title>Mi Página</title>  <!-- Lo que aparece en la pestaña -->
</head>
<body>
    <h1>¡Hola!</h1>    <!-- Lo que VES en la página -->
</body>
</html>
```

**Tip de facilitación:** Escribe cada línea mientras explicas. No copies/pegues el bloque completo.

### Ejemplo 2: La imagen que no carga

**Cuándo usarlo:** Para explicar rutas de archivos y el atributo `alt`.

```html
<!-- CORRECTO - archivo en la misma carpeta -->
<img src="foto.jpg" alt="Mi foto de perfil">

<!-- INCORRECTO - ruta que no existe -->
<img src="imagenes/foto.jpg" alt="Mi foto de perfil">
<!-- Error: no hay carpeta "imagenes" -->

<!-- INCORRECTO - mayúsculas diferentes -->
<img src="Foto.JPG" alt="Mi foto de perfil">
<!-- Error si el archivo se llama "foto.jpg" (minúsculas) -->
```

**Tip de facilitación:** Muestra el error en vivo. Intenta cargar una imagen con nombre incorrecto y deja que vean el ícono de imagen rota.

### Ejemplo 3: Lista de hobbies

**Cuándo usarlo:** Para introducir listas después de que dominen h1, p, e img.

```html
<h2>Mis Hobbies</h2>
<ul>
    <li>Programar</li>
    <li>Ver películas</li>
    <li>Leer</li>
</ul>
```

**Tip de facilitación:** Pregunta "¿Qué creen que significa `ul`?" (unordered list) y "¿Y `li`?" (list item).

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| "No se ve nada" después de guardar | Live Server no está activo | Clic derecho → Open with Live Server |
| Imagen muestra ícono roto | Ruta incorrecta o nombre mal escrito | Verificar que el archivo está en la misma carpeta |
| `<h1>` no se ve grande | Etiqueta no cerrada o mal escrita | Verificar `</h1>` al final |
| "Mi código se ve raro" | Falta cerrar alguna etiqueta | Usar extensión Auto Rename Tag |
| "Live Server no aparece" | Extensión no instalada | Buscar en Extensions y clickear Install |
| Todo el texto está junto | Falta estructura de etiquetas | Explicar que HTML ignora saltos de línea |

---

## 🎯 Checkpoints de Validación

| Minuto | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 25 | VS Code funcionando | Todos tienen VS Code abierto con carpeta mi-perfil |
| 35 | Live Server activo | Todos ven "¡Hola Mundo!" en navegador |
| 60 | Contenido personal | Nombre real visible en `<h1>` |
| 90 | Lab completo | Foto + bio + hobbies visibles |
| 135 | Entrega lista | Screenshot con nombre y localhost visible |

---

## 🔗 Conexión con la Próxima Clase

Al cerrar, planta la semilla para la Clase 02:

> "Hoy crearon su primera página. Tiene nombre, foto, bio, hobbies. Pero está todo junto, sin organización. ¿Cómo saben los profesionales qué poner dónde? Diseñan ANTES de codear. La próxima clase aprenderemos a hacer wireframes y a organizar el HTML como los profesionales—con etiquetas que tienen SIGNIFICADO."

**Tarea implícita:** "Piensen qué secciones quieren tener en su perfil: ¿películas, música, libros, deportes, gaming?"
