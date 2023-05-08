
## Assignment link
## https://github.com/Witocorp-Organization/test-fullstack#readme

## BACKEND

1. [x] Montar un servidor en Node.js para realizar llamadas a la siguiente API: https://test-fullstack.myshopify.com/admin/api/2023-04/products.json. En los headers, configurar el siguiente Token:

X-Shopify-Access-Token: TOKEN
Content-Type: application/json
Con está llamada, recibiréis un array object con un listado de productos. Dichos productos tiene que recibirlos el front.

## FRONTEND

1. [x] Collection Page - Realizar una llamada al servidor creado en Node.js para obtener el listado de productos
2. [x] Collection Page - Una vez obtenidos, crear una grid de productos con los siguientes componenetes dinámicos:
-Card: El componente card tiene que ser capaz de pintar una Card con:
-La imagen principal del producto: {key: image}. Accediendo a está key, tendréis todo lo necesario para mostrar la imagen.
-Título del producto. {key: title}.
-Precio: {key: variants}. Obtener el precio más bajo para mostrarlo en la card.
-Enlace: El enlace se tendrá que configurar una ruta personalizada para poder pintar la product page.
3. [x] Product Page - obtener los datos del producto - Carousel de imágenes: Recorrer todas las imágenes del producto y crear un carrousel.
4. [x] Product Page - obtener los datos del producto - Mostrar toda la información del producto: (Os dejamos las key que necesitáis):
-title.
-body_html.
-Precio: Primero posición de la array variants.price.
-Selector dinámico para las variantes: Pintar las opciones de la variante: {key: options} y pintar el {name y values}. Cada vez que se seleccione una opción, cambiar el precio dinámicamente. El precio lo encontramos en la array de variants, deberéis filtrar por: {option1} y obtener su key: {price}.

## EXTRA

1. [x] El producto con el siguiente ID: 8242953519382 tiene diferentes imágenes por cada variante que tiene. Ampliar la lógica del selector para que una vez que se seleccione una variante, se cambie el carousel con su imagen.

Pista: Cada item del array object de variants tiene un image_id, el cual hace referencia al id de cada item del array object de images.

