// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(monto){
    //Conversión
    let dollarAeuros = monto * 1.2;
    let resultado = dollarAeuros * 127.9;
    //Se retorna el valor de yen
    return resultado;
}

const fromYenToPound = function(monto2){
    // convert the given valueInEuro to dollars
    
    let yenAeuros = monto2 / 127.9;
    let resultado2 = yenAeuros * 0.8;
    //return the doller value
    return resultado2;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };