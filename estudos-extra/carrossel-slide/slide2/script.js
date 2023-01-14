let prev =document.querySelector('.anterior')
let prox = document.querySelector('.posterior')

let troca_imagem = document.querySelector('.troca-imagem')

prev.addEventListener('click', function(){
    troca_imagem.style.margin ='0 0 0 0'
})
prox.addEventListener('click', function(){

    posi = troca_imagem.offsetLeft
    console.log(posi)
    if(posi !== 0){
        troca_imagem.style.margin = "0 0 0 0"
        troca_imagem.style.transform = 'transition: 0s'
        //troca_imagem.classList.add('esquerda')
    }else{
        troca_imagem.style.margin = "0 0 0 -100%"
        
    }
})