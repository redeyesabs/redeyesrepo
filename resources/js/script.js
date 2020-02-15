var app=angular.module('single-page-app', ['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'homeBody.html'
          })
          .when('/javafx',{
                templateUrl: 'javafxBody.html'
          })
          .when('/automationBody',{
                templateUrl: 'automationBody.html'
          })
          .when('/about',{
                templateUrl: 'aboutBody.html'
          });

});
