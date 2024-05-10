let btnOrdenarporPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarporPreco.addEventListener('click', ordenarLivrosPorPrecos);

function ordenarLivrosPorPrecos () {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}