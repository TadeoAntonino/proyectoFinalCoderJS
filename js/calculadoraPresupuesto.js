import { sweetAlert } from "../componentes/sweetAlert.js";

fetch("../content/data.json")
  .then((res) => res.json())
  .then((data) => {
    // Funcion calculadora

    const { TipoEstructura, TipoPiso, TipoPared, TipoTecho } = data;

    function calcular(e) {
      e.preventDefault();
      let metrosCuadrados = document.getElementById("mCuadrados").value;

      let materialElegidoE =
        document.getElementById("materialEstructura").value;
      let materialElegidoPi = document.getElementById("materialPiso").value;
      let materialElegidoPa = document.getElementById("materialPared").value;
      let materialElegidoT = document.getElementById("materialTecho").value;

      let divPrecio = document.getElementById("presupuestoEstimado");

      let precioMaterialE = TipoEstructura.find(
        (element) => element.material === materialElegidoE
      ).precio;

      let precioE = metrosCuadrados * precioMaterialE;

      let precioMaterialPi = TipoPiso.find(
        (element) => element.material === materialElegidoPi
      ).precio;

      let precioPi = metrosCuadrados * precioMaterialPi;

      let precioMaterialPa = TipoPared.find(
        (element) => element.material === materialElegidoPa
      ).precio;

      let precioPa = metrosCuadrados * precioMaterialPa;

      let precioMaterialT = TipoTecho.find(
        (element) => element.material === materialElegidoT
      ).precio;

      let precioT = metrosCuadrados * precioMaterialT;

      let precioTotal = precioE + precioPa + precioPi + precioT;

      const precioJSON = JSON.stringify(precioTotal);

      localStorage.setItem("presupuesto", precioJSON);

      divPrecio.innerHTML = `<h2>El precio estimado es de: U$D ${precioTotal}</h2>`;
    }

    const calculator = document.getElementById("calculator");

    sweetAlert();

    calculator.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        calcular(event);
      },
      false
    );
  });
