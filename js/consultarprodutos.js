    const listaProutos = async() => {
        const url = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search`;
        // fetch(url).then(response => response.json()).then(console.log);
        const dados = await fetch(url);
        const produtos = await dados.json();
        console.log(produtos);

        var html = "<table border='1'> ";
            //ciração do cabeçalho da tabela
            html+='<tr>';
            html+='<th>'+ 'Id do Produto'+'<th>';
            html+='<th>'+'Nome do Produto'+'<th>';
            html+='<th>'+'Marca do Produto'+'<th>';
            html+='<th>'+'Id da Marca do Produto'+'<th>';
            html+='<th>'+'Referência do Produto'+'<th>';
            html+='<th>'+'Código da Referência do Produto'+'<th>';
            html+='<th>'+'Identificador da Categoria'+'<th>';
            html+='</tr>';

    setTimeout(() => {
        for(i = 0; i < produtos.length; i++){
            //criação dos campos da tabela
            html+='<tr>';
            html+='<td>'+ produtos[i].productId+'<td>';
            html+='<td>'+produtos[i].productName+'<td>';
            html+='<td>'+produtos[i].brand+'<td>';
            html+='<td>'+produtos[i].brandId+'<td>';
            html+='<td>'+produtos[i].productReference+'<td>';
            html+='<td>'+produtos[i].productReferenceCode+'<td>';
            html+='<td>'+produtos[i].categoryId+'<td>';
            html+='</tr>';
        }
        document.getElementById('table').innerHTML = html;
    }, 10);
    }

    listaProutos();