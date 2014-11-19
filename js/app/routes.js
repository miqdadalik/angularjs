app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'UsersController',
            templateUrl: 'templates/pages/users/list.html'
        })
})