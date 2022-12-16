function menushow(){
    let menumobile =document.querySelector('.mobile-menu-nav')
    var nav = document.querySelector('.nav-bar')
    let img = document.querySelector('#icon-mobile')
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        nav.style.height='65px'
        img.src="imagens/icon-mobile-white.png"
    }else{
        menumobile.classList.add('open')
        nav.style.height='285px'
        img.src="imagens/icon-mobile-x.png"
    }
}