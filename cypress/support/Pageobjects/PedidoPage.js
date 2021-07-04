/// <reference types="cypress" />

import Elements from '../Elements/PedidoElements'
const PedidoElements = new Elements
const url = Cypress.config("baseUrl")

class Page{
    acessarsite(){
        cy.visit(url)
        cy.wait(2000)
    }

    clicarBotaoEstoucomFome(){
        cy.route('GET', '**/restaurants').as('getRestaurants')
        cy.get(PedidoElements.BotaoEstoucomFome()).click()
    } 

    validarAcessoATelaRestaurante(){
        cy.wait('@getRestaurants').then((xhr) => {
            expect(xhr.status).be.eq(200);
    
        })
    }

    clicarPizzaBug(){
        cy.route('GET', '**/pizza-bug').as('getPizza-bug')
        cy.route('GET', '**/menu').as('getMenu')
        cy.get(PedidoElements.PizzaBug()).click()
    }

    validarAcessoATelaPizzaBug(){
        cy.wait('@getPizza-bug').then((xhr) => {
            expect(xhr.status).be.eq(200);
    
        })
        cy.wait('@getMenu').then((xhr) => {
            expect(xhr.status).be.eq(200);
    
        })
    }

    clicarBotãoAdicionarPizzaMussarela(){
        cy.get(PedidoElements.BotãoAdicionarPizzaMussarela()).click();
    }

    validarPizzaMussarelaNoCarrinho(){
        cy.get(PedidoElements.ValidarPizzaMussarelaNoCarrinho()).contains('(1x) Pizza de mussarela')
        cy.wait(500)
        cy.screenshot()
    }

}

export default Page;
