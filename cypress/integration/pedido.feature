Feature: Adicionar Pedido ao carrinho

Scenario: Adicionar Pizza de Mussarela no Carrinho
    Given que acesso o site Parodifood
    And   acesso a tela de Restaurante
    When  clico em adicionar na pizza de Mussarela
    Then  valido se aparece no carrinho o item pizza de Mussarela


    Scenario: Adicionar Pizza de Peperoni
    Given que acesso o site Parodifood
    And   acesso a tela de Restaurante
    When  clico em adicionar na pizza de Peperoni
    Then  valido se aparece no carrinho o item pizza de Peperoni