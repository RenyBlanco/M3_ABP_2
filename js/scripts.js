let formato = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP'
})

// Ejercicio Convertidor

function calcular() {
    let dolares = document.getElementById('dolares').value;
    if (dolares > 0) {
        document.getElementById('resultado').innerHTML = '<h4> El monto en CLP : ' + formato.format((dolares * 745)) + '</h4>';
    } else {
        document.getElementById('resultado').innerHTML = '<h4> El monto debe ser mayor que 0</h4>';
    }
}

// Ejercicio Beneficio
function postular(){
    let uf = 30000;
    if(document.getElementById("edad").value < 18){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por ser menor de edad</h4>';
        return
    }
    if(document.getElementById("monto").value < (4*uf)){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por no poseer el monto ahorrado mínimo</h4>';
        return
    }
    var postula;
    document.getElementById("postula").checked ? postula = true : postula = false;
    if(!postula && document.getElementById("edad").value < 60){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por no postular con su conyugé o algún hijo(a)</h4>';
        return
    }
    if(document.getElementById("ingreso").value < (7*uf)){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por que su ingreso está por debajo del requerido</h4>';
        return
    }
    if(document.getElementById("ingreso").value > (25*uf)){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por que su ingreso está por encima del requerido</h4>';
        return
    }
    if(document.getElementById("casa").checked){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por que ya posee una casa</h4>';
        return
    }
    if(document.getElementById("es").checked){
        document.getElementById('resultado').innerHTML = '<h4> Usted No puede ser beneficiario, por que ya posee un beneficio del MINVU</h4>';
        return
    }
}