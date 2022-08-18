let metrosCuadrados = document.getElementById("mCuadrados").value

const TipoEstructura = [
    {
        material: "Madera",
        precio: 100,
        tiempo: "1 semana cada 100 metros cuadrados",
    },
    {
        material: "Hierro",
        precio: 300,
        tiempo: "3 semanas cada 100 metros cuadrados",
    },
    {
        material: "Materiales reciclados",
        precio: 200,
        tiempo: "2 semanas cada 100 metros cuadrados",
    },
    {
        material: "Hormigón",
        precio: 400,
        tiempo: "3 semanas cada 100 metros cuadrados",
    }
]


let btn = document.getElementById("btnCalculo")
btn.addEventListener("click", calcular)
function calcular(){
    let materialElegido = document.getElementById("materialEstructura").value
    let precioMaterial = TipoEstructura.find((element) => element.material === materialElegido).precio;

    let precio = metrosCuadrados * precioMaterial;

    let divPrecio = document.getElementById("presupuestoEstimado")

    divPrecio.innerHTML = "<h2>El precio estimado es de: </h2>";
}

calcular();



