angular.module('starter').config(Config);

function Config($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('login');

  $stateProvider

    .state('app', {
      url : '/app',
      templateUrl : 'templates/menu.html',
      abstract: true
    })

    .state('app.listagem', {
      url : '/listagem',
      views : {
        'menuContent' : {
          templateUrl : 'templates/listagem.html',
          controller: 'ListagemController',
          controllerAs: 'vmListagem'
        }
      }
    })

    .state('carro-escolhido', {
      url: '/carro-escolhido/:carro',
      templateUrl: 'templates/carro-escolhido.html',
      controller: 'CarroEscolhidoController',
      controllerAs: 'vmCarroEscolhido'
    })

    .state('finalizar-pedido', {
      url : '/finalizar-pedido/:carro',
      templateUrl: 'templates/finalizar-pedido.html',
      controller: 'FinalizarPedidoController',
      controllerAs: 'vmFinalizarPedido'
    })

    .state('login', {
      url : '/login',
      templateUrl : 'templates/login.html',
      controller: 'LoginController',
      controllerAs: 'vmLogin'
    });

}
