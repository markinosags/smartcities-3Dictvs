# smartcities-3Dictvs
Repositorio del proyecto final del curso SmartCities

En la rama estilos se encuentra el proyecto en el estado actual.

En el último commit he tratado de que la vista detalles.html use el controlador incio.js para evitar el tener que pasar el $scope o el objeto en forma de parámetros de inicio.js a detalles.js

He tratado de implementar la funcionalidad de verDetalles en inicio.js. La intención es pasar en la llamada a la función el parámetro $index, que contiene el indice de la actual iteración del ng-repeat.

Con ese parétro puedo saber que elelemento del objeto anuncios es el que se debe ver en detalles.

La idea es que en verDetalles se pueda añadir al $scope un objeto detalle ($scope.detalle) que contenga la objeto anuncio de la iteración actual.

En inicio.js se muestra de forma correcta (console.log) pero no he sido capaz de recuperar $scope.detalle (detalle) en la vista (detalles.html).

El app.js he modificado el routing para ue cuando se llamae a la vista /detalles se utilice el controlador inicio.js qeu contiene la implementación de verDetalles(). 