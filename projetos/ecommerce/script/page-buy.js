let img_mini = document.querySelectorAll('.buy-produto-img-mini')
let img_show =document.querySelector('.buy-produto-img-show')
let cont_img_show = document.querySelector('.img-show')
let srcIMG = ''

for(let ind = 0; ind < img_mini.length; ind++){
    img_mini[ind].addEventListener('click', function(){
        srcIMG = img_mini[ind].getAttribute('src')
        img_show.setAttribute('src', srcIMG)
    })
}
cont_img_show.addEventListener('mousemove', function(e){
    if(innerWidth > 700){
        img_show.style.width = '200%'
        img_show.style.height = '200%'
        cont_img_show.style.border = '1px solid lightgray'

        //Pega o left e o top do .buy-produto, que é pai do .img-show
        let cont_buy_X = document.querySelector('.buy-produto').offsetLeft
        let cont_buy_Y = document.querySelector('.buy-produto').offsetTop

        //Pega o left e o top do .img-show
        let cont_img_show_X = cont_img_show.offsetLeft
        let cont_img_show_Y = cont_img_show.offsetTop

        //Pega a posição do mouse em relação a tela, diminui o valor
        //do left e top do .buy-produto e do .img-show
        let x = e.pageX -cont_img_show_X - cont_buy_X
        let y = e.pageY - cont_img_show_Y -cont_buy_Y

    
        img_show.style.left = `-${x}px`;
        img_show.style.top = `-${y}px`
    }
})
cont_img_show.addEventListener('mouseout', function(){

    cont_img_show.style.border = 'none'
    img_show.style.width= '95%'
    img_show.style.height = '95%'

    img_show.style.left = `10px`;
    img_show.style.top = `10px`
})