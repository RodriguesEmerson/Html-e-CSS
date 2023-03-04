//**********MENU MOBILE*/
let menu_button= document.querySelector('.menu-button')
let menu_mobile=document.querySelector('.menu-mobile')
let bar =document.querySelectorAll('.bar-menu-button')
let cont_m_mobile = document.querySelector('.cont-menu-mobile')

menu_button.addEventListener('click', function(){
    if(menu_button.classList.contains('open-menu')){
        menu_button.classList.remove('open-menu')
        cont_m_mobile.style.height="60px"
        
        bar[0].style.rotate="0deg"
        bar[1].style.margin=" 0 0 0 0"
        bar[2].style.rotate="0deg"
        bar[0].style.margin="0"
        bar[2].style.margin="0"
    }else{
        menu_button.classList.add('open-menu')
        cont_m_mobile.style.height="180px"
        
        bar[0].style.rotate="-47deg"
        bar[1].style.margin=" 0 0 0 -70px"
        bar[2].style.rotate="47deg"
        bar[0].style.margin="0 10px 0 0"
        bar[2].style.margin="0 10px 0 0"
    }
})