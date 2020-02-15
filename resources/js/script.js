var app=angular.module('single-page-app', ['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'index.html'
          })
          .when('/about',{
                templateUrl: 'aboutBody.html'
          });

});
