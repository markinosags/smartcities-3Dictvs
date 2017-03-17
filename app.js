var miAppAngular = angular.module('navegacion', ['ngRoute'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'vista/home.html',
        controller: 'inicio'
    })
    .when('/quienes-somos' , {      
        templateUrl: 'vista/quienes-somos.html',
        controller: 'quienes-somos'
    })
    .when('/servicios' , {      
        templateUrl: 'vista/servicios.html',
        controller: 'servicios'
    })
    .when('/contacto' , {      
        templateUrl: 'vista/contacto.html',
        controller: 'contacto'
    })
    .when('/opendata' , {      
        templateUrl: 'vista/opendata.html',
        controller: 'opendata'
    })
    .when('/detalles/:identificador', {
        templateUrl: 'vista/detalles.html',
        controller: 'inicio'  
    })
    .when('/inicio', {
        templateUrl: 'vista/inicio.html',
        controller: 'inicio'  
    })
   
    .when('/404', {
        templateUrl: 'vista/404.html',
        controller: 'inicio'
    })
    .otherwise({        
        redirectTo: '/404'        
    })
    
}]);


miAppAngular.constant('configuracionGlobal' , {
 
    nombreApp:'3Dictvs',
    subtitulo:'Todas las notificaciones a tu alcance',
    nombreDelSitio:'Anuncios Ayto. Gijón',
    api_url1: 'data/anuncios.json'     
});

