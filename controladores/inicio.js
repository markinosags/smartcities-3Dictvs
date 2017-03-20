miAppAngular.controller('inicio', function($scope , configuracionGlobal , $http , $location) {
  
        $http.get(configuracionGlobal.api_url1).success(function(respuesta) {
	        localStorage.setItem('anuncios', JSON.stringify(respuesta));
	        $scope.anuncios = respuesta.tablons.tablon;
            $scope.titulo = $scope.anuncios[0].categorias.categoria[0].content;
            //console.log($scope.anuncios[1].numero_de_referencia);
            //console.log($scope.anuncios[1].organizacion_remitente);
            //console.log($scope);

        
        /*$scope.verDetalles = function(i){
            $location.path("/detalles/"+i);
            $scope.verDetalles = $scope.anuncios[i];
            $scope.detalle = $scope.anuncios[i];
            $scope.indice = i;
            //console.log($scope.detalle);
            //console.log($scope.detalle.identificador);
            //console.log($scope.detalle.url);
            //console.log($scope.detalle.send);
            console.log($scope);
        };*/
    })
});