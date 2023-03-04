let mobile_btn = document.querySelector('.menu-mobile-icon')
mobile_btn.addEventListener('click', function(){
    let bar1 = document.querySelectorAll('.menu-mobile-icon-bar')[0]
    let bar2 = document.querySelectorAll('.menu-mobile-icon-bar')[1]
    let bar3 = document.querySelectorAll('.menu-mobile-icon-bar')[2]
    let menu = document.querySelector('.menu')
    
    posi_menu = menu.offsetLeft
    if (posi_menu != 0){
        bar1.style.rotate = ' -46deg'
        bar2.style.margin = '0 0 0 -100px'
        bar3.style.rotate = ' 46deg'
        menu.style.left = '0'
    }else{
        bar1.style.rotate = ' 0deg'
        bar2.style.margin = '0 0 0 0'
        bar3.style.rotate = ' 0deg'
        menu.style.left = '-100%'
    }
})

let btn_carrinho = document.querySelector('.car-buy')
btn_carrinho.addEventListener('click', function(){
    let popup_carrinho = document.querySelector('.popup-carrinho')
    

    if (btn_carrinho.classList.contains('open')){
        btn_carrinho.classList.remove('open')
        popup_carrinho.style.right = '-310px'
        //alert (posi_car)
    }else{
        btn_carrinho.classList.add('open')
        popup_carrinho.style.right = '0'
        //alert (posi_car)
    }
})