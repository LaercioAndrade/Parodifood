Feature: Automatizar o site Parodifood

Scenario: Adicionar Pizza de Mussarela no Carrinho
    Given que acesso o site Parodifood
    And   acesso a tela de Restaurante
    When  clico em adicionar na pizza de Mussarela
    Then  valido se aparece no carrinho o item pizza de Mussarela