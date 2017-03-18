<<<<<<< HEAD
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
    
    $http.get(configuracionGlobal.api_url1).success(function(respuesta) {
	            localStorage.setItem('anuncios', JSON.stringify(respuesta));
	            $scope.anuncios = respuesta.tablons.tablon;
                $scope.titulo = $scope.anuncios[0].categorias.categoria[0].content;
                //console.log($scope.anuncios);
                //console.log($scope.anuncios[1].identificador);
                //console.log($scope.titulo);



	        });


    $scope.verDetalles = function(_anuncioId){
        $location.path("/detalles/"+_anuncioId)
    }
=======
miAppAngular.controller('inicio', function($scope , configuracionGlobal , $http , $location) {
  
        $http.get(configuracionGlobal.api_url1).success(function(respuesta) {
	        localStorage.setItem('anuncios', JSON.stringify(respuesta));
	        $scope.anuncios = respuesta.tablons.tablon;
            $scope.titulo = $scope.anuncios[0].categorias.categoria[0].content;
                //console.log($scope.anuncios);
                //console.log($scope.anuncios[1].identificador);
                //console.log($scope.titulo);
        
        $scope.verDetalles = function(i){
            $location.path("/detalles/"+i);
            $scope.verDetalles = $scope.anuncios[i];
            $scope.detalle = $scope.anuncios[i];
            $scope.indice = i;
            //console.log($scope.detalle);
            //console.log($scope.detalle.identificador);
            //console.log($scope.detalle.url);
            //console.log($scope.detalle.send);
            console.log($scope);
        };
    })
>>>>>>> 1629ea9c4172395a9e36d0eec4055ed0eae55af4
});