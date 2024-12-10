function RegistroUsuario(){
    const user = {
        nombre:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value
        

    }
    localStorage.setItem('user', JSON.stringify(user))
    /* console.log(user) */
    alert("usuario Registradi...")
    window.location.href = 'inicios.html'
}
