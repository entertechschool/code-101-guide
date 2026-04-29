<!-- .slide: data-background="#0A192F" -->
# Clase 07: Wireframing y Pensamiento Creativo
## Diseña antes de codificar

---

## 🔗 TRANSICIÓN: Responsive → Diseño con Intención

### Clase anterior:
- Tu MyLinks ya es **responsive** (móvil + desktop)
- Usaste **DevTools** y media queries
- Trabajaste con unidades relativas

### Hoy:
- **No vas a tocar código.** Vas a planificar.
- Aprenderás **Figma**, la herramienta estándar de la industria
- Producirás los **3 entregables** que alimentan al Lab 08 (calificado)

> "Los arquitectos no construyen casas sin planos. Los desarrolladores no deberían codificar sin wireframes."

---

## 🧠 QUIZ PRE-LAB

### Pregunta:
¿Por qué los diseñadores profesionales empiezan con cajas grises antes de aplicar colores y fuentes?

*Toma 2-3 respuestas antes de continuar*

---

## 🎯 COMPROBACIÓN

### Pregunta:
¿Cuál es la diferencia principal entre un wireframe low-fi y uno high-fi?

A. Low-fi usa Figma, high-fi usa papel
B. Low-fi es para móvil, high-fi es para desktop
C. Low-fi son cajas grises sin estilo, high-fi tiene colores y tipografía definida
D. Low-fi es más difícil de hacer que high-fi

---

## 🎯 COMPROBACIÓN - Respuesta

**Respuesta:** C

- **Low-fi** = Cajas grises, solo estructura, sin colores
- **High-fi** = Diseño detallado con colores, tipografía, sombras

> Hoy harás los **dos en el mismo archivo Figma** — las mismas cajas grises evolucionan a high-fi.

---

## 💡 Las 3 zonas de Figma

| Panel | Equivalente en código |
|-------|------------------------|
| **Capas (izquierda)** | DOM Tree de Chrome |
| **Lienzo (centro)** | Tu navegador con Live Server |
| **Propiedades (derecha)** | DevTools → Styles |

### 5 teclas que dominarás hoy:

- `V` Mover · `F` Frame · `R` Rectángulo · `O` Círculo · `T` Texto

> Si dominas divs y flexbox, ya dominas Figma.

---

## ✅ CHECKPOINT Parte 1: Análisis e Inspiración

### Verificar:
- 2 referencias de Carrd analizadas
- 4 preguntas respondidas en bloc de notas
- **Objetivo de Rediseño** escrito y compartido en chat

**Frase plantilla:**
> "Mi MyLinks actual es ___, pero quiero que sea ___ usando ___. Mi usuario ideal es ___ que necesita ___."

---

## ✅ CHECKPOINT Parte 2 + 3: Low-Fi en Figma

### Verificar en tu Frame `Móvil`:
- Cajas grises del kit (foto, titulo, bio, boton) arrastradas
- Layout decidido (centrado, asimétrico, etc.)
- Cero colores, cero textos reales

**Validación con 2 preguntas:**
1. ¿Lo más grande/arriba corresponde a lo más importante?
2. ¿Una persona que nunca te conoció entendería en 3 segundos?

---

## ✅ CHECKPOINT Parte 4: High-Fi (Móvil + Escritorio)

### Verificar:
- Tokens inyectados en Color Styles (`bg-principal`, `acento`, `texto`)
- Effect Style `sombra` ajustado a tu gusto
- Cajas grises reemplazadas por foto real, nombre, bio, botones high-fi
- Frame `Escritorio` adaptado del móvil

> **El Botón Maestro con Auto Layout** se adapta solo al texto. Esa es la magia del `display: flex` de Figma.

---

## 💡 REFLEXIÓN: Tu Frankenstein de diseño

### Tomar prestado, no robar:

> "Voy a tomar **\[X\]** de la referencia 1 y combinarla con **\[Y\]** de la referencia 2, porque mi usuario necesita **\[razón\]**."

### Decisiones por intención, no por gusto:

- ¿Por qué centrado? → Mi usuario escanea verticalmente
- ¿Por qué sombra dura? → Quiero personalidad fuerte
- ¿Por qué solo 4 botones? → Reclutador no lee 20 enlaces

---

## 🔗 TRANSICIÓN: Preview Clase 08 (Lab Calificado)

### Hoy lograste:
- Spec Sheet con tu objetivo, tokens y enlaces
- Mockup móvil exportado (PNG)
- Mockup escritorio exportado (PNG)

### Próxima clase:
- Esos 3 archivos se convierten en **input directo** del prompt que le darás a Claude
- La IA leerá tus mockups y extraerá colores y proporciones
- Tu sitio MyLinks quedará publicado con URL pública

---

## 📝 Entrega

### 3 archivos en una carpeta:

1. `spec-sheet.txt` — Tu hoja de especificación (descargable desde el lab)
2. `mockup-mobile.png` — Tu Frame `Móvil` exportado de Figma (escala 2x)
3. `mockup-desktop.png` — Tu Frame `Escritorio` exportado de Figma (escala 2x)

### Próxima clase: Vibe Coding — De idea a sitio publicado

> **Trae tus 3 entregables sí o sí.** Sin ellos no puedes ejecutar el lab calificado.

---

## ❓ Preguntas de Cierre

1. ¿Por qué arrancamos con cajas grises antes de pintar de colores?

2. ¿Qué es un Token de diseño y por qué se parece a una variable CSS?

3. ¿Cómo justificarías a un cliente tu decisión de layout asimétrico vs centrado?
