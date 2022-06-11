    const listaProutos = async() => {
        const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search`;
        // fetch(url).then(response => response.json()).then(console.log);
        const dados = await fetch(url, {
        mode: 'cors',method: "GET",
        headers:{
            accept: "application/json",
            },
        });
        const produtos = await dados.json();
        
        console.log(produtos);

        var html = "<table class='table table-responsive table-bordered text-center table-hover'>";
            //ciração do cabeçalho da tabela
            html+='<tr>';
            html+='<th scope="col">'+ 'Id do Produto'+'<th>';
            html+='<th scope="col">'+'Nome do Produto'+'<th>';
            html+='<th scope="col">'+'Marca do Produto'+'<th>';
            html+='<th scope="col">'+'Id da Marca do Produto'+'<th>';
            html+='<th scope="col">'+'Referência do Produto'+'<th>';
            html+='<th scope="col">'+'Código da Referência do Produto'+'<th>';
            html+='<th scope="col">'+'Categoria do Produto'+'<th>';
            html+='<th scope="col">'+'Identificador da Categoria'+'<th>';
            html+='<th scope="col">'+'Link de Acesso ao Produto'+'<th>';
            html+='</tr>';

    setTimeout(() => {
        for(i = 0; i < produtos.length; i++){
            //criação dos campos da tabela
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
        }
        document.getElementById('table').innerHTML = html;
    }, 10);
    }

    listaProutos();