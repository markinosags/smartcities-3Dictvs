var miAppAngular = angular.module('navegacion', ['ngRoute'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'vista/inicio.html',
        controller: 'inicio'
    })
    .when('/404', {
        templateUrl: 'vista/404.html',
        controller: 'inicio'
    })
    .when('/detalles/:identificador', {
        templateUrl: 'vista/detalles.html',
        controller: 'detalles'
        
    })
    .otherwise({        
        redirectTo: '/404'        
    })
    
}]);


miAppAngular.constant('configuracionGlobal' , {
 
    nombreDelSitio:'Anuncios Ayo. Gijón',
    api_url1: 'data/anuncios.json',
        
});

