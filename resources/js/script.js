var app=angular.module('single-page-app', ['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'homeBody.html'
          })
          .when('/about',{
                templateUrl: 'aboutBody.html'
          });

});
