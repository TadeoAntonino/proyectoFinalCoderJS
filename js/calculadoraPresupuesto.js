const sweetAlert = async () => {
  const { value: input } = await Swal.fire({
    title: "Registrese",
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: "Registrarme",
    focusConfirm: false,
    allowOutsideClick: false,
    allowEscapeKey: false,

    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and password`);
      }
      return { login: login, password: password };
    },
  }).then((result) => {
    Swal.fire(
      `
      Login: ${result.value.login}
      Password: ${result.value.password}
    `.trim()
    );
  });
};





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
  },
];

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
  },
];

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
  },
];

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
];

let btnEstructura = document.getElementById("btnEstructura");
function agregarEstructura(e) {
  let metrosCuadrados = document.getElementById("mCuadradosE").value;
  e.preventDefault();
  let materialElegido = document.getElementById("materialEstructura").value;

  let precioMaterial = TipoEstructura.find(
    (element) => element.material === materialElegido
  ).precio;

  let precio = metrosCuadrados * precioMaterial;

  console.log(precio);
  return precio;
}



let btnPiso = document.getElementById("btnPiso");

function agregarPiso(e) {
  e.preventDefault();
  let metrosCuadrados = document.getElementById("mCuadradosPi").value;
  let materialElegido = document.getElementById("materialPiso").value;
  console.log("MaterialElegido", materialElegido);

  let precioMaterial = TipoPiso.find(
    (element) => element.material === materialElegido
  ).precio;

  console.log("PrecioMaterial", precioMaterial);

  let precio = metrosCuadrados * precioMaterial;

  console.log("AgregarPiso", precio);
  return precio;
}



let btnPared = document.getElementById("btnPared");
function agregarPared(e) {
  e.preventDefault();
  let metrosCuadrados = document.getElementById("mCuadradosPa").value;
  let materialElegido = document.getElementById("materialPared").value;

  let precioMaterial = TipoPared.find(
    (element) => element.material === materialElegido
  ).precio;

  let precio = metrosCuadrados * precioMaterial;

  return precio;
}



let btnTecho = document.getElementById("btnTecho");
function agregarTecho(e) {
  e.preventDefault();
  let metrosCuadrados = document.getElementById("mCuadradosT").value;
  let materialElegido = document.getElementById("materialTecho").value;

  let precioMaterial = TipoTecho.find(
    (element) => element.material === materialElegido
  ).precio;

  let precio = metrosCuadrados * precioMaterial;

  let precioTotal =
  agregarEstructura() + agregarPared() + agregarPiso() + precio;

  let divPrecio = document.getElementById("presupuestoEstimado");

  divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precioTotal}</h2>`;
}


btnEstructura.addEventListener("click", agregarEstructura);
btnPiso.addEventListener("click", agregarPiso);
btnPared.addEventListener("click", agregarPared);
btnTecho.addEventListener("click", agregarTecho);
