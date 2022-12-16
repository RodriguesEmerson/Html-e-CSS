function menushow(){
    let menumobile =document.querySelector('.mobile-menu-nav')
    var nav = document.querySelector('.nav-bar')
    let img = document.querySelector('icon-mobile')
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        nav.style.width='60px'
        nav.style.height='80px'

    }else{
        menumobile.classList.add('open')
        nav.style.width='200px'
        nav.style.height='270px'
        img.src='imagens/icon-mobile-white.png'
    }
}