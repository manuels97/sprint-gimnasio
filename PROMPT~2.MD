# PROMPT — Maqueta Sprint Gym

Pegá todo esto en Claude Code. Está listo para generar el sitio completo.

---

## OBJETIVO

Construir una maqueta de landing page para Sprint Gym. Es una demo para mostrarle al cliente y conseguir su aprobación antes de pasar a desarrollo final. Tiene que verse profesional, moderna y funcional.

## STACK

- **HTML5** (un solo archivo `index.html`)
- **CSS** (en archivo separado `styles.css`)
- **JavaScript** (solo si es necesario, en `script.js`)
- Sin frameworks ni librerías externas pesadas
- Fonts desde Google Fonts vía `<link>`
- Íconos: Lucide Icons via CDN (`https://unpkg.com/lucide@latest`)

## IDENTIDAD DEL CLIENTE

**Marca:** Sprint Gym
**Descripción en una línea:** El mejor ambiente. Entrenamiento serio.
**Cliente objetivo:** Hombres y mujeres del barrio que buscan entrenar en serio, desde principiantes hasta deportistas, en un ambiente cercano y profesional.
**Diferencial:** Equipo de profesores que entrena a deportistas de alto rendimiento, pero atiende a todos los socios con la misma cercanía y atención personalizada. No es un gimnasio "de pose", es real.

## VISUALES

**Modo:** Dark

**Colores:**
- Fondo principal: `#0a0a0a` (negro suave)
- Cards / superficies elevadas: `#161616`
- Acento principal (rojo del logo): `#dc2626`
- Texto principal: `#ffffff` (blanco puro)
- Texto secundario: `rgba(255,255,255,0.6)`
- Texto terciario: `rgba(255,255,255,0.4)`
- Bordes: `rgba(255,255,255,0.1)`

**Tipografías (Google Fonts):**
- Titulares: **Bebas Neue** (todo en mayúsculas)
- Cuerpo: **Inter** (pesos: 300, 400, 500, 600)

**Estilo general:**
- Moderno, minimalista, premium
- Mucho espacio en blanco (en negro en este caso)
- Tipografía grande y fuerte en titulares
- Animaciones sutiles al hacer scroll (fade up + slide)
- Botones redondeados (rounded-full)
- Mobile-first

## SECCIONES A INCLUIR (en este orden)

### 1. NAVBAR (fixed top)

- Logo "SPRINT GYM" en Bebas Neue
- Links: Inicio · Servicios · Horarios · Galería · Contacto
- Botón CTA: "Probá una clase" (rojo, esquina derecha)
- En mobile: hamburguesa que abre menú lateral

### 2. HERO

- Fondo: gradiente sutil negro a un toque más oscuro + un blob rojo decorativo difuminado en el fondo
- Badge arriba: "ENTRENAMIENTO + AMBIENTE" (chip pequeño)
- Título grande (Bebas Neue, clamp 4rem a 8rem):
  ```
  EL MEJOR AMBIENTE.
  ENTRENAMIENTO SERIO.
  ```
- Subtítulo (Inter light): "Un equipo profesional que entrena deportistas de alto rendimiento, y te atiende como a uno más. Desde el primer día."
- 2 botones CTA:
  - Primario (rojo): "Conocé el gym"
  - Secundario (outline blanco): "Hablar por WhatsApp"
- Stats abajo (3 columnas):
  - "+10" años en el barrio
  - "200+" socios activos
  - "5★" en Google

### 3. ACTIVIDADES (grid de 5 cards)

Título de sección: "ENTRENÁ COMO QUIERAS"
Subtítulo: "Todas las disciplinas en un mismo lugar."

Cards (cada una con ícono Lucide + título + descripción corta):
1. **Musculación** — `lucide:dumbbell` — Equipamiento profesional y rutinas armadas a tu nivel.
2. **Pilates reformer** — `lucide:user-check` — 
3. **Alto rendimiento** — `lucide:trophy` — Preparación física para deportistas competitivos.
4. **Aerobico** — `lucide:trophy` — 
5. **Asesoramiento nutricional** — `lucide:apple` — Plan personalizado para acompañar tu entrenamiento.

### 4. Nosotros

Título: "MÁS QUE UN GIMNASIO."
Texto: "En Sprint Gym entrena gente de todos los niveles, con objetivos muy distintos. Lo que nos hace diferentes es la atención: un equipo de profesores que se forma constantemente, que conoce a cada socio por su nombre, y que se toma en serio tanto al que recién empieza como al que entrena para competir. Acá no hay clientes de paso. Hay gente que entrena, y comunidad que vuelve."

Media a la derecha: placeholder con la palabra "SPRINT" en gigante en Bebas Neue + un poco de overlay rojo.

CTA: "Conocé al equipo"

### 5. HORARIOS

Título: "HORARIOS DE ATENCIÓN"
Subtítulo: "Estamos abiertos de lunes a sabados."

Card centrada con:
- Lunes a Viernes: **6:30 — 23:30**
- Martes a Sabados: **6:30 — 22:30**


### 6. GALERÍA (grid de 6 imágenes placeholder)

Título: "EL GIMNASIO POR DENTRO"
Subtítulo: "Equipamiento profesional, espacios amplios, ambiente real."

Grid responsive (1 col mobile, 2 cols tablet, 3 cols desktop). Cada imagen es un placeholder de color sólido `#1a1a1a` con texto centrado tipo "FOTO 1", "FOTO 2", etc. en gris claro. Aspecto cuadrado.

### 7. TESTIMONIOS (3 cards)

Título: "LO QUE DICEN LOS SOCIOS"

1. *"Entrené en muchos lados y en ninguno me atendieron como acá. Los profes te conocen, te miran entrenar, te corrigen. Hace diferencia."*
   — **Martín G.** — Socio hace 4 años

2. *"Vine después de una lesión y me armaron una rutina específica. En 6 meses estaba mejor que antes. Volvieron a hacerme entrenar en serio."*
   — **Carolina M.** — Socia hace 2 años

3. *"Lo que más me gusta es el ambiente. Entrenás al lado de gente común y de deportistas, y a todos los tratan igual. Es raro encontrar eso."*
   — **Federico L.** — Socio hace 6 años

### 8. UBICACIÓN

Título: "VENINOS A CONOCER"
Subtítulo: "Estamos en el barrio. A pasos del centro."

Layout 2 columnas:
- Izquierda: dirección, horario, teléfono, botón "Cómo llegar" (link a Google Maps).
- Derecha: iframe de Google Maps (placeholder con bordes redondeados). Usar este embed genérico:
  ```html
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0000000000005!2d-58.4!3d-34.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM2JzAwLjAiUyA1OMKwMjQnMDAuMCJX!5e0!3m2!1ses-419!2sar!4v1234567890" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen></iframe>
  ```

Dirección: **Av. Cabildo 2345, Belgrano, CABA**
Teléfono: **11 2409-4456**
Botón: "Cómo llegar" (link a `https://maps.google.com`)


### 10. CTA FINAL + FOOTER

Sección CTA:
- Eyebrow: "EMPEZÁ HOY"
- Título: "TU PRIMERA CLASE ES GRATIS."
- Subtítulo: "Veníte a probar. No hace falta más que ganas."
- Botones:
  - Primario (rojo): "Probar una clase"
  - Secundario (outline): "Hablar por WhatsApp"

Footer (separado, con border-top sutil):
- Izquierda: "© 2026 Sprint Gym. Todos los derechos reservados."
- Centro: links — Inicio · Servicios · Contacto
- Derecha: íconos Instagram, Facebook, WhatsApp

### 11. BOTÓN WHATSAPP FLOTANTE

- Posición: `fixed bottom-6 right-6`
- Círculo verde (`#25D366`) con ícono WhatsApp
- Link directo: `https://wa.me/5491124094456?text=Hola%2C%20quiero%20más%20info%20sobre%20Sprint%20Gym`
- Animación sutil de "respirando" (pulse) cada 3 segundos

## REGLAS TÉCNICAS

1. **HTML semántico**: usar `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`.
2. **CSS variables** para todos los colores y fuentes (`:root { --color-bg: #0a0a0a; }`).
3. **Mobile-first**: arrancar con estilos para mobile, después media queries para desktop (`@media (min-width: 768px)`).
4. **Animaciones**: usar Intersection Observer en JS para detectar cuándo aparece cada sección y aplicar clase `.is-visible` que activa `fade-up`. Suaves, no exageradas.
5. **Performance**: imágenes lazy load (`loading="lazy"`), no librerías pesadas innecesarias.
6. **Accesibilidad**: alt text en imágenes (aunque sean placeholders), aria-label en botones de íconos, contraste suficiente.
7. **SEO básico**: meta title, meta description, og:image (placeholder), favicon SVG simple.

## SALIDA ESPERADA

3 archivos:
- `index.html` — toda la estructura
- `styles.css` — todos los estilos
- `script.js` — solo si es necesario (Intersection Observer, FAQ accordion, mobile menu, scroll suave)

Todo listo para abrir en navegador con doble click. No requiere build ni servidor.

---

**Importante:**
- Usá los textos EXACTOS de este briefing.
- No agregues secciones que no estén pedidas.
- No uses placeholders genéricos de "Lorem ipsum".
- Las animaciones tienen que ser sutiles, no distraer.
- La maqueta tiene que sentirse profesional y premium, no genérica.
