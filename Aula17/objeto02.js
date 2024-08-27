const dotNotation = { 
    prop1: "Sou uma propriedade que será acessada usando dot notation",
    metado: function () {
        return "Sou o retorno de um métado, ou seja, uma função dentro de um objeto."
    }
}
console.log(dotNotation.prop1)
console.log(dotNotation.metado())

// Acessando a propriedade e o método:
// console.log( dotNotation.prop1 )
// console.log( dotNotation.metodo )

// Declarando uma nova propriedade e depois um novo métado
dotNotation.prop2 = "Sou outra propriedade com valor tipo string"
dotNotation.metado2 = () => "Sou o retorno de outro métado."

// Acessando os novos componentes:
console.log(dotNotation.prop2)
console.log(dotNotation.metado2())