# Trela

**Trela** é uma solução personalizada de Confirm, Prompt e Alert construída com JavaScript, HTML e CSS, projetada para ser simples, elegante e fácil de usar em suas aplicações. Sem necessidade de instâncias ou configurações complexas — basta chamá-lo diretamente em qualquer lugar do seu código.


## 🛠️ Instalação

Adicione o código abaixo à sua página para integrar o Trela:


```html
<body data-trela-theme="light ou dark">
<link rel="stylesheet" href="https://devvinem.github.io/trela-confirm/trela.theme.css">

<!-- Confirm (opcional) -->
<script src="https://devvinem.github.io/trela-confirm/trela.confirm.js" defer></script>

<!-- Alert (opcional) -->
<script src="https://devvinem.github.io/trela-confirm/trela.alert.js" defer></script>

<!-- Prompt (opcional) -->
<script src="https://devvinem.github.io/trela-confirm/trela.prompt.js" defer></script>
```

O css é obrigátorio mas o restante fique avontade para usar so ó que precisa


⚡ Como Usar

## Confirm

O Trela Confirm é ideal para diálogos de confirmação. Ele funciona de forma assíncrona e retorna true ou false com base na escolha do usuário.

##### Exemplo de uso:

```javascript
/*
  @param {string} - titulo da caixa
  @param {string} - descrição da ação
  @return {boolean} - true ou false
*/

async function testeConfirm() {

  const res = await Confirm.add(
    "Remover produto", 
    "Esta ação não poderá ser desfeita. Deseja continuar?"
  ); //o retorno será true para sim e false para não

}
```



## Alert

Para exibir uma mensagem simples ao usuário, use o Trela Alert:

```javascript
/*
  @param {string} - descrição
  @return {boolean} - true - em caso que queira aguardar
*/

async function testeAlert() {

  // se precisar aguarda o clique do usuário para continuar
  const res = await Alert.add("Operação realizada com sucesso!");

  // se caso não precisar esperar
  Alert.add("Operação realizada com sucesso!");

}
```


## Prompt
O Trela Prompt permite capturar a entrada de dados do usuário, semelhante ao prompt nativo:

```javascript
/*
  @param {string} -  titulo da caixa
  @return {string,null} - valor digitado ou null em caso de nada
*/

async function testePrompt() {

  const userInput = await Prompt.add("Qual é o seu nome?");

}
```


📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
