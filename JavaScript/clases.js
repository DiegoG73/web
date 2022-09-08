class Coche {
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad(){
        this.velocidad += 1
    }
    reducirVelocidad(){
        this.velocidad -= 1
    }
}

class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad){
        super(modelo, velocidad, antiguedad)
        this.altura = 5
    }

    mostrarAltura(){
        return "La altura del bus es: " + this.altura
    }
}

var autobus1 = new Autobus('Mercedes Benz', 400, 2020)
var autobus2 = new Autobus('Pegasus', 450, 2022)

var coche1 = new Coche('BMW', 200, 2019)
var coche2 = new Coche('Mercedes Benz', 500, 2022)
var coche3 = new Coche('Ferrari', 1000, 2023)
var coche4 = new Coche('Lamborghini', 7000, 2017)

console.log(coche1, coche2, coche3, coche4)
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
console.log(coche1)

console.log(autobus1, autobus2)