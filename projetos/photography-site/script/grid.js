//LIKE BUTTON
let like = document.querySelectorAll('.b-like')

for(let ind =0; ind < like.length; ind++){
    like[ind].addEventListener('click', function(){
        like[ind].classList.toggle('liked')
    })
}

//GRID
let count_view = document.querySelectorAll('.count-view')
let modal = document.querySelector('.modal-grid')
let img_content = document.querySelectorAll('.cont-img-grid')
let image = document.querySelectorAll('.img-grid')
let image_modal = document.querySelector('#img-modal-grid')
let modal_cont = document.querySelector('.p-modal-content')
let srcIMG = "";

//Ajustar Grid
function AjustGrid(){
    for(let ind = 0; ind < image.length; ind++){
        srcIMG = image[ind].getAttribute('src')
        image_modal.setAttribute('src', srcIMG)
        if(image_modal.width < image_modal.height){
            img_content[ind].classList.add('h-2')
        }
    }
}

for(let i = 0; i < image.length; i++){
    image[i].addEventListener('click', function(){
        modal_cont.classList.toggle('open-modal')
        srcIMG = image[i].getAttribute('src')
        image_modal.setAttribute('src', srcIMG)

        let count =count_view[i].innerHTML
        let countN= Number(count)

        count_view[i].innerHTML= countN + 1

        if(window.innerWidth < 1200){
            if(image_modal.width > image_modal.height){
                modal.style.height = '55vw'
            }else{
                modal.style.height = '80vh'
            }
        }
    })
}
let bt_close = document.querySelector('.bt-close')
bt_close.addEventListener('click', function(){
    modal_cont.classList.toggle('open-modal')
})