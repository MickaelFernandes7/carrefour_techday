// Função que pega o valor do select e faz o direcionamento para as páginas 
function recuperarValorSelecionado(){
        var valorSelecionado = document.getElementById('pesquisa').value;
    
        console.log(valorSelecionado);

        if(valorSelecionado == 'nome'){
            window.open('../pesquisaNome.html');
            location.reload(1);
        }
    
        if(valorSelecionado == 'id'){
            window.open('../pesquisaId.html');
            location.reload(1);
            }
        
        if(valorSelecionado == 'marca'){
            window.open('../pesquisaMarca.html');
            location.reload(1);
        }
        
        if(valorSelecionado == 'todos'){
            window.open('../consultarprodutos.html');
            location.reload(1);
        }
    }