
angular.module('starter').controller('ListagemController', ListagemController);

function ListagemController($state, $http, CarroService) {
  var vmListagem = this;

  CarroService.obterCarros().then(function (retorno) {
    vmListagem.listaCarros = retorno;
  });

}


angular.module('starter').controller('CarroEscolhidoController', CarroEscolhidoController);

function CarroEscolhidoController($stateParams) {
  var vmCarroEscolhido = this;

  vmCarroEscolhido.carro = angular.fromJson($stateParams.carro);
  vmCarroEscolhido.precoTotal = vmCarroEscolhido.carro.preco;

  vmCarroEscolhido.listaAcessorios = [
    {nome: "Freio ABS", preco: 800},
    {nome: "MP3 Player", preco: 500},
    {nome: "Ar Condicionado", preco: 1000}];

  vmCarroEscolhido.atualizarPreco = atualizarPreco;

  function atualizarPreco() {
    vmCarroEscolhido.precoTotal = vmCarroEscolhido.carro.preco;
    angular.forEach(vmCarroEscolhido.listaAcessorios, function (acessorio) {
      if (acessorio.marcado) {
        vmCarroEscolhido.precoTotal += acessorio.preco;
      }
    });
    vmCarroEscolhido.carro.precoTotal = vmCarroEscolhido.precoTotal;
  }

}

angular.module('starter').controller('FinalizarPedidoController', FinalizarPedidoController);

function FinalizarPedidoController($state, $stateParams, $ionicPopup, CarroService) {
  var vmFinalizarPedido = this;

  vmFinalizarPedido.pedido = {};
  vmFinalizarPedido.carro = angular.fromJson($stateParams.carro);

  vmFinalizarPedido.finalizarPedido = finalizarPedido;

  function finalizarPedido() {

    var pedido = {
      params : {
        carro : vmFinalizarPedido.carro,
        preco : vmFinalizarPedido.carro.precoTotal,
        nome : vmFinalizarPedido.pedido.nome,
        endereco : vmFinalizarPedido.pedido.endereco,
        email : vmFinalizarPedido.pedido.email
      }
    };

    CarroService.salvarPedido(pedido).then(function (retorno) {
      console.log(retorno);

      $ionicPopup.alert({
        title: "Parabéns!",
        template: "Você acaba de comprar um carro!"
      }).then(function () {
        $state.go('listagem');
      });

    }, function (error) {

      $ionicPopup.alert({
        title: "Deu erro!",
        template: "Campo(s) obrigatório(s) não preenchido(s)."
      });

    });

  }

}
