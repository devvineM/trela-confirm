# Trela

**Trela** é um **Confirm** personalizado construído com **JavaScript, HTML e CSS**, projetado para ser simples, elegante e extremamente fácil de usar em suas aplicações. Sem a necessidade de instâncias ou configurações complexas, basta chamá-lo diretamente em qualquer lugar do seu código.

## 🛠️ Instalação

Basta adicionar o arquivo `trela.js` ao seu projeto e já está pronto para uso!

```html
<script src="trela.js"></script>

⚡ Como Usar
O Trela é perfeito para quando você precisa de um diálogo de confirmação rápido e prático. Ele funciona de forma assíncrona e retorna true ou false com base na escolha do usuário. Ideal para fluxos que exigem a confirmação antes de prosseguir.

Exemplo de uso:

async function testeConfirm() {
  const res = await Trela.confirm(
    "Remover produto", 
    "Esta ação não poderá ser desfeita. Deseja continuar?"
  );
  if (res) {
    console.log("Produto removido");
  } else {
    console.log("Ação cancelada");
  }
}


Simples assim: você só precisa envolver a chamada do Trela dentro de uma função async e aguardar o retorno da escolha do usuário (true para continuar ou false para cancelar).
