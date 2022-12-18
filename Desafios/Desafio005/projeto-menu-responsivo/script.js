menushow = document.querySelector('.option-menu-mobile')
icone = document.querySelector('#icon')
mobilemenu= document.querySelector('.mobile-menu')

function carregar(){
    if (menushow.classList.contains('open')){
        menushow.classList.remove('open')
        icone.src="menu-icon.png"
        mobilemenu.style.height= '29px'
    }else{
        menushow.classList.add('open')
        icone.src="menu-icon-x.png"
        mobilemenu.style.height= '160px'
    }
}