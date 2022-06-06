function recuperarValorSelecionado(){
        var valorSelecionado = document.getElementById('pesquisa').value;

        console.log(valorSelecionado);

        if(valorSelecionado == 'nome'){
            alert('Nome dos produtos');
        }
    
        if(valorSelecionado == 'id'){
                alert('Identificador do Produto');
            }
        
        if(valorSelecionado == 'marca'){
                alert('Marca do Produto');
        }
        
        if(valorSelecionado == 'todos'){
            window.open('../consultarprodutos.html');
        }
    }

    const url = '../consultarprodutos.html';