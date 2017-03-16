miAppAngular.controller('inicio', function($scope , configuracionGlobal , $http , $location ){
    
    $scope.config = configuracionGlobal;
    
   /* $http.jsonp( 'data/anunucios.json' )
        .then(function successCallback(respuesta) {
            console.log(respuesta);
            $scope.anuncios = respuesta;  
        }) */
     

  /*  $http.get('data/anunucios.json')
        .success(function(respuesta) {
            console.log(respuesta);
            $scope.anuncios = respuesta;  
        })*/
    
    $http.get('data/anuncios.json').success(function(respuesta) {
	            localStorage.setItem('anuncios', JSON.stringify(respuesta));
	            $scope.anuncios = respuesta.tablons.tablon;
                console.log($scope.anuncios);
                console.log($scope.anuncios[1].identificador);


	        });


    $scope.verDetalles = function(_anuncioId){
        $location.path("/detalles/"+_anuncioId)
    }
});