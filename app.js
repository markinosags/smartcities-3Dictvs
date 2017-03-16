var miAppAngular = angular.module('navegacion', ['ngRoute'] );

miAppAngular.config( [ '$routeProvider' , function($routeProvider){
    
    $routeProvider.when('/' , {      
        templateUrl: 'vista/home.html',
        controller: 'home'
    })
    .when('/' , {      
        templateUrl: 'vista/home.html',
        controller: 'home'
    })
    .when('/quienes-somos' , {      
        templateUrl: 'vista/quienes-somos.html',
        controller: 'quienes'
    })
    .when('/servicios' , {      
        templateUrl: 'vista/servicios.html',
        controller: 'servicios'
    })
    .when('/contacta' , {      
        templateUrl: 'vista/contacta.html',
        controller: 'contacta'
    })
    .when('/opendata' , {      
        templateUrl: 'vista/opendata.html',
        controller: 'opendata'
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
 
    nombreDelSitio:'Anuncios Ayto. Gijón',
    api_url1: 'data/anuncios.json',
        
});

