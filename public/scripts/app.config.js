
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.when('/home', {
            templateUrl: 'views/home.html',
            controller: 'MainController as home',
          }).when('/favorites', {
            templateUrl: 'views/favorites.html',
            controller: 'FavoriteController as faveCtrl',
          }).otherwise({
            redirectTo: '/home',
          });

  $locationProvider.html5Mode(true);
});




// angular.module('giphyApp')
//        .config(function($routeProvider, $locationProvider) {
//          $routeProvider.when('/', {
//            templateUrl: 'views/home.html',
//            controller: 'MainController as main',
//          }).when('/home', {
//            templateUrl: 'views/home.html',
//            controller: 'MainController as main',
//          }).when('/favorites', {
//            templateUrl: 'views/favorites.html',
//            controller: 'FavoriteController as faveCtrl',
//          });
//
//          $locationProvider.html5Mode(true);
//        });
