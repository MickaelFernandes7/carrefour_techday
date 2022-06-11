// Função que pega o valor do select e faz o direcionamento para as páginas 
function recuperarValorSelecionado(){
        var valorSelecionado = document.getElementById('pesquisa').value;
        console.log(valorSelecionado);

        if(valorSelecionado == 'nome'){
            window.location.href = '../pesquisaNome.html';
            
        }
    
        if(valorSelecionado == 'id'){
            window.location.href = '../pesquisaId.html';
            
            }
        
        if(valorSelecionado == 'marca'){
            window.location.href ='../pesquisaMarca.html';
        }
        
        if(valorSelecionado == 'todos'){
            window.location.href = '../consultarprodutos.html'
            
        }
    }


function mensagemExtensao(){
    //Chamada do Modal de Dialog
    $('#modalDialog').modal('show');
    }