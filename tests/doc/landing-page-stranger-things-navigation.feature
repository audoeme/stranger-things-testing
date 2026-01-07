Feature: Landing Page Stranger Things

  Como usuário da landing page Stranger Things
  Quero que os elementos da página funcionem corretamente
  Para que eu possa navegar, interagir e me inscrever na newsletter sem erros

  Background:
    Given que a página da landing page Stranger Things está aberta

  # CT001 – Botão "Começar a Explorar"
  Scenario: Clicar no botão "Começar a Explorar" exibe um alert
    When eu clico no botão "Começar a Explorar" na seção hero
    Then deve aparecer um alert com a mensagem "Você entrou no Mundo Invertido!"

  # CT002 – Hover nos cards das temporadas
  Scenario: Hover sobre os cards das temporadas
    When eu passo o mouse sobre todos os cards das temporadas
    Then cada card deve aplicar o efeito hover (levitar e sombra aumentada)

  # CT003 – Newsletter envio válido
  Scenario: Preencher newsletter com dados válidos
    When eu preencho o campo Nome com "Lucas"
    And eu preencho o campo Email com "lucas@test.com"
    And eu preencho o campo Mensagem com "Eleven é minha favorita!"
    And eu clico no botão "Enviar"
    Then deve aparecer um alert com a mensagem "Inscrição realizada com sucesso!"

  # CT004 – Newsletter envio inválido (campos vazios)
  Scenario: Tentar enviar newsletter com campos obrigatórios vazios
    When eu deixo todos os campos da newsletter vazios
    And eu clico no botão "Enviar"
    Then o formulário não deve ser enviado
    And o foco deve retornar para o primeiro campo obrigatório

  # CT005 – Rolagem da página via menu
  Scenario: Clicar nos links do menu faz a rolagem correta
    When eu clico no link do menu "Início"
    Then a página deve rolar até a seção hero
    When eu clico no link do menu "Temporadas"
    Then a página deve rolar até a seção das temporadas
    When eu clico no link do menu "Newsletter"
    Then a página deve rolar até a seção da newsletter
    When eu rolo até o final da página
    Then todos os elementos da página devem estar visíveis