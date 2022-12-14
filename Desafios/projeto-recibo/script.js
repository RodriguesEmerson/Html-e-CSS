data1 = new Date()
dia = data1.getDay()
mes = data1.getMonth()
ano = data1.getFullYear()

function carregar(){
    campodata= document.getElementById('data')
if (dia<10){
    dia = `0${dia}`
}
campodata.value = `${dia}/${mes}/${ano}`
}