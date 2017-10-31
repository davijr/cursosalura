
angular.module('starter').controller('ListagemController', ListagemController);

function ListagemController() {
  var vmListagem = this;

  vmListagem.listaCarros = [
    { nome : "BMW 120i" },
    { nome : "Onix 1.6" },
    { nome : "Fiat Argo" },
    { nome : "Vectra" },
    { nome : "Gol 1.6" },
    { nome : "Onix 1.6" },
    { nome : "Onix 1.6" },
    { nome : "Onix 1.6" },
    { nome : "Onix 1.6" },
    { nome : "Fiesta 2.0" }];

}
