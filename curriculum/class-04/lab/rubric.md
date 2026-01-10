# Rúbrica - Lab Módulo 1: Mi Perfil Personal

> 📋 **Documento interno para evaluadores** - El estudiante ve la rúbrica en el lab.

## Información General

| Aspecto | Detalle |
|---------|---------|
| **Proyecto** | Mi Perfil Personal |
| **Módulo** | 1 - Fundamentos Web |
| **Clase** | 4 - Layout Moderno con Flexbox |
| **Puntaje Total** | 100 puntos |

---

## Criterios de Evaluación

### 1. Estructura HTML (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | HTML semántico completo (`header`, `main`, `section`, `footer`, `nav`). Navegación con enlaces ancla funcionando. Al menos 4 secciones de contenido personal real. Atributos `alt` descriptivos en todas las imágenes. |
| **Bueno** | 15 | HTML semántico con la mayoría de etiquetas correctas. Navegación funciona parcialmente. 3 secciones de contenido. Algunos `alt` descriptivos. |
| **Satisfactorio** | 10 | Estructura HTML básica. Algunas etiquetas semánticas. 2 secciones mínimas. Navegación presente pero puede no funcionar. |
| **Bajo** | 5 | HTML sin estructura semántica. Menos de 2 secciones. Sin navegación o completamente rota. |

**Aspectos evaluados:**
- Uso de `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Navegación interna con `#id` funcionando
- Cantidad y calidad del contenido
- Accesibilidad básica (atributos `alt`)

---

### 2. Estilos CSS (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | CSS externo bien organizado. Paleta de colores coherente (4+ colores). Google Fonts implementado. Box Model aplicado correctamente (padding, margin consistentes). Código comentado. |
| **Bueno** | 15 | CSS externo vinculado. Paleta de colores coherente (3 colores). Tipografía personalizada. Box Model aplicado en la mayoría de elementos. |
| **Satisfactorio** | 10 | CSS externo presente. Colores básicos aplicados. Tipografía puede ser por defecto. Espaciado inconsistente. |
| **Bajo** | 5 | CSS mínimo o inline. Sin paleta de colores. Sin tipografía personalizada. Espaciado deficiente. |

**Aspectos evaluados:**
- Organización del archivo CSS
- Coherencia visual (paleta de colores)
- Tipografía (Google Fonts preferido)
- Uso correcto del Box Model

---

### 3. Layout con Flexbox (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Flexbox aplicado en header (nombre + nav horizontal). Cards de contenido con Flexbox y `gap`. Estados hover con transiciones en navegación Y cards. Layout visualmente equilibrado. |
| **Bueno** | 15 | Flexbox en header funcional. Al menos un área con cards. Hover states en navegación o cards. Layout generalmente equilibrado. |
| **Satisfactorio** | 10 | Flexbox intentado en al menos una sección. Puede tener problemas de alineación. Hover básico (sin transiciones). |
| **Bajo** | 5 | Sin Flexbox o aplicado incorrectamente. Todo en layout vertical. Sin hover states. |

**Aspectos evaluados:**
- Header horizontal con `display: flex`
- Cards o contenido en layout horizontal
- Uso de `justify-content`, `align-items`, `gap`
- Estados hover con `transition`

---

### 4. Calidad General (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Wireframe documentado (foto/link). Diseño visualmente coherente y atractivo. Contenido personal real y significativo. Código limpio con nombres de clases descriptivos. Sin errores en consola. |
| **Bueno** | 15 | Wireframe presente. Diseño coherente. Contenido personal real. Código organizado. Errores menores en consola. |
| **Satisfactorio** | 10 | Wireframe básico o ausente. Diseño funcional pero inconsistente. Contenido parcialmente personalizado. Código desorganizado. |
| **Bajo** | 5 | Sin wireframe. Diseño incoherente. Contenido genérico/placeholder. Código difícil de leer. Múltiples errores. |

**Aspectos evaluados:**
- Documentación (wireframe)
- Coherencia visual general
- Personalización del contenido
- Calidad del código

---

### 5. Desafío Avanzado (20 puntos)

| Nivel | Puntos | Descripción |
|-------|--------|-------------|
| **Excelente** | 20 | Footer profesional con Flexbox de 3 columnas. Hover avanzado en links del footer (efecto de desplazamiento). Coherencia visual completa entre footer y resto del sitio. |
| **Bueno** | 15 | Footer presente con Flexbox funcional. Hover básico en links. Footer visualmente integrado con el sitio. |
| **Satisfactorio** | 10 | Footer simple, puede no usar Flexbox o estar incompleto. Sin hover en links. Diseño básico. |
| **Bajo** | 5 | Sin footer o footer sin estilo. No demuestra aplicación de conceptos avanzados. |

**Aspectos evaluados:**
- Footer con layout Flexbox de múltiples columnas
- Efecto hover avanzado (más allá del cambio de color)
- Integración visual con el resto del proyecto
- Aplicación creativa de conceptos del módulo

---

## Escala de Calificación

| Rango | Nota | Descripción |
|-------|------|-------------|
| 90-100 | A | Excelente - Dominio completo de los conceptos |
| 80-89 | B | Bueno - Comprensión sólida con áreas menores a mejorar |
| 70-79 | C | Satisfactorio - Cumple requisitos mínimos |
| < 70 | F | Necesita mejora - No cumple requisitos básicos |

---

## Checklist de Entrega

### Archivos Requeridos
- [ ] `index.html` - Documento HTML con estructura semántica
- [ ] `styles.css` - Estilos CSS externos
- [ ] Imagen de perfil (cualquier formato de imagen)
- [ ] Screenshot del perfil terminado
- [ ] Código fuente (link a GitHub o archivo .zip)

### Documentación
- [ ] Wireframe (foto de boceto físico o link a Excalidraw)
- [ ] Paleta de colores documentada (en comentarios CSS o aparte)

### Verificación Técnica
- [ ] Navegación con enlaces ancla funciona
- [ ] Google Fonts carga correctamente
- [ ] No hay errores en la consola del navegador
- [ ] Layout Flexbox funciona correctamente

---

## Notas para el Evaluador

1. **Verificar autoría:** El nombre del estudiante debe aparecer visible en el header y en el screenshot.

2. **Contenido personal:** Evaluar que el contenido sea real y personal, no placeholder o copiado.

3. **Funcionamiento:** Probar la navegación interna y los hover states manualmente.

4. **Código:** Revisar que el CSS esté en archivo externo (no inline) y que use nombres de clases descriptivos.

5. **Wireframe:** Puede ser un boceto a mano, foto del boceto, o link a Excalidraw. Lo importante es que exista documentación del diseño previo.

---

## Ejemplo de Retroalimentación

### Retroalimentación Positiva
> "Excelente uso de HTML semántico y Flexbox. Tu paleta de colores es coherente y la tipografía elegida complementa bien el diseño. Los hover states con transiciones dan un toque profesional."

### Áreas de Mejora
> "El contenido es bueno pero algunas imágenes no tienen atributo `alt` descriptivo. Considera agregar más secciones para mostrar tus intereses. El footer podría beneficiarse de Flexbox para organizar mejor los elementos."
