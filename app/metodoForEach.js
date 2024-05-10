const elementoParaInserirLivros = document.getElementById('livros');
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');

exibirOsLivrosNaTela();

function exibirOsLivrosNaTela (livros) {
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = '';
  elementoParaInserirLivros.innerHTML = '';
    livros.forEach(livro => {
      let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'; //posso passar dessa forma (ternário) ou com a função comentada lá embaixo.
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    })
}

 // aqui, esse "livro" está acessando cada elemento em particular dentro array e modificando sua propriedade de acordo com o que foi especificado no banco de dados

//  function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0) {
//     return 'livro__imagens'
//   } else {
//     return 'livro__imagens indisponivel'
//   }
//  }