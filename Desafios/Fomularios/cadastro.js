/*let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let cpf = document.getElementById('cpf')
let rg = document.getElementById('rg')
let tel = document.getElementById('tel')
let email = document.getElementById('email')
let prof = document.getElementById('profissao')
let sexo = document.getElementsByTagName('sexo')
let rua = document.getElementById('lagradouro')
let num_casa = document.getElementById('num-casa')
let cidade = document.getElementById('cidade')
let estado = document.getElementById('estado')
*/

var dig10 = 0
var dig11 = 0 

let cpf = document.getElementById('cpf')
let cpfvalidation = document.querySelector('.cpf')


let btn = document.querySelector('#submit')
btn.addEventListener('click', cadastro)

function cadastro(){
    validaCPF()
    if(cpf.value[9] == dig10 && cpf.value[10] == dig11){
        cpfvalidation.classList.remove('invalido')
        cpfvalidation.classList.add('valido')
    }else{
        cpfvalidation.classList.add('invalido')
        cpfvalidation.classList.remove('valido')
    }
}

function validaCPF(){
    cpf.value = cpf.value.replace(/[^0-9]/g,"")
    //DIGITO 10º
    let numSom= 10
    let num = 0
    let total = 0
    let resto = 0
    
    for(let ind = 0; ind <=8; ind++){
        num = cpf.value[ind] * numSom
        numSom--
        
        total = total + num
        resto = total % 11;
    }
    if(resto === 0 || resto === 1){
        dig10 = 0
    }else{
        dig10 = 11 - resto
    }

    //DIGITO 11º
    numSom = 10
    num = 0
    resto = 0
    total = 0

    for(let ind = 1; ind <=9; ind++){
        num = cpf.value[ind] * numSom
        numSom--
        
        total = num + total
        resto = total % 11;
    }
    if(resto === 0 || resto === 1){
        dig11 = 0
    }else{
        dig11 = 11 - resto
    }
    //console.log(dig10)
}



