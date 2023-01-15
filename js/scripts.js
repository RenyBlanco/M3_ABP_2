
// Ejercicio Numero

function revisar() {
    let numero = document.getElementById('numero').value;
    if ((numero > 5 && numero < 15) || (numero == 55) || (numero == 70)) {
        document.getElementById('resultado').innerHTML = '<h4> El número '+numero+' tiene opciones de ganar</h4>';
    } else {
        document.getElementById('resultado').innerHTML = '<h4> El número '+numero+' no es favorable</h4>';
    }
}

// Ejercicio Bisiesto
function bisiesto(){
    let ano = document.getElementById('ano').value;
    if (((ano % 4 == 0) && (ano % 100 != 0 )) || (ano % 400 == 0)){
        document.getElementById('resultado').innerHTML = '<h4> El año '+ano+' es Bisiesto</h4>';
    }else {
        document.getElementById('resultado').innerHTML = '<h4> El año '+ano+' no es Bisieso</h4>';
    }
}

//Ejercicio Sets
function sets(){
    let a = document.getElementById('ganados_a').value;
    let b = document.getElementById('ganados_b').value;
    if ((a > 7) || (b > 7))  {
        document.getElementById('resultado').innerHTML = '<h4> El Resultado es Inválido!</h4>';
        return
    }
    if(a==b){
        document.getElementById('resultado').innerHTML = '<h4> El Set aún no termina!</h4>';
        return
    }
    if((a >= 5) && ((a-b)==2)){
        document.getElementById('resultado').innerHTML = '<h4> El Ganador es el Jugador A!</h4>';
        return
    }
    if((b >= 5 )&& ((b-a)==2)){
        document.getElementById('resultado').innerHTML = '<h4> El Ganador es el Jugador B!</h4>';
        return
    }
    if(((a-b > 2) && (a > 5)) || ((b-a > 2) && (b > 5))) {
        document.getElementById('resultado').innerHTML = '<h4> El Resultado es Inválido!</h4>';
        return
    }
    if(((a-b > 2) && (a < 5)) || ((b-a > 2) && (b < 5))) {
        document.getElementById('resultado').innerHTML = '<h4> El Set aún no termina!</h4>';
        return
    }
}