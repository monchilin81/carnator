# Carnator - Tu Asistente Ideal para Encontrar el Coche de Tus Sueños

Bienvenido a Carnator, un juego interactivo inspirado en el popular Akinator, diseñado para ayudarte a descubrir qué coche de alta gama se ajusta mejor a tus preferencias y presupuesto. A través de una serie de preguntas cuidadosamente elaboradas, Carnator te guiará hasta una recomendación personalizada, completa con una imagen y una breve descripción del vehículo.

## Descripción Detallada del Proyecto

Carnator es una aplicación web puramente frontend, construida con HTML, CSS y JavaScript. No requiere ningún backend ni base de datos, lo que la hace ligera, rápida y fácilmente desplegable en plataformas de alojamiento estático como GitHub Pages.

El juego comienza con una pregunta crucial sobre tu presupuesto: "¿Dispones de 200.000€ o más para tu coche ideal?". A partir de tu respuesta, el sistema te dirige a través de un árbol de decisiones lógico. Cada nodo del árbol representa una pregunta con opciones (generalmente "Sí", "No", y a veces otras más específicas o "A veces"). Tus elecciones determinan el camino a seguir hasta alcanzar una hoja del árbol, que es la recomendación de un coche específico.

**Características Principales:**

*   **Interfaz Minimalista:** Inspirada en Akinator, la interfaz muestra una pregunta a la vez, manteniendo al usuario enfocado.
*   **Lógica Basada en JSON:** Todas las preguntas, opciones y resultados están definidos en un archivo `decision_tree.json`. Esto facilita la edición, expansión y mantenimiento del juego sin necesidad de modificar el código JavaScript principal.
*   **Barra de Progreso:** Una barra de progreso visual y un contador de preguntas informan al usuario sobre su avance en el juego.
*   **Resultados Visuales:** Al llegar a una recomendación, se muestra una imagen conceptual del coche junto con su nombre y una breve descripción.
*   **Botón de Reinicio:** Permite al usuario volver a empezar el juego en cualquier momento.
*   **Diseño Responsivo:** La interfaz se adapta a diferentes tamaños de pantalla, asegurando una buena experiencia tanto en ordenadores de escritorio como en dispositivos móviles.
*   **Personalización de Opciones:** Aunque el flujo principal usa "Sí/No", la estructura permite opciones de respuesta personalizadas para cada pregunta.

## Proceso de Creación e Inspiración

El desarrollo de Carnator se llevó a cabo siguiendo un proceso iterativo, comenzando con la definición de los requisitos y la lógica del juego, proporcionados por el usuario. La inspiración principal fue el juego Akinator, buscando replicar su mecánica de adivinanza a través de preguntas sucesivas, pero aplicándola al mundo de los automóviles de lujo.

Los pasos clave en la creación fueron:

1.  **Análisis de Requisitos:** Comprensión de la idea del usuario, el flujo de preguntas deseado y las características técnicas (HTML, CSS, JS, sin backend, estructura JSON para decisiones).
2.  **Diseño del Árbol de Decisiones:** Se elaboró una estructura jerárquica de preguntas y coches, que luego se tradujo a un formato JSON. Este árbol fue refinado con la información detallada proporcionada por el usuario, incluyendo marcas, tipos (SUV, deportivo, berlina), transmisiones y modelos específicos.
3.  **Desarrollo de la Interfaz (HTML y CSS):** Se creó una maqueta HTML básica y se aplicaron estilos CSS para lograr una apariencia minimalista, limpia y funcional, similar a Akinator, con un enfoque en la usabilidad.
4.  **Implementación de la Lógica (JavaScript):** Se desarrolló el script principal (`script.js`) para:
    *   Cargar y parsear el `decision_tree.json`.
    *   Mostrar la pregunta actual y sus opciones.
    *   Manejar las respuestas del usuario y navegar por el árbol de decisiones.
    *   Actualizar la barra de progreso y el contador de preguntas.
    *   Mostrar el resultado final (nombre del coche, descripción e imagen).
    *   Gestionar el reinicio del juego.
5.  **Creación de Recursos Visuales:** Se generaron imágenes conceptuales para cada coche en el árbol de decisiones, buscando un estilo de dibujo simple y coherente.
6.  **Pruebas y Refinamiento:** Se realizaron pruebas exhaustivas para asegurar que todos los caminos del árbol de decisiones funcionaran correctamente, que la interfaz fuera intuitiva y que no hubiera errores en la lógica.
7.  **Empaquetado y Documentación:** Se organizaron todos los archivos para un fácil despliegue y se prepararon instrucciones para el usuario.

## Posibles Mejoras Futuras

Carnator tiene un gran potencial para crecer y mejorar. Algunas ideas para futuras versiones incluyen:

*   **Ampliación del Catálogo de Coches:**
    *   Incorporar más marcas y modelos, incluyendo aquellos en rangos de precio inferiores (ej. 60-90k€, 100-150k€) que ya están contemplados como ramas iniciales en el JSON, pero que podrían detallarse mucho más.
    *   Añadir más variedad de tipos de coches (compactos deportivos, berlinas de lujo menos extremas, etc.).
*   **Mayor Profundidad en las Preguntas:**
    *   Introducir preguntas más específicas sobre preferencias de conducción (confort vs. deportividad), características tecnológicas deseadas (sistemas de asistencia, conectividad), diseño interior/exterior, número de plazas, tipo de combustible (más allá de eléctrico/combustión), etc.
*   **Mecánica de Juego Más Intrigante:**
    *   En lugar de dar siempre el coche directamente al final, se podría implementar un sistema donde, en algunos casos, el juego ofrezca 2-3 opciones finales si las respuestas son ambiguas o si el usuario responde "A veces" a preguntas clave.
    *   Añadir un elemento de "confianza" o "probabilidad" a la respuesta final.
    *   Permitir al juego hacer una pregunta de confirmación final antes de revelar el coche, como "¿Es un coche europeo?" si aún no está seguro.
*   **Personalización Avanzada:**
    *   Permitir al usuario indicar al inicio no solo el presupuesto, sino también el tipo de coche principal que busca (SUV, deportivo, etc.) para acotar la búsqueda más rápidamente.
    *   Opción de guardar resultados o compararlos.
*   **Mejoras en la Interfaz y Experiencia de Usuario (UX):**
    *   Animaciones más fluidas para las transiciones entre preguntas.
    *   Un diseño visual más pulido o temático.
    *   Posibilidad de volver a la pregunta anterior si el usuario comete un error.
*   **Internacionalización:**
    *   Soporte para múltiples idiomas, tanto en la interfaz como en el contenido del árbol de decisiones.
*   **Sistema de Pistas:**
    *   Si el juego se vuelve muy extenso, ofrecer pistas o la posibilidad de saltar alguna pregunta si el usuario no está seguro.

## Cómo Contribuir o Modificar

Si deseas modificar o expandir Carnator:

1.  **Edita `decision_tree.json`:** La forma más sencilla de añadir coches o cambiar la lógica de preguntas es editando este archivo. Asegúrate de mantener la estructura JSON válida.
    *   Cada nodo de pregunta tiene una `"question"` y un objeto `"options"`.
    *   Cada opción dentro de `"options"` es una clave (el texto del botón) que lleva a otro nodo de pregunta o a un nodo de resultado.
    *   Un nodo de resultado final tiene una clave `"result"` con un objeto que contiene `"car_name"`, `"image_url"` (el nombre del archivo de imagen en la carpeta `images/`) y `"description"`.
2.  **Añade Imágenes:** Si añades nuevos coches, asegúrate de crear una imagen correspondiente y colocarla en la carpeta `images/`, referenciándola correctamente en el `decision_tree.json`.
3.  **Modifica el Código (Opcional):** Para cambios más profundos en la funcionalidad o la interfaz, puedes editar los archivos `index.html`, `style.css`, y `script.js`.

¡Gracias por usar y explorar Carnator!
