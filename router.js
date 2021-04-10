angular.module('MyApp').config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
    }).when('/colaboradores', {
        templateUrl: 'pages/colaborador_form.html',
        controller: 'colaboradorController'
    }).otherwise({
        redirectTo: "/"
    });
});