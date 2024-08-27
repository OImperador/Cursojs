const bracketNotation = {
    prop1: "Sou uma propriedade que será acessada usando breackt notation.",
    metado: function () {
        return "Sou o retorno de um métado, ou seja, uma função dentro de um objeto."
    }
}

// Acessando os elementos de um objeto por mio do bracket notation:
console.log(bracketNotation['prop1'])
console.log(bracketNotation['metado']())

// Declarando novos componentes do objeto:
bracketNotation['prop2'] = 'Sou outra propriedade com o valor do tipo string.'
bracketNotation['metado2'] = () => 'Sou o retorno de outro métado'

console.log(bracketNotation['prop2'])
console.log(bracketNotation['metado2']())