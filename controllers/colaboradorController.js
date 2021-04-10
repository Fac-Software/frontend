angular.module('MyApp').controller('colaboradorController', function ($scope, colaboradorService) {

    $scope.colaborador = {
    }

    var paginaAtual = $scope.paginaAtual = {
        number: 1,
        value: 0
    }


    $scope.colaboradores = [];

    var carregarDados = function () {

        colaboradorService.getColaboradores(paginaAtual.value).then(function (response) {
            $scope.colaboradores = response.data;
        })
    }

    colaboradorService.getTotalPages().then(function (response) {

        var totalNumber = [];

        for (i = 0; i < response.data; i++) {

            let dados = {
                number: i + 1,
                value: i
            }

            totalNumber.push(dados);
        }

        $scope.totalPages = totalNumber;
    })

    $scope.trocarPagina = function (paginaSelecionada) {

        paginaAtual = {
            number: paginaSelecionada + 1,
            value: paginaSelecionada
        }

        carregarDados();
    }

    carregarDados();

})