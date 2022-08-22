// comece a criar a sua função add na linha abaixo

function add (num1, num2) {
    let resultado = num1 + num2
    return resultado
    
}
console.log (add (3,5))
// descomente a linha seguinte para testar sua função
// console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo

function multiply (num1, num2) {
    let resultado = 0
    for (let i=0; i<num2; i++) {
        resultado = add (resultado, num1)
    }

    return resultado
}

console.log (multiply(3, 5))


// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power (num1, num2) {
    let resultado = num1
    for (let i=1; i<num2; i++) {
        resultado = multiply (resultado, num1)
    }

    return resultado
}
console.log (power(3, 4))

// descomente a linha seguinte para testar sua função
// console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial (num) {
    let resultado = 1
    for (let i= num; i>=1; i--) {
        resultado = multiply (i, resultado)
    }

    return resultado

}

console.log (factorial(5))

// descomente a linha seguinte para testar sua função
// console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
