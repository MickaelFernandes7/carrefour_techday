// Função que pega o valor do select e faz o direcionamento para as páginas 
function recuperarValorSelecionado(){
        var valorSelecionado = document.getElementById('pesquisa').value;
        let reload = location.reload(1);
        console.log(valorSelecionado);

        if(valorSelecionado == 'nome'){
            window.open('../pesquisaNome.html');
            reload;
        }
    
        if(valorSelecionado == 'id'){
            window.open('../pesquisaId.html');
            reload;
            }
        
        if(valorSelecionado == 'marca'){
            window.open('../pesquisaMarca.html');
            reload;
        }
        
        if(valorSelecionado == 'todos'){
            window.open('../consultarprodutos.html');
            reload;
        }
    }