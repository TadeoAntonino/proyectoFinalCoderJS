class Clientes{
    constructor(login,password,presupuesto){
        this.login = login;
        this.password = password;
        this.presupuesto = presupuesto;
    }
}

function ingresarClientes(login,password,presupuesto){

    const ingresarCliente = new Clientes(login,password,presupuesto);
    const arrayClientes = localStorage.getItem("Clientes");
    if (arrayClientes){

        const clientesParsed = JSON.parse(arrayClientes).slice();
        clientesParsed.push(ingresarCliente);
        localStorage.setItem("Clientes",JSON.stringify(clientesParsed));
        

    }else {
        const Clientes = [];
        Clientes.push(ingresarCliente);
        localStorage.setItem("Clientes",JSON.stringify(Clientes));
    }
    
}

export default ingresarClientes;