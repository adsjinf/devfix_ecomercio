let produtos = [
    {
        "id": 1,
        "nome": "iPhone 15 Pro",
        "categoria": "smartphones",
        "preco": 7999,
        "precoOriginal": 8999,
        "desconto": 11,
        "imagem": "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400",
        "descricao": "Smartphone Apple com câmera avançada",
        "ativo": true,
        "estoque": 100
    },
    {
        "id": 2,
        "nome": "MacBook Air M2",
        "categoria": "laptops",
        "preco": 8999,
        "precoOriginal": 10999,
        "desconto": 18,
        "imagem": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
        "descricao": "Notebook Apple ultrafino e potente",
        "ativo": true,
        "estoque": 1000
    },
    {
        "id": 3,
        "nome": "AirPods Pro",
        "categoria": "headphones",
        "preco": 1899,
        "precoOriginal": 2299,
        "desconto": 17,
        "imagem": "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400",
        "descricao": "Fones sem fio com cancelamento de ruído",
        "ativo": true,
        "estoque": 100
    },
    {
        "id": 4,
        "nome": "Samsung Galaxy S24",
        "categoria": "smartphones",
        "preco": 5499,
        "precoOriginal": 6299,
        "desconto": 13,
        "imagem": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
        "descricao": "Smartphone Samsung com tela AMOLED",
        "ativo": true,
        "estoque": 0
    },
    {
        "id": 5,
        "nome": "Apple Watch Series 9",
        "categoria": "smartwatch",
        "preco": 3299,
        "precoOriginal": 3799,
        "desconto": 13,
        "imagem": "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
        "descricao": "Relógio inteligente com monitoramento",
        "ativo": true,
        "estoque": 250
    },
    {
        "id": 6,
        "nome": "Teclado Mecânico",
        "categoria": "accessories",
        "preco": 499,
        "precoOriginal": null,
        "desconto": null,
        "imagem": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
        "descricao": "Teclado mecânico RGB para gamers",
        "ativo": true,
        "estoque": 300
    },
    {
        "id": 7,
        "nome": "Sony WH-1000XM5",
        "categoria": "headphones",
        "preco": 2499,
        "precoOriginal": 2999,
        "desconto": 17,
        "imagem": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
        "descricao": "Fone com cancelamento de ruído",
        "ativo": true,
        "estoque": 150
    },
    {
        "id": 8,
        "nome": "Dell XPS 13",
        "categoria": "laptops",
        "preco": 7999,
        "precoOriginal": null,
        "desconto": null,
        "imagem": "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400",
        "descricao": "Notebook Windows premium",
        "ativo": true,
        "estoque": 0
    }
];

let textoPesquisa = ""
let categoriaAtual = "all"
let containerProdutos = document.querySelector(".products-container")
let input = document.querySelector(".search-input")
let todosBotoes = document.querySelectorAll(".category-btn")

function mostrarProdutos() {

    let htmlProdutos = ""

    let produtosFiltrados = produtos.filter(prd => {
        let passouCategora = (categoriaAtual === "all" || prd.categoria === categoriaAtual)
        let passouPesquisa = prd.nome.toLowerCase().includes(textoPesquisa.toLowerCase())
        console.log(passouCategora)
        return passouPesquisa && passouCategora

    })

    produtosFiltrados.forEach(prd => {

        if (prd.ativo) {
            htmlProdutos = htmlProdutos + `
            <div class="product-card">
                <img class="product-img" src="${prd.imagem}" alt="${prd.nome}">
                <div class="product-info">
                    <h3 class="product-name">${prd.nome}</h3>
                    <p class="product-description">${prd.descricao}</p>
                </div>
                <div>
                    <p class="product-price">${prd.preco.toLocaleString("pt-BR", {style: "currency",   currency: "BRL" })}</p>
                </div>
                <div class"button-footer">
                    <button  ${prd.estoque === 0 ? 'class="product-button zero"' : 'class="product-button"'}>Detalhes ${prd.estoque === 0 ? " / Esgotado" : ""}</button>
                </div>
            </div>
            `
        }
    })

    containerProdutos.innerHTML = htmlProdutos
}

function pesquisar(){
    textoPesquisa = input.value
    mostrarProdutos()
}

function trocarCategoria(categoria) {
    categoriaAtual = categoria
    todosBotoes.forEach(botao => {
        botao.classList.remove("active")

        if(botao.getAttribute("data-category")== categoria){
            botao.classList.add("active")
        }
    })
    mostrarProdutos()
}

window.addEventListener('DOMContentLoaded', () => {
    mostrarProdutos()
    input.addEventListener('input', pesquisar)

    todosBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            let categoria = botao.getAttribute("data-category")
            trocarCategoria(categoria)
        })
    })
})

