# SorteosFast - Ruleta de Sorteos con TikTok

¡Bienvenido a **SorteosFast**! Una aplicación web moderna y visualmente atractiva para realizar sorteos aleatorios, ya sea con tus propias entradas o con los comentarios de un video de TikTok.

---

## 🚀 Características principales

- **Ruleta animada** y responsiva, con colores vibrantes y confeti al anunciar el ganador.
- **Entradas manuales**: agrega, elimina, ordena o mezcla tus propias opciones para el sorteo.
- **Sorteo con comentarios de TikTok**: pega el enlace de un video y la app extrae automáticamente los comentarios para usarlos en la ruleta.
- **Animaciones modernas**: dado giratorio en el header, efectos visuales y diseño profesional.
- **Sonidos de redoble y ganador** para una experiencia emocionante.
- **Soporte para hasta 100 entradas** (o más) sin perder legibilidad.

---

## 🛠️ Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Rediaj04/SpinMasterpro.git
   cd SpinMasterpro
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura tu API Key de RapidAPI:**
   - Crea un archivo llamado `.env` en la raíz del proyecto.
   - Agrega la siguiente línea (reemplaza con tu propia clave):
     ```
     REACT_APP_RAPIDAPI_KEY=tu_api_key_aqui
     ```
   - Puedes obtener tu API Key gratis en [RapidAPI](https://rapidapi.com/) buscando la API "ScrapTik".

4. **Inicia la app en modo desarrollo:**
   ```bash
   npm start
   # o
   yarn start
   ```
   La app estará disponible en [http://localhost:3000](http://localhost:3000)

---

## 🎲 ¿Cómo funciona?

### 1. **Entradas manuales**
- Agrega tus propias opciones para el sorteo.
- Puedes ordenar, mezclar o limpiar la lista.
- Elimina cualquier entrada con el ícono de papelera.

### 2. **Comentarios de TikTok**
- Ve a TikTok y copia el enlace de un video público.
- Pega el enlace en la sección "Comentarios de TikTok" y haz clic en "Obtener comentarios".
- La app extraerá hasta 100 comentarios y los usará como entradas en la ruleta.

### 3. **Gira la ruleta**
- Haz clic en "COMENZAR" para girar la ruleta.
- Se reproducirá un sonido de redoble y, al finalizar, confeti y sonido de ganador.
- El ganador se muestra destacado debajo de la ruleta.

---

## 📦 Estructura del proyecto

- `src/` — Código fuente principal (componentes, estilos, lógica)
- `public/sonidos/` — Archivos de sonido para los efectos
- `.env` — Tu clave privada de RapidAPI (no la compartas)

---

## 🔑 Sobre la API de TikTok (ScrapTik)
- Usamos la API pública de [ScrapTik en RapidAPI](https://rapidapi.com/).
- Solo necesitas tu API Key y pegar el enlace del video.
- La app extrae el ID del video automáticamente.

---

## 📝 Notas y recomendaciones
- No compartas tu API Key públicamente.
- Si la API de TikTok cambia, solo tendrás que actualizar la función de extracción.
- Puedes personalizar colores, sonidos y animaciones a tu gusto.

---

## 👨‍💻 Autor y créditos
- Inspirado en appsorteos.com y mejorado para una experiencia moderna.
- Desarrollado por [Rediaj04](https://github.com/Rediaj04).

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/Rediaj04">
          <img src="https://github.com/Rediaj04.png" width="100px;" alt=""/>
          <br />
          <b>Rediaj04</b>
          <br />
          <img src="https://img.shields.io/badge/GitHub-Rediaj04-181717?logo=github" alt="GitHub"/>
        </a>
      </td>
    </tr>
  </table>
</div>

---

## 🛠️ Tecnologías usadas

<p align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" width="50"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" width="50"/>
  <img src="https://toppng.com/uploads/preview/rapid-api-logo-png-free-png-images-473107.png" alt="RapidAPI" width="80"/>
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/css/css.png" alt="CSS" width="50"/>
</p>

---

¡Disfruta sorteando con estilo! 🎉
