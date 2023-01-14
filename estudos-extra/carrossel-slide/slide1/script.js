let imagem = document.querySelector('.img-carrossel')
let imgSRC = ''
let numimg = 2
let prev = document.querySelector('.anterior')
let next = document.querySelector('.posterior')

next.addEventListener('click', function(){
    numimg++

    if(numimg>5){
        numimg = 1
    }

    imgSRC = `imagens/img-${numimg}.jpg`
    imagem.setAttribute('src', imgSRC)

    if(imagem.classList.contains('animacao')){
        imagem.classList.remove('animacao')
        imagem.classList.add('animacao2')
    }else{
        imagem.classList.remove('animacao2')
        imagem.classList.add('animacao')
    }
})

prev.addEventListener('click', function(){
    numimg--

    if(numimg<1){
        numimg=5
    }

    imgSRC = `imagens/img-${numimg}.jpg`
    imagem.setAttribute('src', imgSRC)

    if(imagem.classList.contains('animacao')){
        imagem.classList.remove('animacao')
        imagem.classList.add('animacao2')
    }else{
        imagem.classList.add('animacao')
        imagem.classList.remove('animacao2')
    }
})