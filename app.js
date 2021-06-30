const livros = require('./database')

// Pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? S/N: ')

// Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
if (entradaInicial.toUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis')
    console.log('Produtividade', '/ História brasileira', '/ Américas', '/ Tecnologia', '/ Estilo de vida')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:').toUpperCase()
    const retorno = livros.filter(livro => removerAcentos(livro.categoria.toUpperCase()) === removerAcentos(entradaCategoria))

    console.table(retorno)

// Se for não, mostra todos os livros em ordem crescente pela quantidade de páginas
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Esses são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}

function removerAcentos (str) {
    return str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
}


