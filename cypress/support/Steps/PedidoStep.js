/*global Given, And, When, Then*/

import PedidoPage from '../Pageobjects/PedidoPage'
const Pedido = new PedidoPage

Given("que acesso o site Parodifood", () => {
    Pedido.acessarsite();
}), 
    
And("acesso a tela de Restaurante", () => {
    Pedido.clicarBotaoEstoucomFome();
    Pedido.validarAcessoATelaRestaurante();
}),

When("clico em adicionar na pizza de Mussarela", () => {
    Pedido.clicarPizzaBug();
    Pedido.validarAcessoATelaPizzaBug();
    Pedido.clicarBotãoAdicionarPizzaMussarela();
}),
    
Then("valido se aparece no carrinho o item pizza de Mussarela", () => {
    Pedido.validarPizzaMussarelaNoCarrinho();
})


//CT02
When("clico em adicionar na pizza de Peperoni", () => {
    Pedido.clicarPizzaBug();
    Pedido.validarAcessoATelaPizzaBug();
    Pedido.clicarBotãoAdicionarPizzaPeperoni();
}),

Then("valido se aparece no carrinho o item pizza de Peperoni", () => {
    Pedido.ValidarPizzaPeperoniNoCarrinho();
})