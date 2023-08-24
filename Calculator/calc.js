function getNumber(a){
    let inputValue = document.getElementById('textfield')
    inputValue.value += a
}

function allClear(){
    let inputValue = document.getElementById('textfield')
    inputValue.value = ''
}

function Delete(){
    let inputValue = document.getElementById('textfield')
    inputValue.value = inputValue.value.slice(0,-1)
}

function calculate(){
    let inputValue = document.getElementById('textfield') 
    inputValue.value = eval(inputValue.value)
}