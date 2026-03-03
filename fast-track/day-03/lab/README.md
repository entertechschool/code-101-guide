# Día 3: JavaScript

> 🚀 **Proyecto:** Mi Portfolio Dev
>
> 📌 **Hoy:** Agregar interactividad con JavaScript: validación de formulario y menú móvil.

## 🎯 Objetivos

1. Conectar un archivo JavaScript a tu HTML
2. Validar un formulario con JavaScript (campos vacíos + formato de email)
3. Crear un menú hamburguesa toggle para móvil

---

## 🔑 Conceptos Clave

- **DOM** - Document Object Model: la representación del HTML que JavaScript puede manipular
- **getElementById** - Método que selecciona un elemento por su `id`
- **addEventListener** - Conecta una función a un evento (clic, submit, etc.)
- **classList.toggle** - Agrega o quita una clase CSS de un elemento

---

## ⚙️ Antes de Comenzar

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Día 2 completado | Portfolio responsive con Flexbox |
| ☐ | Live Server activo | Ves tu página en el navegador |
| ☐ | `script.js` conectado | La etiqueta `<script src="script.js">` está en tu HTML |

---

## Parte 1: Conectar JavaScript (10 min)

### 1.1 Verificar la conexión

Abre `script.js` y escribe:

```js
console.log('JavaScript conectado correctamente');
```

Guarda y abre la **consola del navegador**:
1. Clic derecho en tu página → **Inspeccionar**
2. Ve a la pestaña **Console**

Deberías ver el mensaje en la consola.

### 1.2 Probar acceso al DOM

Agrega debajo:

```js
console.log(document.getElementById('contact-form'));
```

Si ves `<form id="contact-form">...</form>` en la consola, JavaScript tiene acceso a tu HTML.

> ⚠️ Si ves `null`, verifica que `<script src="script.js">` esté **antes** de `</body>` (no en el `<head>`).

Borra las líneas de prueba. Ahora vamos a escribir código real.

✅ **Checkpoint:** JavaScript está conectado y puede acceder a los elementos del DOM.

---

## Parte 2: Validación del Formulario (45 min)

### 2.1 Seleccionar Elementos

En `script.js`, comienza seleccionando los elementos del formulario:

```js
/* =========================
   VALIDACIÓN DEL FORMULARIO
   ========================= */
const form = document.getElementById('contact-form');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');
const feedback = document.getElementById('form-feedback');
```

> 📌 **`const`** declara una variable que no cambiará. Usamos `const` porque estos elementos siempre serán los mismos.

### 2.2 Crear la Función de Validación

```js
function validarFormulario() {
  // Limpiar feedback anterior
  feedback.textContent = '';
  feedback.className = 'form-feedback';

  // Obtener valores (trim elimina espacios al inicio/final)
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  // Validar campos vacíos
  if (nombre === '') {
    mostrarError('Por favor ingresa tu nombre');
    nombreInput.focus();
    return false;
  }

  if (email === '') {
    mostrarError('Por favor ingresa tu email');
    emailInput.focus();
    return false;
  }

  // Validar formato de email
  if (!validarEmail(email)) {
    mostrarError('Por favor ingresa un email válido');
    emailInput.focus();
    return false;
  }

  if (mensaje === '') {
    mostrarError('Por favor escribe un mensaje');
    mensajeInput.focus();
    return false;
  }

  // Todo válido
  mostrarExito('¡Mensaje enviado correctamente! Gracias, ' + nombre);
  form.reset();
  return true;
}
```

> 💡 **`return false`** detiene la función cuando encuentra un error. Si pasa todas las validaciones, llega al final y muestra éxito.

### 2.3 Estilos para Feedback

Antes de crear las funciones auxiliares, agrega estos estilos en `styles.css`:

```css
.form-feedback { margin-top: 1rem; font-weight: 600; }
.form-feedback.success { color: #16a34a; }
.form-feedback.error { color: #dc2626; }
```

> 📌 **Preparación para JS:** Estas clases serán agregadas/quitadas por JavaScript para mostrar mensajes de validación con colores.

### 2.4 Funciones Auxiliares

```js
function validarEmail(email) {
  // Verifica que tenga @ y un punto después del @
  const arroba = email.indexOf('@');
  const punto = email.lastIndexOf('.');
  return arroba > 0 && punto > arroba + 1 && punto < email.length - 1;
}

function mostrarError(mensaje) {
  feedback.textContent = mensaje;
  feedback.className = 'form-feedback error';
}

function mostrarExito(mensaje) {
  feedback.textContent = mensaje;
  feedback.className = 'form-feedback success';
}
```

> 📌 **¿Por qué no usamos regex para el email?** La validación con `indexOf` es más fácil de entender para principiantes. Verifica: hay algo antes del `@`, hay algo entre el `@` y el último `.`, y hay algo después del último `.`.

### 2.5 Conectar al Formulario

```js
form.addEventListener('submit', function(evento) {
  evento.preventDefault();
  validarFormulario();
});
```

> 📌 **`preventDefault()`** evita que el formulario recargue la página al enviarse. Queremos manejar el envío con JavaScript.

### 2.6 Probar la Validación

Prueba estos casos:

| Caso | Resultado esperado |
|------|-------------------|
| Todos los campos vacíos, clic Enviar | "Por favor ingresa tu nombre" (rojo) |
| Solo nombre, sin email | "Por favor ingresa tu email" (rojo) |
| Email sin `@` (ej: "test") | "Por favor ingresa un email válido" (rojo) |
| Email sin `.` después del `@` | "Por favor ingresa un email válido" (rojo) |
| Todos los campos correctos | "¡Mensaje enviado correctamente!" (verde) |

✅ **Checkpoint:** El formulario valida campos vacíos y formato de email. Muestra feedback visual.

---

## Parte 3: Menú Móvil Toggle (35 min)

### 3.1 Seleccionar Elementos del Menú

Agrega en `script.js`:

```js
/* =========================
   MENÚ MÓVIL (HAMBURGUESA)
   ========================= */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
```

> 📌 **`querySelector`** selecciona el primer elemento que coincida con el selector CSS. Funciona con clases (`.clase`), IDs (`#id`), y etiquetas (`nav`).

### 3.2 Función Toggle

```js
function toggleMenu() {
  navLinks.classList.toggle('active');

  // Cambiar icono del botón
  if (navLinks.classList.contains('active')) {
    navToggle.textContent = '✕';
  } else {
    navToggle.textContent = '☰';
  }
}

navToggle.addEventListener('click', toggleMenu);
```

> 💡 **`classList.toggle('active')`** agrega la clase `active` si no la tiene, o la quita si ya la tiene. Es como un interruptor on/off.

### 3.3 Cerrar Menú al Hacer Clic en un Enlace

```js
// Cerrar menú al hacer clic en un enlace
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(function(enlace) {
  enlace.addEventListener('click', function() {
    navLinks.classList.remove('active');
    navToggle.textContent = '☰';
  });
});
```

> 📌 **`querySelectorAll`** selecciona TODOS los elementos que coincidan. **`forEach`** ejecuta una función por cada elemento encontrado.

### 3.4 Probar el Menú

1. Reduce el ancho del navegador a menos de 768px (o usa DevTools → modo dispositivo)
2. Verifica:

| Acción | Resultado esperado |
|--------|-------------------|
| Clic en ☰ | Menú se despliega, ícono cambia a ✕ |
| Clic en ✕ | Menú se cierra, ícono cambia a ☰ |
| Clic en un enlace | Menú se cierra automáticamente |
| Pantalla > 768px | Menú horizontal siempre visible, botón oculto |

✅ **Checkpoint:** El menú hamburguesa funciona en móvil. Se abre, cierra, y cambia de ícono.

---

## Parte 4: Commit y Push (5 min)

```bash
git add .
git commit -m "feat: validación de formulario y menú móvil"
git push
```

✅ **Checkpoint Final:** Tu portfolio tiene JavaScript funcional: validación de formulario y menú toggle.

---

## 📝 Resumen del Día

| Lo que hicimos | Concepto JS |
|----------------|-------------|
| Seleccionar elementos | `getElementById`, `querySelector` |
| Validar formulario | Función + condicionales |
| Feedback visual | `textContent`, `className` |
| Menú hamburguesa | `classList.toggle`, `addEventListener` |

---

## Logros Adicionales

Si terminaste antes, intenta:

- 🟢 Agregar un mensaje "Todos los campos son obligatorios" que aparezca al cargar la página
- 🟡 Resaltar el campo con error cambiando su `border-color` a rojo
- 🟡 Agregar un contador de caracteres debajo del textarea que muestre cuántos caracteres lleva
- 🔴 Hacer que el nav cambie de fondo al hacer scroll (detectar `window.scrollY`)

---

## 📝 Tarea para Day 4

Intenta completar **1-2 logros adicionales** del lab:

- 🟢 **Resaltar campo con error:** cuando la validación falla, cambia el `border-color` del campo a rojo (`#dc2626`). Pista: usa `nombreInput.style.borderColor = '#dc2626'` en la función `mostrarError`.
- 🟡 **Contador de caracteres:** agrega un `<span>` debajo del textarea y actualiza su texto con `mensajeInput.addEventListener('input', ...)` para mostrar cuántos caracteres lleva.

Ambos usan patrones que ya practicaste: `addEventListener`, modificar propiedades del DOM, y condicionales.

**Tiempo estimado:** ~30 min

**Deadline:** antes del Day 4
