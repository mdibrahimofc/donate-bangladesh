function id(id){
    return document.getElementById(id)
}

function textNumber(id){
    return parseFloat(document.getElementById(id).innerText)
}

function inputNumber(id){
    return parseFloat(document.getElementById(id).value);
}

function createElement(element){
    return document.createElement(element)
}