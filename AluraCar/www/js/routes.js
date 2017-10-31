angular.module('starter').config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('listagem');

  $stateProvider.state('listagem', {
    url : '/listagem',
    templateUrl : 'templates/listagem.html',
    controller: 'ListagemController as vmListagem'
  });

}
