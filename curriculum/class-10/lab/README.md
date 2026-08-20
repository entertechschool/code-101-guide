# Laboratorio 10: Decisiones y Lógica Condicional

En este laboratorio, vas a mejorar el programa interactivo de la clase anterior. Esta vez, le enseñaremos al programa a tomar decisiones con estructuras condicionales como `if`, `else` y `else if`.  
Este paso es clave para que tu aplicación comience a comportarse de manera más “inteligente” y te prepara para el próximo reto: agregar bucles y lógica de juego en **"Adivina el número"**.

## 🎯 Objetivos de Aprendizaje

- Escribir estructuras condicionales que controlan el flujo de un programa.
- Usar operadores relacionales y lógicos para evaluar condiciones.
- Mostrar mensajes distintos según las decisiones del programa.
- Fortalecer el vínculo entre lógica cotidiana y lógica computacional.

## 🔑 Conceptos Clave

- **if / else**: ejecuta una acción si se cumple una condición, o una alternativa si no.
- **else if**: permite múltiples condiciones.
- **Operadores relacionales**: `>`, `<`, `>=`, `<=`, `===`, `!==`
- **Operadores lógicos**: `&&` (y), `||` (o), `!` (no)
- **Control de flujo**: secuencia de decisiones que sigue el programa.


## 🔧 Setup inicial

Si ya tienes tu repositorio `guess-number-js`, continúa ahí. Si no:

- Crea uno nuevo o reutiliza el anterior.
- Asegúrate de tener `index.html` y `script.js` conectados correctamente.

---

## 💻 Actividades paso a paso

### Paso 1: Validar si puede votar

Reutiliza el código de la clase 09. Justo después de pedir la edad:

```js
let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}
````

### Paso 2: Recomendación según temperatura

Agrega una nueva sección que evalúe la temperatura y sugiera qué ropa usar.

```js
let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}
```

---

## 🏆 Retos

### Reto 1: Contraseña segura

Pide al usuario que cree una contraseña y verifica si tiene **al menos 6 caracteres**.

```js
let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}
```

### Reto 2: Clasificar la edad (más de dos condiciones)

Agrega lógica para mostrar diferentes mensajes según rangos de edad:

* Menores de 13
* Entre 13 y 17
* Mayores de 18

```js
if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}
```

### Reto 3: Combinar condiciones

Muestra un mensaje especial si la edad es mayor de 18 **y** la temperatura es menor de 15.

```js
if (edad > 18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
}
```

---

## 📝 Instrucciones de Entrega

1. Sube tus cambios al repositorio con un commit:

```
condicionales js - clase 10
```

2. Si desplegaste el proyecto con GitHub Pages, actualiza el sitio.
3. Responde esta actividad en Blackboard incluyendo:

   * Link al repositorio.
   * Link al sitio desplegado.
