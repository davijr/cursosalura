angular.module('starter').config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('listagem');

  $stateProvider
    .state('listagem', {
      url : '/listagem',
      templateUrl : 'templates/listagem.html',
      controller: 'ListagemController',
      controllerAs: 'vmListagem'
    })
    .state('carro-escolhido', {
      url : '/carro-escolhido/:carro',
      templateUrl : 'templates/carro-escolhido.html',
      controller: 'CarroEscolhidoController',
      controllerAs: 'vmCarroEscolhido'
    })
    .state('finalizar-pedido', {
      url : '/finalizar-pedido/:carro',
      templateUrl : 'templates/finalizar-pedido.html',
      controller: 'FinalizarPedidoController',
      controllerAs: 'vmFinalizarPedido'
    });

}
