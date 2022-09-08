var nombre = "Diego Guzmán"
var altura = 165

//Así concatenamos
var concatenación = nombre + " " + altura
console.log(concatenación)

//Condicionales
if(altura >= 170){
    console.log("Estás bien pinche chaparro hijo de la chingada")
}else{
    console.log("Estás bien pinche alto, qué tal el clima allá arriba?")
}

//Bucles
for(var i = 2000; i < 2023; i++){
    console.log("Estamos en el año: " + i)
}

//Array
var nombres = ['Diego', 'Eduardo', 'Rogelio']
console.log(nombres[0])
//Así recorremos los elementos:
for(i = 0; i < nombres.length; i++){
    //                    Así concatenamos un trozo de html
    console.log(nombres[i] + '<br/>')
}
//Callback functions:
nombres.forEach((nombre) => {
    console.log(nombre + '<br/>')
})

//Objetos JSON o literales
var coche = {
    modelo: 'Mercedes Clase A',
    maxima: 500,
    antiguedad: 2020
}

//Promesas
var saludar = new Promise((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola, muy buenas a todos"
        saludo = false

        if(saludo){
            resolve(saludo)
        }else{
            reject("no hay saludo disponible")
        }
    }, 2000)
})

saludar.then(resultado => {
    console.log(resultado)
})
.catch(error => {
    console.log(error)
})