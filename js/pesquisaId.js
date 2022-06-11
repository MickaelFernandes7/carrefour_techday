// Função que consome a API e faz a validação para trazer e exibir os daods do produto na tela
const enviar = async() => {     

        // input do formulário que recebe o nome do produto
        let idProd = document.querySelector('#idProd').value;

        // url da api   
        const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search`;

        // constante que consome a api
        const dados = await fetch(url, {
        mode: 'cors',   method: "GET",
        headers:{
            accept: "application/json",
            },
        });

        // conversão dos dados para json, e armazenamento em variavel
        const produtos = await dados.json();
    
        var html = "<table class='table table-responsive table-bordered text-center table-hover'> ";
            //ciração do cabeçalho da tabela
            html+='<tr>';
            html+='<th scope="col">'+ 'Identificador do Produto'+'<th>';
            html+='<th scope="col">'+'Nome do Produto'+'<th>';
            html+='<th scope="col">'+'Marca do Produto'+'<th>';
            html+='<th scope="col">'+'Identificador da Marca do Produto'+'<th>';
            html+='<th scope="col">'+'Referência do Produto'+'<th>';
            html+='<th scope="col">'+'Código da Referência do Produto'+'<th>';
            html+='<th scope="col">'+'Categoria do Produto'+'<th>';
            html+='<th scope="col">'+'Identificador da Categoria'+'<th>';
            html+='<th scope="col">'+'Link de Acesso ao Produto'+'<th>';
            html+='</tr>';

    setTimeout(() => {
        for(i = 0; i < produtos.length; i++){
            //criação dos campos da tabela

            // se o id do produto, for igual ao nome do produto no array, imprimir os dados da tabela, na tela.
            if(idProd == produtos[i].productId){
                html+='<tr id="tr">';
                html+='<td>'+ produtos[i].productId+'<td>';
                html+='<td>'+produtos[i].productName+'<td>';
                html+='<td>'+produtos[i].brand+'<td>';
                html+='<td>'+produtos[i].brandId+'<td>';
                html+='<td>'+produtos[i].productReference+'<td>';
                html+='<td>'+produtos[i].productReferenceCode+'<td>';
                html+='<td>'+produtos[i].categories+'<td>';
                html+='<td>'+produtos[i].categoryId+'<td>';
                html+='<td>'+produtos[i].link+'<td>';
                html+='</tr>';
                document.getElementById('table').innerHTML = html;     
            }
        }
    }, 1);
}





















// btn.addEventListener('click', () => {
//     teste();
// });

// alert('reload')
    // setTimeout(function() {
    //     window.location.reload(1);
    // }, 10);

    // let nome = nomeProd;

    // console.log(nome);

    // if(nome === 'nome'){
    //     window.open('../consultarprodutos.html')
    // } 