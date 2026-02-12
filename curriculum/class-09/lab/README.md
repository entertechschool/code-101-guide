# Lab 09: Fundamentos de JavaScript

> 🚀 **Proyecto del Módulo:** Adivina el Número - Juego Interactivo
>
> 📌 **Este lab:** Crear tu primer programa interactivo con variables, tipos de datos y operadores.

## 🎯 Objetivos del Lab

1. Crear y enlazar correctamente archivos HTML y JavaScript
2. Declarar variables y trabajar con tipos de datos (`string`, `number`, `boolean`)
3. Utilizar operadores aritméticos y de concatenación para manipular datos

---

## 🔑 Conceptos Clave

- **Variable** - Espacio con nombre para guardar un dato que puede cambiar (`let`) o no (`const`)
- **Tipo de dato** - La naturaleza de un valor: texto (`string`), número (`number`) o lógico (`boolean`)
- **Operador** - Símbolo que realiza una operación: matemática (`+`, `-`, `*`, `/`, `%`) o de texto (concatenación)
- **console.log()** - Función que imprime valores en la consola del navegador para verificar tu código

---

## ⚙️ Setup Inicial

Antes de comenzar, verifica que tengas todo listo:

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | VS Code instalado | Puedes abrirlo sin errores |
| ☐ | Live Server instalado | Extensión visible en la barra lateral de VS Code |
| ☐ | Google Chrome | Puedes abrir DevTools con F12 |
| ☐ | Cuenta de GitHub | Puedes acceder a github.com |

---

## Parte 1: Setup del Proyecto (25 min)

### 1.1 Crea tu Repositorio

Este será el repositorio donde construirás el juego "Adivina el Número" durante todo el Módulo 3.

1. Ve a [github.com/new](https://github.com/new){:target="_blank"}
2. Configura tu repositorio:
   - **Repository name:** `guess-number-js`
   - **Description:** "Mi primer juego interactivo con JavaScript"
   - **Visibility:** Public
   - Marca **"Add a README file"**
3. Clic en **"Create repository"**

### 1.2 Clona el Repositorio

En tu terminal:

```bash
cd ~/Documents/bootcamp
git clone https://github.com/TU-USUARIO/guess-number-js.git
cd guess-number-js
code .
```

### 1.3 Crea los Archivos

En VS Code, crea dos archivos nuevos:

**`index.html`:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Adivina el Número</title>
</head>
<body>
  <h1>Mi primer programa en JavaScript</h1>
  <!-- Conecta tu archivo JS aquí -->
  <!-- Recuerda: la etiqueta <script> va antes de cerrar </body> -->
</body>
</html>
```

> 💡 **Tip:** La etiqueta `<script src="archivo.js"></script>` conecta un archivo JavaScript con tu HTML. Colócala justo antes de `</body>`.

**`script.js`:**

```js
console.log('¡Hola desde JavaScript!');
```

### 1.4 Verifica la Conexión

1. Abre `index.html` con Live Server (clic derecho → "Open with Live Server")
2. Abre DevTools en Chrome (`F12` o `Cmd+Option+I`)
3. Ve a la pestaña **Console**

**Resultado esperado en la consola:**
```
¡Hola desde JavaScript!
```

> 💡 **Tip:** Si no ves el mensaje, verifica que la etiqueta `<script>` apunte correctamente a `script.js`.

### 1.5 Tu Primer Commit

```bash
git add index.html script.js
git commit -m "feat: setup inicial con HTML y JS conectados"
git push
```

✅ **Checkpoint:** Ves el mensaje "¡Hola desde JavaScript!" en la consola del navegador y tu commit está en GitHub.

---

## Parte 2: Variables y Tipos de Datos (35 min)

### 2.1 Declara tus Primeras Variables

Reemplaza el contenido de `script.js` con lo siguiente:

```js
// --- Variables con let (pueden cambiar) ---
let nombre = 'Tu Nombre';
let edad = 0; // Cambia por tu edad real
let estaAprendiendo = true;

// --- Imprime cada variable ---
console.log(nombre);
console.log(edad);
console.log(estaAprendiendo);
```

Guarda y revisa la consola. Deberías ver tus tres valores impresos.

### 2.2 Verifica los Tipos

Agrega estas líneas al final de `script.js`:

```js
// --- Verifica los tipos de dato ---
console.log(typeof nombre);       // ¿Qué tipo es?
console.log(typeof edad);         // ¿Qué tipo es?
console.log(typeof estaAprendiendo); // ¿Qué tipo es?
```

**Resultado esperado:**
```
string
number
boolean
```

> 💡 **Tip:** `typeof` es un operador que te dice qué tipo de dato tiene una variable. Es muy útil para depurar.

### 2.3 Variables con `const`

Agrega al final:

```js
// --- Variables con const (no pueden cambiar) ---
const curso = 'Code 101';
const maxIntentos = 10;

console.log(curso);
console.log(maxIntentos);
```

Ahora intenta cambiar una constante:

```js
// Descomenta la siguiente línea y observa qué pasa:
// maxIntentos = 20;
```

> 💡 **¿Cuándo usar `let` vs `const`?** Usa `const` cuando el valor no cambiará. Usa `let` cuando necesites reasignarlo después. En la duda, empieza con `const`.

### 2.4 Interacción con el Usuario

Agrega al final de tu archivo:

```js
// --- Entrada del usuario ---
let nombreUsuario = prompt('¿Cómo te llamas?');
let edadUsuario = prompt('¿Cuántos años tienes?');

// --- Salida al usuario ---
alert('Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.');

// --- Verifica en consola ---
console.log('Nombre:', nombreUsuario);
console.log('Edad:', edadUsuario);
console.log('Tipo de edad:', typeof edadUsuario);
```

**Observa algo importante:** ¿Qué tipo de dato tiene `edadUsuario`? Aunque escribas un número, `prompt()` siempre devuelve un `string`.

### 2.5 Commit

```bash
git add script.js
git commit -m "feat: variables, tipos de datos e interacción con usuario"
git push
```

✅ **Checkpoint:** Tu programa pide nombre y edad con `prompt()`, muestra un saludo con `alert()`, y en la consola puedes ver los valores y sus tipos.

---

## Parte 3: Operadores (30 min)

### 3.1 Operadores Aritméticos

Crea un nuevo comentario al final de `script.js` y experimenta:

```js
// --- Operadores aritméticos ---
let a = 20;
let b = 7;

console.log('Suma:', a + b);        // 27
console.log('Resta:', a - b);       // 13
console.log('Multiplicación:', a * b); // 140
console.log('División:', a / b);     // 2.857...
console.log('Módulo:', a % b);       // 6 (el residuo)
```

> 💡 **Tip:** El operador `%` (módulo) devuelve el residuo de una división. Es muy útil para saber si un número es par o impar: si `numero % 2` da `0`, es par.

### 3.2 Cuidado con los Strings y Números

Prueba esto y observa qué pasa:

```js
// --- ¿Qué resultado esperas? ---
console.log('5' + 3);    // ¿53 o 8?
console.log(5 + 3);      // ¿53 o 8?
console.log('5' - 3);    // ¿Qué pasa aquí?
```

El operador `+` con strings **concatena** (une textos). Con números, **suma**. Los demás operadores (`-`, `*`, `/`) convierten strings a números automáticamente.

### 3.3 Concatenación vs Template Literals

Hay dos formas de unir texto con variables:

```js
// Forma 1: Concatenación con +
let saludo1 = 'Hola ' + nombreUsuario + ', tienes ' + edadUsuario + ' años.';
console.log(saludo1);

// Forma 2: Template literals con `` (backticks)
let saludo2 = `Hola ${nombreUsuario}, tienes ${edadUsuario} años.`;
console.log(saludo2);
```

> 💡 **Template literals** usan backticks (`` ` ``) en lugar de comillas, y `${variable}` para insertar valores. Son más fáciles de leer cuando tienes varios valores.

### 3.4 Aplica lo Aprendido

Agrega al final un pequeño cálculo personalizado:

```js
// --- Calculadora de edad ---
let anioActual = 2026;
let anioNacimiento = anioActual - Number(edadUsuario);

// Completa el mensaje usando template literals:
// Debe decir: "Hola [nombre], naciste aproximadamente en [año]"
// Tu código aquí...
```

### 3.5 Commit Final

```bash
git add script.js
git commit -m "feat: operadores aritméticos, concatenación y template literals"
git push
```

✅ **Checkpoint:** Tu consola muestra resultados de operaciones matemáticas, la diferencia entre concatenación y suma, y un mensaje personalizado usando template literals.

---

## Logros Adicionales (Opcional)

### 🟢 Agrega una Tercera Variable

Declara una variable `ciudad` con `prompt()` y muestra un mensaje completo con nombre, edad y ciudad usando template literals. (Refuerza lo aprendido hoy)

### 🟡 Convierte String a Número

Investiga `Number()` y `parseInt()`. Usa una de estas funciones para convertir la edad del usuario a número y hacer una operación matemática real (como calcular en qué año cumplirá 100 años).

### 🔴 Experimenta con Condicionales (Preview)

Investiga qué hace `if/else` en JavaScript. Intenta mostrar un mensaje diferente si la edad es mayor o menor a 18. (Lo veremos en detalle en la Clase 10)

---

## 📝 Entrega

### Checklist

- [ ] Repositorio `guess-number-js` creado en GitHub
- [ ] `index.html` y `script.js` enlazados correctamente
- [ ] Variables declaradas con `let` y `const`
- [ ] Interacción con `prompt()` y `alert()`
- [ ] Operadores aritméticos probados en consola
- [ ] Al menos 3 commits descriptivos

### Entregable

📸 **Screenshot** de tu consola del navegador mostrando:
- Resultados de `console.log()` con variables y operaciones
- Tu nombre visible en alguno de los mensajes

> ⚠️ El screenshot debe mostrar tu nombre en los mensajes para verificar que es tu trabajo.
