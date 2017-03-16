miAppAngular.controller('detalles', function($scope, $http, $routeParams, configuracionGlobal, $location){
    
    $http.get( configuracionGlobal.api_url, {
        
        params: { id: $routeParams.identificador }
    })
    .then(function(respuesta){
        
        $scope.anuncio = respuesta.data[0];
    })
});