# Casos de Teste para Automação – Landing Page Stranger Things

Este documento contém os Casos de Teste planejados para a Landing Page Stranger Things, incluindo validação de botões, hover em cards, newsletter e rolagem via menu.

---

## CT001 – Botão "Começar a Explorar"

**Objetivo:**  
Validar que o botão da hero exibe corretamente uma mensagem de alerta quando clicado.

**Pré-condições:**  
- A página da landing page deve estar totalmente carregada.

**Passos:**  
1. Abrir a página da landing page.  
2. Localizar o botão “Começar a Explorar” na seção hero.  
3. Clicar no botão.

**Dados de Teste:**  
- Nenhum dado específico necessário.

**Resultado Esperado:**  
- Um pop-up aparece com a seguinte mensagem: `"Você entrou no Mundo Invertido!"`  

---

## CT002 – Hover nos cards das temporadas

**Objetivo:**  
Validar que o efeito de hover (levitar e aumento de sombra) é aplicado corretamente a todos os cards de temporada.

**Pré-condições:**  
- A página da landing page deve estar totalmente carregada.  
- Os cards das temporadas devem estar visíveis na tela.

**Passos:**  
1. Abrir a página da landing page.  
2. Passar o mouse sobre cada card de temporada individualmente.

**Dados de Teste:**  
- Nenhum dado específico necessário.

**Resultado Esperado:**  
- Cada card levita (transform: translateY aplicado).  
- A sombra do card aumenta, indicando o efeito hover.

---

## CT003 – Newsletter – envio válido

**Objetivo:**  
Validar que o formulário de newsletter é enviado corretamente quando todos os campos obrigatórios são preenchidos.

**Pré-condições:**  
- A página da landing page deve estar totalmente carregada.  
- O formulário de newsletter deve estar visível.

**Passos:**  
1. Abrir a página da landing page.  
2. Preencher os campos do formulário:  
   - Nome: `Lucas`  
   - Email: `lucas@test.com`  
   - Mensagem: `Eleven é minha favorita!`  
3. Clicar no botão “Enviar”.

**Dados de Teste:**  

| Campo   | Valor                       |
|---------|-----------------------------|
| Nome    | Lucas                       |
| Email   | lucas@test.com              |
| Mensagem| Eleven é minha favorita!    |

**Resultado Esperado:**  
- Um alert aparece com a mensagem: `"Inscrição realizada com sucesso!"`  

---

## CT004 – Newsletter – envio inválido (campos obrigatórios vazios)

**Objetivo:**  
Validar que o formulário de newsletter não é enviado quando os campos obrigatórios estão vazios.

**Pré-condições:**  
- A página da landing page deve estar totalmente carregada.  
- O formulário de newsletter deve estar visível.

**Passos:**  
1. Abrir a página da landing page.  
2. Deixar todos os campos do formulário vazios.  
3. Clicar no botão “Enviar”.

**Dados de Teste:**  
- Nenhum dado inserido (campos vazios).

**Resultado Esperado:**  
- O formulário não é enviado.  
- O navegador foca automaticamente no primeiro campo obrigatório (validação nativa do HTML).

---

## CT005 – Rolagem da página via menu

**Objetivo:**  
Validar que os links do menu fazem a rolagem correta até cada seção da página.

**Pré-condições:**  
- A página da landing page deve estar totalmente carregada.  
- Todos os elementos das seções devem estar visíveis.

**Passos:**  
1. Clicar no link **“Início”** e verificar se a página rola até a seção hero.  
2. Clicar no link **“Temporadas”** e verificar se a página rola até os cards das temporadas.  
3. Clicar no link **“Newsletter”** e verificar se a página rola até o formulário.  
4. Rolar até o final da página manualmente ou via script.

**Dados de Teste:**  
- Nenhum dado específico necessário.

**Resultado Esperado:**  
- Cada clique no menu faz a página rolar suavemente até a seção correspondente.  
- Todos os elementos da seção (cards, formulário) estão visíveis.  
- A rolagem manual ou via script leva até o final da página sem quebras ou sobreposições.