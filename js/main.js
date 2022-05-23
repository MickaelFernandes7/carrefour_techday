// fetch(`https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&/json`).then(r => {return r.json()}).then(corpo => console.log(corpo));
//fetch(url).then(response => response.json()).then(console.log);
// fetch(`https://mercado.carrefour.com.br/api/catalog_system/pub/products/search/`).then(r => {return r.json()}).then(corpo => {const cp = await corpo; console.log(cp)});
// console.log(produto[0].productName);


// progresso
const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search/`;
//conversao do recebimento da url pra json
const dados = await fetch(url);
//array
const produto = await dados.json();

let id = document.getElementById('id');
let produtosHtml = document.getElementById('nome');

//foreach para percorrer o vetor | descobrir como passar o vetor completo para o html
produto.forEach((produtos, index, produtosId) =>  {

    console.log(index, produtos.productId, produtos.productName);

    //inner html
    id.innerHTML = produtos.productId;
    produtosHtml.innerHTML = produtos.productName;
});