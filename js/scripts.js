let formato = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP'
})
function calcular() {
    let dolares = document.getElementById('dolares').value;
    if (dolares > 0) {
        document.getElementById('resultado').innerHTML = '<h4> El monto en CLP : ' + formato.format((dolares * 745)) + '</h4>';
    } else {
        document.getElementById('resultado').innerHTML = '<h4> El monto debe ser mayor que 0</h4>';
    }
}