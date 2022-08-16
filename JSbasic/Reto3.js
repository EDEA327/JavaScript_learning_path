function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}
var n = prompt("Ingrese el numero de autos");
var autos = [n];
for(var i = 0 ; i < n ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
}
for(var i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}