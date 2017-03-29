(function(){ 
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
            enabled: true,
            requireBase: false
         });

     $stateProvider
         .state('index', {
             url: '/',
             templateUrl: '/index.html'
         });
 
    }
    angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
})();

