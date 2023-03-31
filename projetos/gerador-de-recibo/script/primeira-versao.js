let valor = document.getElementById('valor')
let nomepag = document.getElementById('nomepag')
let cpfpag = document.getElementById('cpfpag')
let referencia = document.getElementById('referencia')
let cidade = document.getElementById('cidade')
let data = document.getElementById('data')
let nomeemiss = document.getElementById('nomeemiss')
let tel = document.getElementById('tel')
let cpfemiss = document.getElementById('cpfemiss')
let formpag = document.getElementsByName('formpag')
let vias = document.getElementById('checkvias')
let btn_submit = document.getElementById('submit')

let p_title = document.querySelector('.p-title')

//CARREGAR DATA DE HOJE
function geraData(){
    let gdata = new Date()
    let dia = gdata.getDate()
    let mes = gdata.getMonth()
    let ano = gdata.getFullYear()
    mes = mes + 1
    if(mes<10){
        mes = `0${mes}`
    }
    data.value = `${dia}/${mes}/${ano}`

    localStorage.clear()
}

btn_submit.addEventListener('click', function(e){
    e.preventDefault()//normalmente isso não poderia, pois tira a função padrão do submit.

    localStorage.clear()

    localStorage.setItem('valor', valor.value);
    localStorage.setItem('nomepag', nomepag.value);
    localStorage.setItem('cpfpag', cpfpag.value);
    localStorage.setItem('referencia', referencia.value)
    localStorage.setItem('cidade', cidade.value)
    localStorage.setItem('data', data.value)
    localStorage.setItem('nomeemiss', nomeemiss.value)
    localStorage.setItem('tel', tel.value)
    localStorage.setItem('cpfemiss', cpfemiss.value)

    if(vias.checked){
        localStorage.setItem('vias', '2')
    }else{
        localStorage.setItem('vias', '1')
    }

    if(formpag[0].checked){
        localStorage.setItem('formpag', 'Dinheiro')
    }else if(formpag[1].checked){
         localStorage.setItem('formpag', 'Pix')
    }else if(formpag[2].checked){
         localStorage.setItem('formpag', 'Trasnferência/Depósito')
    }else{
         localStorage.setItem('formpag', 'Cartão de Crédito/Débito')
    }



    //ABRIR VISUALIZAÇÃO DE RECIBO EM NOVA GUIA
    let url = 'https://rodriguesemerson.github.io/Html-e-CSS/projetos/gerador-de-recibo/visualizar-recibo'

    window.open(url,'_blank')
    window.focus();
})

function gerarRecibo(){
    //1via
    let p_valor = document.querySelector('.p-valor')
    let txt_rec = document.querySelector('.text-recibo')
    let p_nome = document.querySelector('.p-nome')
    let p_tel = document.querySelector('.p-tel')
    let city_data = document.querySelector('.city-data')
    let p_formapag = document.querySelector('.comopagou')

    p_valor.innerHTML = `R$ ${localStorage.getItem('valor')}`;

    txt_rec.innerHTML = `Recebi(emos) de <strong>${localStorage.getItem('nomepag')}</strong> a quantia de <strong>${localStorage.getItem('valor')}</strong> referente à <strong>${localStorage.getItem('referencia')}</strong>.
    Para maior clareza firmo(amos) o presente recibo para que produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.`;

    
    p_formapag.innerHTML = localStorage.getItem('formpag')
    p_nome.innerHTML = localStorage.getItem('nomeemiss')
    p_tel.innerHTML = localStorage.getItem('tel')
    city_data.innerHTML = localStorage.getItem('cidade') + ', ' + localStorage.getItem('data')


    //2via*********************************************************************
    let qvias =localStorage.getItem('vias')
    if(qvias == 2){
        let second_via = document.querySelector('.second-via-content')
        let p_valor_second = document.querySelector('.p-valor-second')
        let txt_rec_second = document.querySelector('.text-recibo-second')
        let p_nome_second = document.querySelector('.p-nome-second')
        let p_tel_second = document.querySelector('.p-tel-second')
        let p_city_data_second = document.querySelector('.p-city-data-second')
        let comopagou_second = document.querySelector('.comopagou-second')

        second_via.style.visibility = 'visible'
        p_valor_second.innerHTML = p_valor.innerHTML;

        txt_rec_second.innerHTML = txt_rec.innerHTML;
        
        comopagou_second.innerHTML = p_formapag.innerHTML;
        p_nome_second.innerHTML = p_nome.innerHTML;
        p_tel_second.innerHTML = p_tel.innerHTML;
        p_city_data_second.innerHTML = city_data.innerHTML;
    }
    
}