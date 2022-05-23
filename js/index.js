// const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search/`;
// //conversao do recebimento da url pra json
// const dados = await fetch(url);
// //array
// const produto = await dados.json();

function callFunc(){
    let Myarray = [{nome:'Mickael', sobrenome:'Fernandes'},
        {nome:'Maroto', sobrenome:'Jhonson'}
        ];

    var html = "<table border='1|1'> ";

    setTimeout(() => {
        for(i = 0; i < Myarray.length; i++){
            html+='<tr>';
            html+='<td>'+Myarray[i].nome+'<td>';
            html+='<td>'+Myarray[i].sobrenome+'<td>';
            html+='</tr>';
        }
        document.getElementById('table').innerHTML = html;
    }, 500);

   
}

callFunc();






// let id = document.getElementById('id');
// let produtosHtml = document.getElementById('nome');

//foreach para percorrer o vetor | descobrir como passar o vetor completo para o html
// produto.forEach((produtos, index, produtosId) =>  {

//     console.log(index, produtos.productId, produtos.productName);

//     //inner html
//     id.innerHTML = produtos.productId;
//     produtosHtml.innerHTML = produtos.productName;
// });