angular.module("MyApp").factory("colaboradorService", function ($http) {

    var _getColaboradores = function (page) {

        return $http.get(`http://localhost:8080/colaborador?page=${page}`);
    }

    var _getTotalPages = function () {

        return $http.get('http://localhost:8080/colaborador/numero-paginas')
    }

    return {
        getColaboradores: _getColaboradores,
        getTotalPages: _getTotalPages
    };
});