//OBS: Os dados que irei inserir aqui, sei que deveria
// vir de um banco de dados, porém envolveria o back
// end, e ainda não estudei!

let produto = document.querySelectorAll('.produto')
let addTo_Car = document.querySelectorAll('.addTo_Car')
for(let ind = 0; ind < addTo_Car.length; ind++){
    addTo_Car[ind].addEventListener('click', function(e){
        e.preventDefault()
        //localStorage.clear() 
        //pegando dados
   
        if(produto[ind].classList.contains(`itsOnCar`)){ 
            alert('Este produto já está em seu carrinho!')  
        }else{
            produto[ind].classList.add('itsOnCar')
            let href = document.querySelector(`.produto-${ind+1}`).getAttribute('href')
            let title = document.querySelectorAll(`.produto-${ind+1} .produto-apresentacao-title`)
            let valor = document.querySelectorAll(`.produto-${ind+1} .precos-produto`)
            let img = document.querySelectorAll(`.produto-${ind+1} .produto-img`)
            imgSRC= img[0].getAttribute('src')
            title1 = title[0].innerHTML
            valor1 = valor[0].innerHTML
                
            localStorage.setItem(`produto-${ind}-title`, title1)
            localStorage.setItem(`produto-${ind}-valor`, valor1)
            localStorage.setItem(`produto-${ind}-img`, imgSRC)
            localStorage.setItem(`produto-${ind}-href`, href)
            
            
            //CARREGA DADOS NO CARRINHO
            let carrinho = document.querySelector('.popup-carrinho')

            let car_cont = document.createElement('div')
            car_cont.setAttribute('class', "dados-carrinho")

            let car_link = document.createElement('a')
            car_link.setAttribute('class', 'prod-car')

            let car_img = document.createElement('img')
            car_img.setAttribute('class', 'img-car')
            

            let car_div_info = document.createElement('div')

            let car_title = document.createElement('p')
            car_title.setAttribute('class', 'title-car')

            let car_valor = document.createElement('p')
            car_valor.setAttribute('class', 'valor-car')

            let linha_divsao = document.createElement('hr')

            carrinho.appendChild(car_cont)
            car_cont.appendChild(car_link)
            car_link.appendChild(car_img)
            car_link.appendChild(car_div_info)
            car_div_info.appendChild(car_title)
            car_div_info.appendChild(car_valor)
            car_cont.appendChild(linha_divsao)

            car_link.setAttribute('href', localStorage.getItem(`produto-${ind}-href`))
            car_img.setAttribute('src', localStorage.getItem(`produto-${ind}-img`))
            car_title.textContent =  localStorage.getItem(`produto-${ind}-title`)
            car_valor.innerHTML = localStorage.getItem(`produto-${ind}-valor`)
        }
    })
}
function carregaCarrinho(){

}

/*
function carregaCarrinho(){

    //for(let ind = 1; ind < 10; ind++){
       
    
        let carrinho = document.querySelector('.popup-carrinho')

        let car_cont = document.createElement('div')
        car_cont.setAttribute('class', "dados-carrinho")

        let car_link = document.createElement('a')
        car_link.setAttribute('href', '#')
        car_link.setAttribute('class', 'prod-car')

        let car_img = document.createElement('img')
        car_img.setAttribute('class', 'img-car')
        

        let car_div_info = document.createElement('div')

        let car_title = document.createElement('p')
        car_title.setAttribute('class', 'title-car')

        let car_valor = document.createElement('p')
        car_valor.setAttribute('class', 'valor-car')

        let linha_divsao = document.createElement('hr')

        //if(localStorage.getItem(`produto-${ind}-title`) != null){// Checa se existe este dado no LocalStorage
            carrinho.appendChild(car_cont)
            car_cont.appendChild(car_link)
            car_link.appendChild(car_img)
            car_link.appendChild(car_div_info)
            car_div_info.appendChild(car_title)
            car_div_info.appendChild(car_valor)
            car_cont.appendChild(linha_divsao)

            car_img.setAttribute('src', localStorage.getItem(`produto-${ind}-img`))
            car_title.textContent =  localStorage.getItem(`produto-${ind}-title`)
            car_valor.innerHTML = localStorage.getItem(`produto-${ind}-valor`)

            
        //}
    //}
}
*/