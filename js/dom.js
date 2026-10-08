function calcular(){
    let precioPizza = parseInt(document.getElementById("pizzas").value);
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad <=0){
        document.getElementById("total").innerText="Por favor, ingrese una cantidad válida.";
        return;
    }

    let maiz = parseInt(document.getElementById("maiz").value);
    let queso_extra = parseInt(document.getElementById("queso_extra").value);
    let tocineta = parseInt(document.getElementById("tocineta").value);
    let champiñones = parseInt(document.getElementById("champiñones").value);

    let totalExtras = maiz + queso_extra + tocineta + champiñones;

    let precioPorPizza = precioPizza + totalExtras;

    let totalPagar = precioPorPizza * cantidad;

    document.getElementById("total").innerText = "El total a pagar es: $" + totalPagar.toLocaleString("es-CO");
}