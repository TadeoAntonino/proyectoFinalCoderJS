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

const TipoPiso = [
    {
        material: "Madera",
        precio: 120,
        tiempo: "1 semana cada 100 metros cuadrados",
    },
    {
        material: "Porcelanato",
        precio: 150,
        tiempo: "3 semanas cada 100 metros cuadrados",
    },
    {
        material: "Mosaicos",
        precio: 90,
        tiempo: "2 semanas cada 100 metros cuadrados",
    },
    {
        material: "Cemento pulido",
        precio: 75,
        tiempo: "3 semanas cada 100 metros cuadrados",
    }
]

const TipoPared = [
    {
        material: "Madera",
        precio: 70,
        tiempo: "1 semana cada 100 metros cuadrados",
    },
    {
        material: "Ladrillo visto",
        precio: 200,
        tiempo: "3 semanas cada 100 metros cuadrados",
    },
    {
        material: "Durlock",
        precio: 100,
        tiempo: "2 semanas cada 100 metros cuadrados",
    },
    {
        material: "Piedra",
        precio: 150,
        tiempo: "3 semanas cada 100 metros cuadrados",
    }
]

const TipoTecho = [
    {
        material: "Chapa",
        precio: 100,
        tiempo: "1 semana cada 100 metros cuadrados",
    },
    {
        material: "Tejas",
        precio: 200,
        tiempo: "3 semanas cada 100 metros cuadrados",
    },
    {
        material: "Losa",
        precio: 150,
        tiempo: "2 semanas cada 100 metros cuadrados",
    },
]

let metrosCuadrados = document.getElementById("mCuadrados").value

let btnEstructura = document.getElementById("btnEstructura")
btn.addEventListener("click", agregarEstructura)
function agregarEstructura(e){
    e.preventDefault()
   //let metrosCuadrados = document.getElementById("mCuadrados").value
    let materialElegido = document.getElementById("materialEstructura").value
    
    let precioMaterial = TipoEstructura.find((element) => element.material === materialElegido).precio;
    
    let precio = metrosCuadrados * precioMaterial;

    //let divPrecio = document.getElementById("presupuestoEstimado")

    //divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precio}</h2>`;

    return precio;
}

agregarEstructura();

let btnPiso = document.getElementById("btnPiso")
btn.addEventListener("click", agregarPiso)
function agregarPiso(e){
    e.preventDefault()
    //let metrosCuadrados = document.getElementById("mCuadrados").value
    let materialElegido = document.getElementById("materialPiso").value
    
    let precioMaterial = TipoEstructura.find((element) => element.material === materialElegido).precio;
    
    let precio = metrosCuadrados * precioMaterial;

    //let divPrecio = document.getElementById("presupuestoEstimado")

    //divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precio}</h2>`;

    return precio;
}

agregarPiso();

let btnPared = document.getElementById("btnPared")
btn.addEventListener("click", agregarPared)
function agregarPared(e){
    e.preventDefault()
    //let metrosCuadrados = document.getElementById("mCuadrados").value
    let materialElegido = document.getElementById("materialPared").value
    
    let precioMaterial = TipoEstructura.find((element) => element.material === materialElegido).precio;
    
    let precio = metrosCuadrados * precioMaterial;

    //let divPrecio = document.getElementById("presupuestoEstimado")

    //divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precio}</h2>`;

    return precio;
}

agregarPared();

let btnTecho = document.getElementById("btnTecho")
btn.addEventListener("click", agregarTecho)
function agregarTecho(e){
    e.preventDefault()
    //let metrosCuadrados = document.getElementById("mCuadrados").value
    let materialElegido = document.getElementById("materialTecho").value
    
    let precioMaterial = TipoEstructura.find((element) => element.material === materialElegido).precio;
    
    let precio = metrosCuadrados * precioMaterial;

    //let divPrecio = document.getElementById("presupuestoEstimado")

    //divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precio}</h2>`;

    return precio;
}

agregarTecho();

function sumaTotal(e){
    e.preventDefault()
    let precioTotal = agregarEstructura + agregarPared + agregarPiso + agregarTecho;

    let divPrecio = document.getElementById("presupuestoEstimado")

    divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precioTotal}</h2>`;
}