const boton = document.querySelector('#check-btn')

function invertirCadena() {

    let palabra = limpiarCadena();
    let palabraInv = palabra.split('').reverse().join('');
    return palabraInv;

}
function checkInput(){
    let palabra = document.querySelector('#text-input').value;
    if(palabra === ""){
        alert("Please input a value")
    }
}
function limpiarCadena(){
    let palabra = document.querySelector('#text-input').value;
    let palabraLimpia = palabra.trim().toLowerCase()
    palabraLimpia = palabraLimpia.replace(/[^a-zA-Z0-9]/g, '');
    return palabraLimpia;

}
function compareStrings (){
    const valorInput = document.querySelector('#text-input').value;
    let cadenaInvertida = invertirCadena()
    palabra = limpiarCadena()
    let resultado = document.getElementById('result');
    if(palabra === cadenaInvertida){
        return resultado.textContent = `'${valorInput}' is a Palindrome`;
    } else {
        return resultado.textContent = `'${valorInput}' is not a Palindrome`;
    }
}

boton.addEventListener('click', (e) => {
    e.preventDefault()
    
    checkInput()
    compareStrings()
})

