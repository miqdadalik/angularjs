var app = angular.module('App', [
    'ngRoute',
    'ngResource',
    'App.config'
]).factory('httpInterceptor', function ($q, $rootScope) {
    
}).config(function($locationProvider) {
    //  $locationProvider.html5Mode(true);
});
