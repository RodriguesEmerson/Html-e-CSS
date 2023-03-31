 //1via
 let p_valor = document.querySelector('.p-valor');
 let txt_rec = document.querySelector('.text-recibo');
 let p_nome = document.querySelector('.p-nome');
 let p_tel = document.querySelector('.p-tel');
 let city_data = document.querySelector('.city-data');
 let p_formapag = document.querySelector('.comopagou');
 let primeiraVia = document.querySelector('.fist-via-content')
 let segundaVia = document.querySelector('.second-via-content');

 let dados = JSON.parse(localStorage.getItem('dados'));

 ;(function loadDatas(){

    txt_rec.innerHTML = `Recebi(emos) de <strong>${dados.nomePagador}</strong>
            a quantia de <strong>${dados.valor}</strong> referente à 
            <strong>${dados.referencia}</strong>.
            Para maior clareza firmo(amos) o presente recibo para que 
            produza os seus efeitos, dando plena, rasa e irrevogável quitação, pelo valor recebido.`;

    p_formapag.textContent = dados.formaPagamento;
    p_nome.textContent = dados.nomeEmissor;
    p_tel.textContent = dados.tel;
    city_data.textContent = `${dados.cidade}, ${dados.data}`;

    if(dados.duasVias) {
        segundaVia.innerHTML = primeiraVia.innerHTML
        segundaVia.style.visibility = 'visible';
    }
})();