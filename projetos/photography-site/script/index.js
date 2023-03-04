let ind = 1
slider=document.getElementById('rs-1').checked = true

setInterval(() => {
    //nextImage()
}, 5000);

function nextImage(){
    ind++
    if(ind > 5){
        ind=1
    }
    slider=document.getElementById('rs-' + ind).checked = true
}

//*********/MODAL
let close_modal=document.querySelector('#modal-button')
let modal_content = document.querySelector('.modal-content')

let photo = document.querySelectorAll('.photo-galery')
let img=document.querySelector('#modal-img')
let modal = document.querySelector('.modal')
let srcIMG = ''
var largura_tela=window.innerWidth

for(let ind =0 ; ind < photo.length ; ind++){

    photo[ind].addEventListener('click', function(){      
        modal.classList.toggle('open')
        srcIMG = photo[ind].getAttribute('src')
        img.setAttribute('src', srcIMG)

        if(largura_tela<800){
            if(photo[ind].width > photo[ind].height){
                modal_content.style.height='55vw'
               
            }else{
                modal_content.style.height='100vw'
            }
        }else{
            modal_content.style.height='80vh'
        }
    })
}
close_modal.addEventListener('click', function(){
    modal.classList.toggle('open')
})
//*******VALIDANDO EMAIL DE FORMA SIMPLES */
var b_nl = document.querySelector('#buttom-newsletter')
b_nl.addEventListener('click', function(){
    function validateEmail(email){
        var re = /\S+@\S+\.\S+/
        return re.test(email)
        
    }
})