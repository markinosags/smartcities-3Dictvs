miAppAngular.controller('inicio', function($scope , configuracionGlobal , $http , $location ){
    
    $scope.config = configuracionGlobal;
 
      $http.get(configuracionGlobal.api_url1).success(function(respuesta) {
	    localStorage.setItem('anuncios', JSON.stringify(respuesta));
	    $scope.anuncios = respuesta.tablons.tablon;
        $scope.titulo = $scope.anuncios[0].categorias.categoria[0].content;
        //console.log($scope.anuncios);
        //console.log($scope.anuncios[1].identificador);
        //console.log($scope.titulo);
        $scope.verDetalles = function(i){
            $location.path("/detalles/"+i);
            $scope.detalle = $scope.anuncios[i];
            console.log($scope.detalle);
            console.log($scope.detalle.identificador);
            console.log($scope.detalle.url);
            console.log($scope.detalle.send);
    }
})        
});