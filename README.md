# Documentación del Proyecto: Recomendador de Smartphones

Este proyecto es un recomendador de smartphones que muestra sugerencias basadas en la gama seleccionada (baja, media, alta). Los datos de los smartphones se cargan desde un archivo JSON y se muestran en tarjetas con su nombre y foto.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura básica del sitio web.
- **CSS3**: Para el estilo visual y diseño del sitio web.
- **JavaScript**: Para la interactividad y la lógica del recomendador.
- **Fetch API**: Para cargar los datos desde un archivo JSON.
- **Markdown**: Para documentar el proyecto.


## Cómo Funciona

1. El usuario selecciona una gama de smartphones (baja, media, alta) desde el menú desplegable.
2. Al hacer clic en el botón "Recomendar", se carga un archivo `data.json` que contiene las recomendaciones de smartphones correspondientes a la gama seleccionada.
3. Los resultados se muestran como tarjetas con la imagen y el nombre de cada smartphone.
4. La barra de navegación permite acceder a diferentes secciones como "Recomendación", "Blog", "Noticias", etc.

## Estructura del Proyecto

El proyecto está compuesto por tres archivos principales:

- `index.html`: Contiene la estructura y contenido HTML de la página.
- `style.css`: Define el estilo y diseño visual de la página.
- `script.js`: Contiene la lógica y funcionalidad para la recomendación de smartphones.

## Descripción de los Archivos

### 1. `index.html`

El archivo HTML estructura la página y contiene los elementos de interacción para el usuario.

#### Explicación del Código:

- **`<h1>`**: Título principal de la página, que indica "Recomendador de Smartphones".
- **`<div class="select-container">`**: Contenedor con un menú desplegable (`<select>`) para que el usuario elija la gama de smartphone que desea (baja, media o alta).
- **`<button onclick="recomendar()">`**: Botón que ejecuta la función `recomendar()` cuando se hace clic, la cual genera las recomendaciones de smartphones.
- **`<div id="resultado">`**: Contenedor donde se mostrarán las tarjetas con las recomendaciones de smartphones.
- **`<script src="script.js"></script>`**: Enlace al archivo JavaScript que maneja la lógica de la página.

### 2. `style.css`

Este archivo contiene el estilo visual de la página, como la disposición de los elementos, el diseño de las tarjetas, colores, etc.

#### Explicación del Código:

- **`body`**: Establece la fuente global, márgenes, padding y color de fondo de la página.
- **`h1`**: Estilo para el título principal de la página, centrado y de color oscuro.
- **`.select-container`**: Contenedor para el selector y el botón, centrado usando `flexbox` y con un espacio entre los elementos.
- **`select, button`**: Estilo de los elementos `select` y `button` con márgenes, padding y bordes redondeados.
- **`button:hover`**: Efecto de cambio de color cuando el usuario pasa el mouse sobre el botón.
- **`#resultado`**: Contenedor que organiza las tarjetas con un diseño `flexbox` y permite que se acomoden en varias filas.
- **`.card`**: Estilo de las tarjetas de smartphones, con bordes redondeados, sombras y un efecto de ampliación al pasar el mouse.
- **`.card img`**: Ajusta las imágenes dentro de las tarjetas para que se adapten a su contenedor.

### 3. `script.js`

Este archivo contiene la lógica del recomendador de smartphones, que se encarga de cargar los datos desde el archivo JSON y mostrar las recomendaciones según la gama seleccionada por el usuario.

#### Explicación del Código:

- **`let datos = {};`**: Crea una variable donde se almacenarán los datos de los smartphones que se cargan desde el archivo `data.json`.
- **`fetch("data.json")`**: Realiza una solicitud HTTP para cargar los datos desde el archivo JSON. Los datos se convierten a formato JSON y se almacenan en la variable `datos`.
- **`recomendar()`**: Función que se ejecuta al hacer clic en el botón "Recomendar". Obtiene la gama seleccionada y muestra las recomendaciones correspondientes:
  - **`const gama = document.getElementById("gama").value;`**: Obtiene la gama seleccionada en el selector.
  - **`resultado.innerHTML = "";`**: Limpia el contenido anterior de las recomendaciones.
  - **`if (!datos[gama])`**: Verifica si hay datos disponibles para la gama seleccionada. Si no, muestra un mensaje indicando que no hay recomendaciones para esa gama.
  - **`datos[gama].forEach(smartphone => { ... })`**: Itera sobre los smartphones de la gama seleccionada y crea una tarjeta para cada uno. Las tarjetas contienen una imagen y el nombre del smartphone.
  - **`resultado.appendChild(card);`**: Añade las tarjetas de los smartphones al contenedor `#resultado`.

## Cómo Ejecutar el Proyecto

1. Clona o descarga el repositorio en tu computadora.
2. Asegúrate de tener los archivos `index.html`, `style.css`, `script.js`, y `data.json` en el mismo directorio.
3. Crea un servidor local con python. Se debe ejecutar en la terminal el siguiente comando: `python -m http.server`
4. Dirigite a tu navegador y escribe http://localhost:8000.

## Futuras Mejoras

- Añadir más filtros de búsqueda como precio, marca, etc.
- Mejorar la interacción con el usuario mediante la adición de animaciones.
- Añadir más cantidad de smartphones.
- Añadir la opcion de valoraciones de usuarios
- Añadir la página de blogs
- Añadir la página de noticias

