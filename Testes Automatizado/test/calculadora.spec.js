import Calculadora from "../src/Calculadora.js"

describe("Testes Calculadora.js", ()=>{
    test("Função soma(a+b) - dado 1,2, o resultado esperado é 3", ()=>{
        let calc = new Calculadora();
        expect(calc.soma(1,2)).toEqual(3);
    })
})