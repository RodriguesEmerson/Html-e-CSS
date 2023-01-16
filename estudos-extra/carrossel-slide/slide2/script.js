let prev =document.querySelector('.anterior')
let prox = document.querySelector('.posterior')

let imgONE = document.querySelector('#img-ti-1')
let imgTWO = document.querySelector('#img-ti-2')

let troca_imagem = document.querySelector('.troca-imagem')

var numIMG = 1
function carregaImagens(){
    imgONE.setAttribute('src', `imagens/img-${numIMG}.jpg`)
    imgTWO.setAttribute('src', `imagens/img-${numIMG + 1}.jpg`)
}

prev.addEventListener('click', function(){
//imagens/img-2.jpg
    
    let srcIMG_ONE = imgONE.getAttribute('src')
    
    let posi = troca_imagem.offsetLeft
    if(posi === 0){
        numIMG--
        if(numIMG<1){
            numIMG = 5
        }

        imgONE.setAttribute('src', `imagens/img-${numIMG}.jpg`)

        imgTWO.setAttribute('src', srcIMG_ONE)
        

        //Adiciona o efeito de transição
        if(troca_imagem.classList.contains('esquerda')){
            troca_imagem.classList.remove('esquerda', 'direita', 'direita2')
            troca_imagem.classList.add('esquerda2')
        }else{
            troca_imagem.classList.add('esquerda')
            troca_imagem.classList.remove('esquerda2', 'direita', 'direita2')
        }
    }else{
        numIMG--
        if(numIMG<1){
            numIMG = 5
        }
        troca_imagem.classList.remove('direita', 'direita2')
        troca_imagem.classList.add('esquerda')
    }

 
})
prox.addEventListener('click', function(){

    let imgSRC_TWO = imgTWO.getAttribute('src')

    let posi = troca_imagem.offsetLeft
    if(posi != 0){

        numIMG++
        if(numIMG>5){
            numIMG = 1
        }

        imgONE.setAttribute('src', imgSRC_TWO)
        imgTWO.setAttribute('src', `imagens/img-${numIMG}.jpg`)

        troca_imagem.style.margin = '0 0 0 0'
         if(troca_imagem.classList.contains('direita')){
           troca_imagem.classList.remove('direita', 'esquerda', 'esquerda2')
           troca_imagem.classList.add('direita2')
         }else{
        troca_imagem.classList.add('direita')
        troca_imagem.classList.remove('direita2', 'esquerda', 'esquerda2')
         }
        
    }else{
        numIMG++
        if(numIMG>5){
            numIMG = 1
        }
        troca_imagem.classList.remove('esquerda', 'esquerda2')
        troca_imagem.classList.add('direita')
        
    }
})