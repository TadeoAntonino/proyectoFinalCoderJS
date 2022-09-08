import data from "../content/data.json";

// SweetAlert 

sweetAlert = async () => {
  await Swal.fire({
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
  const user = JSON.stringify(result.value.login)
  const pass = JSON.stringify(result.value.password)

  localStorage.setItem('usuario', user)
  localStorage.setItem('contrasena', pass)
  Swal.fire(
    `
    Login: ${result.value.login}
    Password: ${result.value.password}
  `.trim()
  );
});
};

// Funcion calculadora

const { TipoEstructura, TipoPiso, TipoPared, TipoTecho } = data

function calcular(e) {
  e.preventDefault();
    let metrosCuadrados = document.getElementById("mCuadrados").value;
  
    let materialElegidoE = document.getElementById("materialEstructura").value;
  
    let precioMaterialE = TipoEstructura.find(
      (element) => element.material === materialElegidoE
    ).precio;
  
    let precioE = metrosCuadrados * precioMaterialE;
  
    let materialElegidoPi = document.getElementById("materialPiso").value;
  
    let precioMaterialPi = TipoPiso.find(
      (element) => element.material === materialElegidoPi
    ).precio;
  
    let precioPi = metrosCuadrados * precioMaterialPi;
  
    let materialElegidoPa = document.getElementById("materialPared").value;
  
    let precioMaterialPa = TipoPared.find(
      (element) => element.material === materialElegidoPa
    ).precio;
  
    let precioPa = metrosCuadrados * precioMaterialPa;
  
    let materialElegidoT = document.getElementById("materialTecho").value;
  
    let precioMaterialT = TipoTecho.find(
      (element) => element.material === materialElegidoT
    ).precio;
  
    let precioT = metrosCuadrados * precioMaterialT;
  
    let precioTotal = precioE + precioPa + precioPi + precioT;


    const precioJSON = JSON.stringify(precioTotal)

    localStorage.setItem("presupuesto", precioJSON)
  
    let divPrecio = document.getElementById("presupuestoEstimado");
      
    divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precioTotal}</h2>`;
  }

  const btnCalcular = document.getElementById("btnCalcular");
const calculator = document.getElementById("calculator")
const usuario = localStorage.getItem("usuario")
const contrasena = localStorage.getItem("contrasena")

  sweetAlert();

  calculator.addEventListener("submit", (event) => {
    event.preventDefault();
    calcular(event)
  }, false);
  


  fetch("./content/data.json")
  .then(res => res.json())
  .then(data => console.log(data))


