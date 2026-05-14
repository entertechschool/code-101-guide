# Preview — Mi Mapa de Sueños (Ejemplo de Sofía)

> 👀 **Ejemplo funcional** de cómo debería verse y comportarse tu sitio al terminar el lab.

---

## ¿Qué es esto?

Una versión **terminada y personalizada** del proyecto del [Lab Nivelación M3](../) usando el ejemplo de una alumna ficticia llamada **Sofía**. Incluye todas las partes del lab —incluido el **reto opcional del contador**— para que veas a dónde apuntas.

> 🎯 **Pedagógicamente honesto:** el JavaScript usa **solo conceptos enseñados en M3** del curso regular (`getElementById`, `addEventListener`, `style.xxx`, `textContent`, funciones con parámetros, `if/else`, variables). Sin `querySelector`, `classList`, `forEach` ni iteración.

---

## Ver en vivo

👉 **[Abrir el preview](./index.html)** — funciona en cualquier navegador con doble click sobre `index.html` o con Live Server en VS Code.

> Una vez publicado en GitHub Pages, este preview también se ve en: `https://entertechschool.github.io/code-101-guide/curriculum/nivelacion/m3/lab/preview/`

---

## Qué demuestra el preview

| Característica | Implementación |
|----------------|----------------|
| HTML semántico | `header`, `main`, `section`, `article`, `footer` |
| Google Fonts | Poppins importada en el `<head>` |
| Paleta personalizada | Cream `#fef7ed` + Terracotta `#c2410c` + Marrón `#292524` |
| Flexbox vertical | `.lista-suenos` con `flex-direction: column` y `gap: 16px` |
| Cards con hover | Elevación con `transform: translateY(-3px)` |
| Responsive | Media query a `max-width: 600px` |
| **JavaScript interactivo** | Función helper `alternarLogrado` + 6 bloques `getElementById` + `addEventListener` con toggle via `let estado` |
| **Reto opcional** | Contador `Sueños logrados: X` actualizado con `textContent` |

---

## ⚠️ No copies este código tal cual

El preview es **una referencia visual**. Tu lab debe tener:

- **Tu nombre real** (no "Sofía").
- **Tus sueños propios** (no los de Sofía).
- **Tu paleta y fuente** elegidas en la Parte 1.

La rúbrica evalúa personalización (Criterio 4) — un proyecto idéntico al preview obtendría calificación baja.

---

## Archivos del preview

- [index.html](./index.html) — estructura HTML completa con 8 sueños.
- [styles.css](./styles.css) — CSS terminado con paleta cálida + hover + responsive.
- [script.js](./script.js) — JS con toggle + contador (reto opcional incluido).

---

> 🔙 **[Volver al laboratorio](../)**
