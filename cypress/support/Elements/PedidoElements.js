class PedidoElements {

BotaoEstoucomFome = () => {return '.btn'}
PizzaBug = () => {return '.col-sm-6:nth-child(1)'}
BotãoAdicionarPizzaMussarela = () => {return ':nth-child(1) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart'}
ValidarPizzaMussarelaNoCarrinho = () => {return '[style="opacity: 1;"] > th'}
ValidarValorPizzaMussarelaNoCarrinho = () => {return 'tbody > [style="opacity: 1;"] > :nth-child(2)'}


//CT02
BotãoAdicionarPizzaPeperoni = () => {return ':nth-child(2) > .menu-item-info-box > .menu-item-info-box-content > .add-to-cart'}
ValidarPizzaPeperoniNoCarrinho = () => {return '[style="opacity: 1;"] > th'}


}
export default PedidoElements;