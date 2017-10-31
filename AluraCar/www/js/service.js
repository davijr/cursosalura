
angular.module('starter').service('CarroService', CarroService);

function CarroService($http) {

  var URL = "https://aluracar.herokuapp.com";

  return {
    obterCarros : obterCarros,
    salvarPedido : salvarPedido
  }

  function obterCarros() {
    return $http.get(URL).then(function (retorno) {
      return retorno.data;
    });
  }

  function salvarPedido(pedido) {
    return $http.get(URL + "/salvarpedido", pedido).then(function (retorno) {
      return "Deu certo!";
    });
  }

}
