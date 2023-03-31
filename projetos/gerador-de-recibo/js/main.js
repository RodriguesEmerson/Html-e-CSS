//---------------------------------------------------//----------------------------------------------------------------//
// Estou fazendo esse projeto, sabento que preciso   //     Não se passou nem 1 mes e meio e já estou                  //
// de mais conhecimento de JavaScript, mas estudei   // achando esse código muito ruim, vou refazê-lo                  //
// JS apenas 15 dias. Parei para estudar HTML5 e     // com os meus conecimentos atuais.                               //
// CSS3.                                             // Hoje é dia 31/03/2023.                                         //
// Esse código provavelmente                         //                                                                //
// vai me doer os olhas daqui uns 10 meses!          //                                                                //  
// Tabém dexei algumas funcinalidades faltando.      // *O código a que me refiro coloquei em script/primeira-versao*  //
//---------------------------------------------------//----------------------------------------------------------------//

let valor = document.getElementById('valor')
let nomePagador = document.getElementById('nomepag')
let cpfPagador = document.getElementById('cpfpag')
let referencia = document.getElementById('referencia')
let cidade = document.getElementById('cidade')
let data = document.getElementById('data')
let nomeEmissor = document.getElementById('nomeemiss')
let tel = document.getElementById('tel')
let cpfEmissor = document.getElementById('cpfemiss')
let pagamento = document.getElementsByName('formpag')
let checkDuasVias = document.getElementById('checkvias')
let btn_submit = document.getElementById('submit')

// let p_title = document.querySelector('.p-title')

//CARREGAR DATA DE HOJE
function geraData(){
    let gdata = new Date()
    let dia = (gdata.getDate().toString().padStart(2, '0'));
    let mes = (gdata.getMonth()+1).toString().padStart(2, '0');
    let ano = gdata.getFullYear()

    data.value = `${dia}/${mes}/${ano}`
}


function gerarRecibo(e){
    e.preventDefault()
    localStorage.clear()

    const duasVias = checkDuasVias.checked ? true : false;

    let formaPagamento;
    const pagamentosAceitos = ['Dinheiro', 'Pix', 
                               'Trasnferência/Depósito', 
                               'Cartão de Crédito/Débito'];
    for(let i = 0; i < 4 ; i++){
        if(pagamento[i].checked) formaPagamento = pagamentosAceitos[i];
    }

    const datas = {
        valor: valor.value,
        nomePagador: nomePagador.value,
        cpfPagador: cpfPagador.value,
        referencia: referencia.value,
        cidade: cidade.value,
        data: data.value,
        nomeEmissor: nomeEmissor.value,
        tel: tel.value,
        cpfEmissor: cpfEmissor.value,
        formaPagamento: formaPagamento,
        duasVias: duasVias,
    }

    const dados = JSON.stringify(datas)
    localStorage.setItem('dados', dados)

    //Abre a página do recibo em outra janela
    let url = 'https://rodriguesemerson.github.io/Html-e-CSS/projetos/gerador-de-recibo/visualizar-recibo'
    // let url = 'http://127.0.0.1:5501/projetos/gerador-de-recibo/visualizar-recibo.html'
    window.open(url,'_blank')
    window.focus();
};

btn_submit.addEventListener('click', gerarRecibo);
