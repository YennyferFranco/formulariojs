function InicioUsuario(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const data = JSON.parse(localStorage.getItem('user'))
    if(data.email === email  && data.password == password){
        alert(" Bienvenido")
        window.location.replace('index.html')
    }else{
        alert("Usuario o contraseña invalidos...")


    }
}