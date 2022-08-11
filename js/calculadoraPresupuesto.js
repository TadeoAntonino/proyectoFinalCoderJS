let metrosCuadrados = parseFloat(prompt("Ingrese los metros cuadrados que desea:"))

const TipoEstructura = [
    {
        material: "madera",
        precio: 100,
        tiempo: "1 semana cada 100 metros cuadrados",
    },
    {
        material: "metal",
        precio: 300,
        tiempo: "3 semanas cada 100 metros cuadrados",
    },
    {
        material: "material reciclado",
        precio: 200,
        tiempo: "2 semanas cada 100 metros cuadrados",
    },
    {
        material: "hormigón",
        precio: 400,
        tiempo: "3 semanas cada 100 metros cuadrados",
    }
]

function seleccionarMaterial (){
    let materialElegido = prompt("Indiquenos si desea una estructura de madera, metal, material reciclado u hormigón.")
    const estructura = TipoEstructura.find((elemento) => {
        return elemento.material == materialElegido;
    })

    alert("Usted eligió: " + materialElegido);

    function calcularPrecio (){
     let precioFinal = TipoEstructura.find((element) => element.material === materialElegido).precio
     alert("El precio estimado para su estructura de " + materialElegido + " es de: " + precioFinal*metrosCuadrados);
    }

    calcularPrecio();
}

seleccionarMaterial();

