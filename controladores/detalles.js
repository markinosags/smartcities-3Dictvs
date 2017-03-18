miAppAngular.controller('detalles', function($scope, $http, $routeParams, configuracionGlobal, $location){
    
    $http.get( configuracionGlobal.api_url1, {
        
        params: { id: $routeParams.identificador }
    })
    .then(function(respuesta){
        console.log($scope);
        //$scope.anuncios = respuesta;
    })
});