function menushow(){
    let menumobile =document.querySelector('.mobile-menu-nav')
    var nav = document.querySelector('.nav-bar')
    let img = document.querySelector('icon-mobile')
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        nav.style.height='50px'

    }else{
        menumobile.classList.add('open')
        nav.style.height='270px'
    }
}