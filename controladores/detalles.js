miAppAngular.controller('detalles', function($scope, $http, $routeParams, configuracionGlobal){
    
    $http.get( configuracionGlobal.api_url1, {
        params: { id: $routeParams.indice }
    })
    .then(function(respuesta){
        //console.log(respuesta.data.tablons.tablon[$routeParams.indice]);
        $scope.anuncio = respuesta.data.tablons.tablon[$routeParams.indice];
        console.log($scope.anuncio);
    })
});