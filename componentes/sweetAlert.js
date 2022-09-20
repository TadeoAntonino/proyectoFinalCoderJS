// SweetAlert

export const sweetAlert = async () => {
  await Swal.fire({
    title: "Registrese",
    html: `<input type="text" id="login" class="swal2-input" placeholder="Name">
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
    const user = JSON.stringify(result.value.login);
    const pass = JSON.stringify(result.value.password);

    localStorage.setItem("usuario", user);
    localStorage.setItem("contrasena", pass);
    Swal.fire(
      `
      Login: ${result.value.login}
      Password: ${result.value.password}
    `.trim()
    );
  });
};
