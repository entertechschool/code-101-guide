# Guía del Facilitador - Clase 08: Vibe Coding — De idea a sitio publicado

> Tiempo de lectura: 10 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Vibe Coding** — Programar en lenguaje natural y dejar que la IA escriba el código. Andrej Karpathy acuñó el término en febrero de 2025.
- **Vibe Coding Responsable vs Irresponsable** — La línea entre profesional y aficionado. El profesional usa Prompt Scaffolding, evalúa el output, y entiende qué hace cada bloque del código generado.
- **Prompt Scaffolding** — Construir un prompt estructurado por bloques: Rol + Contexto + Tarea + Restricciones técnicas + Restricciones de diseño + Formato de salida.
- **Iterar con criterio** — Refinar el output con instrucciones específicas y código real (uiverse.io), no caprichos vagos ("hazlo bonito").
- **Artifact** — Panel renderizable de Claude que ejecuta el código en vivo. Cambia el flujo de iteración: ya no copias-pegas-pruebas, todo pasa en una conversación.
- **GitHub Pages** — Hosting gratuito que convierte cualquier repo en URL pública.

---

## 🔗 Analogías Útiles

**Prompt Scaffolding ↔ Cuestionario médico:** Cuando vas al doctor, no le dices "me siento mal". Te hace preguntas específicas. El doctor diagnostica con esa información estructurada. Igual con la IA: contexto estructurado → resultado preciso.

**Vibe Coding Profesional ↔ Cirujano que delega:** Un cirujano experto puede dejar que el residente haga la incisión, pero supervisa cada paso, sabe qué tendones evitar, y puede tomar el control si algo falla. El programador profesional usa la IA igual: la IA escribe, el humano valida y entiende.

**Iteración ↔ Sastre ajustando un traje:** No le dices "no me gusta", le dices "las mangas están 2 cm largas". Mismo principio con Claude: feedback específico → ajuste preciso.

**Dos IAs ↔ Arquitecto + Constructor:** Gemini es el arquitecto que organiza el plano. Claude es el constructor que ejecuta. Cada uno especializado.

**GitHub Pages ↔ Subir foto a Instagram:** Tu código en local no lo ve nadie. `git push` + activar Pages = foto subida a internet. Gratis y para siempre.

---

## 📚 Contexto Histórico

### Vibe Coding (2025): el término que define la era

Andrej Karpathy — ex-OpenAI, ex-Tesla, profesor de Stanford — escribió en X en febrero de 2025: *"There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."*

El concepto explotó en la industria. No describe una herramienta — describe un **cambio de mentalidad**: el programador deja de escribir cada línea y pasa a **dirigir** la generación de código mediante lenguaje natural.

> **Para contar en clase:** "Hace menos de un año, el término 'Vibe Coding' no existía. Hoy es el modo de trabajo de empresas top. Lo que aprenden esta clase es habilidad de **2026**, no de 2020."

### Prompt Engineering: de moda a habilidad estándar

En 2022 empresas pagaban $300,000/año a "Prompt Engineers" especializados. En 2025, esa habilidad ya no es un rol — es un **requisito básico** para todo programador. Saber estructurar un prompt es como saber escribir un buen email: nadie te paga por eso, pero si no sabes hacerlo, no consigues empleo.

### Claude y los Artifacts (2024)

Anthropic introdujo los Artifacts en 2024. Cambió el flujo: en lugar de copiar código, abrirlo en un navegador, volver al chat — todo sucede en una sola interfaz. Es lo que hace al lab posible en 90 minutos.

### GitHub Pages: democratizando el hosting (2008)

Antes de Pages, publicar un sitio costaba $50-100/año + configurar servidores + manejar DNS. Pages eliminó toda esa fricción. Hoy millones de sitios corren ahí, incluyendo Bootstrap, React, Vue.

---

## 🚨 Plan de Rescate (uso del instructor — NO público)

> ⚠️ **Esto NO va al lab del alumno.** Solo se activa caso por caso cuando un alumno se acerca y dice "no tengo el Lab 07".

**Cuándo activarlo:**
- Alumno se acerca antes o durante el setup admitiendo que no entregó Lab 07.
- NO lo ofrezcas proactivamente — esperarías que lo activaran como ruta válida y romperías el incentivo del Lab 07.

**Qué hacer (en privado, por chat directo o aparte):**

1. Pega esta plantilla rellena en su chat (con valores neutrales pero funcionales):

```
Estos son los valores predeterminados para que puedas avanzar hoy.
Personaliza tu nombre y enlaces, lo demás déjalo así.

OBJETIVO DE REDISEÑO:
"Mi MyLinks actual es básico, pero quiero que sea profesional y limpio
con paleta neutral y botones rectangulares. Mi usuario ideal es un
reclutador o colega que necesita encontrar mis redes en pocos segundos."

ESTILO: Minimalista profesional centrado.

TOKENS:
  bg-principal: #FFFFFF
  acento: #2563EB
  texto: #1F2937
  sombra: X:0 Y:4 Blur:12 rgba(0,0,0,0.1)
  Tipografía: Inter

ENLACES:
- LinkedIn: https://...
- GitHub: https://...
- Email: mailto:...
```

2. Refuerza individualmente: *"Esto es solo para hoy. La próxima cohorte trae su Lab 07 sí o sí."*

3. **No documentes públicamente esta ruta.** Si lo haces, todos la usarán y matarás el Lab 07.

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "V1 vago en vivo (el contraste pedagógico)"

**Preparación:** Claude.ai abierto en proyector con conversación nueva.

```
Facilitador: "Vamos a hacer Vibe Coding Irresponsable a propósito."
Facilitador: (Pega el prompt vago) "Crea un linktree con botones..."
Facilitador: (Espera resultado, lo muestra)
Facilitador: "¿Es esto lo que querían? ¿Aparece su nombre? ¿Sus colores?
              No. Esto es lo que pasa sin contexto."
```

> Tip: deja el resultado V1 visible mientras explicas la Parte 2. Al final, ponen V1 y V2 lado a lado y el contraste **se ve solo**.

### Dinámica 2: "Caso de Estudio 0 con TU Spec Sheet"

Tú ejecutas el lab paralelo a los alumnos con tu Spec Sheet personal (el del Caso de Estudio 0 que usaste en Clase 07). Los alumnos te ven llenar la plantilla en Gemini, generar el prompt, pegarlo en Claude, adjuntar **tus** mockups.

```
Facilitador: "Mi Spec Sheet es de un MyLinks brutalista alineado a la izquierda.
              Voy a llenarlo en vivo. Ustedes hacen lo mismo con el suyo.
              Si me atasco, sale en vivo."
```

### Dinámica 3: "Iteración con criterio en vivo"

Cuando lleguen a la Parte 3 (uiverse.io):

```
Facilitador: (Va a uiverse.io/buttons) "Voy a buscar un botón brutalista... este."
Facilitador: (Copia el CSS, vuelve a Claude)
Facilitador: "Observen mi instrucción: NO digo 'hazlo más bonito'.
              Le doy CÓDIGO REAL y le digo qué adaptar."
Facilitador: (Pega y envía)
Facilitador: (Muestra resultado adaptado a su paleta) "Esto es iterar con criterio."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Plantilla del prompt scaffolding (la del lab)

Está en el lab oficial — solo recuérdale a los alumnos pegar el contenido del `spec-sheet.txt` completo en el lugar marcado.

### Ejemplo 2: Iteraciones específicas que sí funcionan

```
❌ "El botón se ve feo"
✅ "El hover no se aplica, asegúrate de incluir el :hover en el CSS final"

❌ "Cambia los colores"
✅ "Los botones quedaron en #00FF00 del snippet original. Cámbialos
    al color acento de mi paleta que es #FF6B35"

❌ "Hazlo más responsive"
✅ "En el Frame Móvil los botones se cortan a 320px. Reduce el padding
    horizontal a 16px en mobile y mantén 24px en desktop"
```

### Ejemplo 3: Configuración de GitHub Pages

```
1. Ve a github.com/TU-USUARIO/mylinks
2. Settings (arriba derecha)
3. Menú izquierdo → Pages
4. Source: Deploy from a branch
5. Branch: main + / (root)
6. Save
7. Esperar 1-3 min, refrescar
```

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|-------|------------------|-----------|
| Alumno no tiene Lab 07 entregado | Distintos motivos | Activar Plan de Rescate **en privado** (ver arriba) |
| Claude da error o cuenta cerrada | Límite gratuito agotado | Pedirle que use otra cuenta de Google/correo |
| Gemini no devuelve el prompt scaffolded | A veces ignora la instrucción | "Pídele literal: 'Solo dame el prompt estructurado, no me hagas preguntas'" |
| El Artifact no aparece | Claude no generó código | Reenviar con instrucción clara: "Genera el código completo en un Artifact renderizable" |
| Botones de uiverse copiados tal cual | Alumno no entiende qué es "adaptar" | Mostrar lado a lado: "Mira el snippet original (verde) y mi resultado (naranja). La estructura es la misma, los colores son míos." |
| GitHub Pages devuelve 404 | Archivo no se llama `index.html` | Renombrar exactamente a `index.html` (case-sensitive) |
| Cambios no aparecen en Pages tras `git push` | Deploy tarda 1-2 min + cache | Esperar y hacer hard refresh (Ctrl+Shift+R) |
| Alumno copia código sin leer | Vibe Coding Irresponsable | Pregúntale en vivo: "¿Qué hace la línea 23?" — si no sabe, pídele que lea |

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|--------|------------|--------------|
| 0-5 | Setup completo | Todos tienen Claude + Gemini abiertos y los 3 archivos del Lab 07 a mano |
| 5-15 | V1 generado | Screenshot del resultado vago en el chat |
| 15-35 | V2 scaffolded en Claude con mockups adjuntos | Pregunta: "¿Aparece tu nombre en el Artifact?" |
| 35-50 | Iteración con uiverse aplicada | Botones tienen estilo personalizado, NO los originales de uiverse |
| 50-60 | Código en VS Code + Live Server | URL `http://127.0.0.1:5500/index.html` funcionando |
| 60-90 | (Post-clase) GitHub Pages activado | URL pública pegada en el chat de la clase |

---

## 🔗 Conexión con Módulo 3

Al cerrar el módulo, planta la semilla:

> "Su MyLinks está en internet. Cualquier persona en el mundo puede verlo. Pero... si hacen clic en algo, ¿pasa algo? ¿Pueden contar visitas? ¿Cambiar de color según la hora? Para eso necesitan **JavaScript**. Eso es el Módulo 3."

---

## 🎨 Notas Específicas de Esta Clase

### Sobre el lab calificado

Es la primera evaluación formal del módulo. Algunos alumnos estarán nerviosos:

> "La rúbrica está en el lab. No hay sorpresas. Lo evaluamos en el proceso, no solo el resultado: si su botón se ve perfecto pero copiaron sin entender, eso baja el criterio 2."

### Sobre el momento "wow" del deploy

Cuando GitHub Pages active y vean su URL pública, **no apures el momento**:

> "Ábranlo en su celular. Mándenlo a un amigo. Eso está en internet. En 4 clases pasaron de no saber qué era Git a tener un sitio publicado con su Spec Sheet detrás."

Es el cierre emocional del módulo. Vale la pena 5 minutos solo para eso.

### Sobre Vibe Coding Responsable

El callout del lab no es decorativo. **Insiste durante todo el lab**:

> "Si te pregunto qué hace la línea 23 de tu CSS y no sabes, ese es Vibe Coding Irresponsable. Hoy aprendemos a NO ser eso."
