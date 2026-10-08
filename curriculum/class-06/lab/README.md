# Lab 06: Diseño Web Responsive + DevTools

> 🚀 **Proyecto del Módulo:** MyLinks - Tu Hub Personal en la Web
>
> 📌 **Este lab:** Convertir una página escrita solo para escritorio (**TUESTE**, café de especialidad) en un sitio responsive y entregarla en GitHub.

## 🎯 Objetivo

Al terminar, tu repositorio `tueste-cafe` tiene una landing que se ve bien a 375px y a 1280px, sin scroll horizontal, hecha con unidades relativas y una media query.

📦 **Entregable:** URL del repositorio `tueste-cafe` + dos screenshots de DevTools (375px y 1024px). Detalle al final.

> 📖 Las definiciones (responsive, viewport, `rem`, media query, breakpoint) y la tabla de conversión rem → px están en el [README de la clase](../). Este lab solo tiene tareas.

---

## ⚙️ Setup Inicial

| ✓ | Requisito | Verificación |
|---|-----------|--------------|
| ☐ | Cuenta de GitHub con sesión iniciada | Ves tu avatar en github.com |
| ☐ | Git Bash y VS Code con Live Server | Los usaste en el Lab 05 |
| ☐ | Google Chrome | Puedes abrir Chrome y presionar F12 |
| ☐ | Carpeta `Documents/bootcamp` | `cd ~/Documents/bootcamp` funciona en Git Bash |

---

## Parte 1: Prepara el proyecto (10 min)

### 1.1 Crea el repositorio y clónalo

1. En GitHub: **New** → nombre `tueste-cafe` → Public → marca **Add a README file** → **Create repository**
2. Botón **Code** → HTTPS → copia la URL
3. En Git Bash:

```bash
cd ~/Documents/bootcamp
git clone https://github.com/TU-USUARIO/tueste-cafe.git
```

### 1.2 Descarga la página

1. Descarga [tueste-cafe.zip](tueste-cafe.zip)
2. Descomprímelo y mueve `index.html` y `style.css` dentro de `Documents/bootcamp/tueste-cafe` (la carpeta que creó el clone, junto al `README.md`)
3. En VS Code: File → Open Folder → `Documents/bootcamp/tueste-cafe`
4. Clic derecho en `index.html` → **Open with Live Server**

✅ **Checkpoint 1:** Live Server muestra TUESTE y en Git Bash `git status` lista `index.html` y `style.css` como archivos nuevos.

---

## Parte 2: DevTools sobre TUESTE (15 min)

Vas a ver la página en varios tamaños de pantalla sin salir de Chrome.

### 2.1 Inspecciona

1. Presiona `F12` (o `Ctrl+Shift+I`)
2. Clic en el ícono de la flecha (esquina superior izquierda del panel) o `Ctrl+Shift+C`
3. Clic sobre el título "Café de especialidad, tostado en Lima"

Deberías ver: a la izquierda el `<h1>` marcado; a la derecha, en **Styles**, la regla `h1` con `font-size: 72px`.

### 2.2 Edita en vivo

1. En Styles, clic sobre `72px` y escribe `40px` → Enter
2. Presiona `F5`

Deberías ver: el título se achica y, al recargar, vuelve a 72px. Lo que editas en DevTools no se guarda en el archivo.

### 2.3 Modo dispositivo

1. Clic en el ícono del teléfono y la tablet (o `Ctrl+Shift+M`)
2. En el desplegable elige **iPhone SE**
3. Cambia a **Responsive** y arrastra el borde derecho de 375 a 1280

Deberías ver, a 375px: scroll horizontal, imagen cortada, productos apretados en una fila, cajas de Horario y Ubicación con el texto desbordado.

✅ **Checkpoint 2:** Screenshot de DevTools en iPhone SE con la página rota y la regla `h1` visible en Styles.

---

## Parte 3: Reto — TUESTE responsive (60 min)

No hay pasos guiados: el diagnóstico es parte del reto. Todo lo que necesitas lo viste en clase.

### 3.1 Diagnóstico

Con el modo dispositivo a 375px, marca en `style.css` cada línea que rompe el diseño. Son más de diez. Qué buscar:

| Síntoma a 375px | Causa | Qué usar |
|---|---|---|
| Scroll horizontal | `width` en px más grande que la pantalla | `width: 100%` + `max-width` |
| Imagen deformada o cortada | `width` y `height` fijos en la imagen | `%` + `max-width` + `height: auto` |
| Texto que se sale de una caja | `height` fijo en px | quitar el alto o `min-height` |
| Títulos gigantes | `font-size` en px | `rem` |
| Cosas en fila que no caben | `flex-direction: row` en la base | base en `column`, fila en la media query |
| Menú cortado | enlaces en fila sin permiso de bajar | `flex-wrap: wrap` |

### 3.2 Criterios de aceptación (la Definición de Terminado)

- [ ] A 375px no hay scroll horizontal en ninguna sección
- [ ] Ningún contenedor usa `width` en px: todos usan `%` con `max-width`
- [ ] La imagen del hero se adapta y conserva su proporción
- [ ] Todo el texto está en `rem`; ningún `font-size` ni `line-height` en px
- [ ] Las cajas de Horario y Ubicación muestran todo su texto a 375px
- [ ] La base del CSS es para celular (columna) y una media query `@media (min-width: 768px)` devuelve la fila
- [ ] Desde 768px los productos se ven en dos filas de dos
- [ ] El hover del botón solo existe dentro de la media query
- [ ] A 1280px la página se ve igual o mejor que la original

### 3.3 Commit y push

```bash
git status
git add .
git commit -m "feat: convertir TUESTE en responsive mobile-first"
git push
```

✅ **Checkpoint 3:** Tu repositorio `tueste-cafe` en GitHub muestra el commit y la página pasa los nueve criterios en DevTools.

---

## Parte 4 (opcional): MyLinks responsive (20 min)

Tu plantilla ya trae `width: 90%` + `max-width: 400px` en `.card` y `min-height: 100vh` en el body. Falta:

1. Texto a `rem` en `.name`, `.bio` y `.link`
2. Una media query de 768px al final de `styles.css` que agrande `.card` y `.name`

```bash
git add .
git commit -m "feat: agregar diseño responsive con media queries"
git push
```

---

## Logros Adicionales (Opcional)

### 🟢 Cuatro productos por fila

Segunda media query en 1024px para que los cuatro productos queden en una sola fila.

```css
@media (min-width: 1024px) {
    /* Tu código aquí */
}
```

### 🟡 Orientación del dispositivo

Investiga `@media (orientation: landscape)` y cambia algo del hero en horizontal.

### 🔴 Tema oscuro automático

Investiga `@media (prefers-color-scheme: dark)` y dale a TUESTE una versión oscura.

---

## 📝 Entrega

📦 **Entregable (en Blackboard):**

1. **URL de tu repositorio `tueste-cafe`** con el commit responsive visible
2. **Dos screenshots** de TUESTE en DevTools:
   - Vista móvil (375px), con la sección de productos visible
   - Vista escritorio (1024px), con el hero visible

**Verificación rápida antes de entregar:** los nueve criterios de la Parte 3.2.

Opcional: URL de tu repositorio `mylinks` con el commit de la Parte 4.
