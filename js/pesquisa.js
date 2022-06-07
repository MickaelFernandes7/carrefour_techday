function recuperarValorSelecionado(){
        var valorSelecionado = document.getElementById('pesquisa').value;

        console.log(valorSelecionado);

        if(valorSelecionado == 'nome'){
            window.open('../pesquisaNome.html')
        }
    
        if(valorSelecionado == 'id'){
            window.open('../pesquisaId.html')
            }
        
        if(valorSelecionado == 'marca'){
                alert('Marca do Produto');
        }
        
        if(valorSelecionado == 'todos'){
            window.open('../consultarprodutos.html');
        }
    }

    const url = '../consultarprodutos.html';