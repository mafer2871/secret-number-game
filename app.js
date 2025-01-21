let secretNumber = 0;
let times = 0;
let generatedNumbersList = [];
let maxNumber = 10;


function initialConditions() {
    textAssignment('h1','SECRET NUMBER GAME');
    textAssignment('p',`Give a number between 1 and ${maxNumber}`);
    secretNumber = secretNumberGenerator();
    times = 1;
}

// Función para asignar valores a elementos del html
function textAssignment(item, text) {
    let htmlItem = document.querySelector(item);
    htmlItem.innerHTML = text;
    return;
}

function validateNumber() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    
    if (secretNumber === userNumber) {
        textAssignment('p',`You got it in ${times} ${(times === 1) ? 'time' : 'times'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#readNumber').setAttribute('disabled','true');
    } else {
        if (secretNumber < userNumber) {
            textAssignment('p','Secret number is lower');
        } else {
            textAssignment('p','Secret number is higher');
        }
        times++;
        cleanBox();
    }
    return;
}

function secretNumberGenerator() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;
    console.log(generatedNumber);
    console.log(generatedNumbersList);

    //Controlar que cuando se han generado todos los números, se detenga la ejecución recursiva
    if (generatedNumbersList.length() == maxNumber) {
        textAssignment('p',"There's no more numbers to play");

    } else {
 
        // Validar si el número ya se ha generado, si ya existe se debe volver a generar, sino guardar en la lista
        if (generatedNumbersList.includes(generatedNumber)) { 
            return secretNumberGenerator();
        } else {
            generatedNumbersList.push(generatedNumber);
            return generatedNumber;
        }   
    }
}

function cleanBox() {
    document.querySelector('#userValue').value = '';
}

function newGame() {
    // Limpiar campo de numero de usuario
    cleanBox();
    /* Cambiar mensaje a solicitud inicial, generar nuevo número, 
    deshabilitar boton de reinicio y limpiar contador */
    initialConditions();
    document.getElementById('readNumber').removeAttribute('disabled');
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


initialConditions();
