angular.module('giphyApp')
       .config(function($routeProvider, $locationProvider) {
         $routeProvider.when('/', {
           templateUrl: '/views/home.html'
         }).when('/home', {
           templateUrl: '/views/home.html'
         }).when('/favorites', {
           templateUrl: '/views/favorites.html'
         });

         $locationProvider.html5Mode(true);
       });
