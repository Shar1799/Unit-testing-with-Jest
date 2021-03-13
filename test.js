// importar la función sum del archivo app.js
const { sum } = require('./app.js');


// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//De euros a dólares
test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    //Llamamos a la función
    const dollars = fromEuroToDollar(3.5)

    //Resultado esperado
    const expected = 3.5 * 1.2; 
    
    //Prueba
    expect(expected).toBe(dollars);
});

//De dolanes a yenes 
test("dolares a yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen  } = require('./app.js')

    //Llamamos a la función
    const yen = fromDollarToYen(3.5);

    //Resultado esperado
    const expected = 537.1800000000001; 
    
    //Prueba
    expect(expected).toBe(yen);
});

//De yenes a libra esterlina 
test("yen to pound", function(){
    // importo la funcion desde app.js
    const { fromYenToPound  } = require('./app.js')

    //Llamamos a la función
    const pound = fromYenToPound(3.5);

    //Resultado esperado
    const expected = 0.0218921032056294; 
    
    //Prueba
    expect(expected).toBe(pound);
});