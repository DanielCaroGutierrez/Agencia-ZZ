const usuario = document.querySelector("#usuario")
const contraseña = document.querySelector("#contraseña")
const botonIniciarSesion = document.querySelector("#botonIniciarSesion")
const botonCerrarSesion = document.querySelector("#botonCerrarSesion")
const mensajeError = document.querySelector("#mensajeError")
const botonesOpcionesCelular = document.querySelector("#botonesOpcionesCelular")
const botonesOpcionesPortatil = document.querySelector("#botonesOpcionesPortatil")
const botonesOpcionesCliente = document.querySelector("#botonesOpcionesCliente")     

const card = document.querySelector("#card")
const nombre = document.querySelector("#nombre")
const referencia = document.querySelector("#referencia")
const codigo = document.querySelector("#codigo")
const valor = document.querySelector("#valor")
const cantidad = document.querySelector("#cantidad")
const botonEnviarCelular = document.querySelector("#botonEnviarCelular")
const botonEnviarPortatil = document.querySelector("#botonEnviarPortatil")

botonIniciarSesion.addEventListener("click" , () =>{

    if(usuario.value === "test" && contraseña.value === "1234") {
        let paginaLogin = document.querySelector("#paginaLogin") 
        let paginaPrincipal = document.querySelector("#paginaPrincipal")
        paginaLogin.classList.add("ocultar")
        paginaPrincipal.classList.add("visible")
    }

    else{

        mensajeError.classList.remove("ocultar")
        mensajeError.classList.remove("mostrar")
        formulario.reset()
    }
})

botonCerrarSesion.addEventListener("click" , () =>{

    let paginaLogin = document.querySelector("#paginaLogin") 
    let paginaPrincipal = document.querySelector("#paginaPrincipal")
    paginaLogin.classList.remove("ocultar")
    paginaPrincipal.classList.remove("visible")
    formulario.reset()
    cajaGeneralOpcionesCelular.classList.add("ocultar")
    cajaGeneralOpcionesCliente.classList.add("ocultar")
    cajaGeneralOpcionesPortatil.classList.add("ocultar")
    cajaGeneralOpcionesCelular.classList.remove("mostrar")
    cajaGeneralOpcionesCliente.classList.remove("mostrar")
    cajaGeneralOpcionesPortatil.classList.remove("mostrar")
})

botonesOpcionesCelular.addEventListener("click" , () =>{

    let cajaGeneralOpcionesCelular = document.querySelector("#cajaGeneralOpcionesCelular")
    let cajaGeneralOpcionesPortatil = document.querySelector("#cajaGeneralOpcionesPortatil")
    let cajaGeneralOpcionesCliente = document.querySelector("#cajaGeneralOpcionesCliente")
    let card = document.querySelector("#card")
    card.classList.remove("mostrar")
    card.classList.add("ocultar")
    cajaGeneralOpcionesCelular.classList.add("mostrar")
    cajaGeneralOpcionesCelular.classList.remove("ocultar")
    cajaGeneralOpcionesPortatil.classList.add("ocultar")
    cajaGeneralOpcionesPortatil.classList.remove("mostrar")
    cajaGeneralOpcionesCliente.classList.add("ocultar")
    cajaGeneralOpcionesCliente.classList.remove("remove")
    formularioCelular.reset()
})

botonesOpcionesPortatil.addEventListener("click" , () =>{

    let cajaGeneralOpcionesPortatil = document.querySelector("#cajaGeneralOpcionesPortatil")
    let cajaGeneralOpcionesCelular = document.querySelector("#cajaGeneralOpcionesCelular")
    let cajaGeneralOpcionesCliente = document.querySelector("#cajaGeneralOpcionesCliente")
    let card = document.querySelector("#card")
    card.classList.remove("mostrar")
    card.classList.add("ocultar")
    cajaGeneralOpcionesPortatil.classList.add("mostrar")
    cajaGeneralOpcionesPortatil.classList.remove("ocultar")
    cajaGeneralOpcionesCelular.classList.add("ocultar")
    cajaGeneralOpcionesCelular.classList.remove("mostrar")
    cajaGeneralOpcionesCliente.classList.add("ocultar")
    cajaGeneralOpcionesCliente.classList.remove("mostrar")
    formularioCelular.reset()
    
})

botonesOpcionesCliente.addEventListener("click" , () =>{

    let cajaGeneralOpcionesPortatil = document.querySelector("#cajaGeneralOpcionesPortatil")
    let cajaGeneralOpcionesCelular = document.querySelector("#cajaGeneralOpcionesCelular")
    let cajaGeneralOpcionesCliente = document.querySelector("#cajaGeneralOpcionesCliente")

    let card = document.querySelector("#card")
    card.classList.remove("mostrar")
    card.classList.add("ocultar ")
    cajaGeneralOpcionesCliente.classList.add("mostrar")
    cajaGeneralOpcionesCliente.classList.remove("ocultar")
    cajaGeneralOpcionesPortatil.classList.add("ocultar")
    cajaGeneralOpcionesPortatil.classList.remove("mostrar")
    cajaGeneralOpcionesCelular.classList.add("ocultar")
    cajaGeneralOpcionesCelular.classList.remove("mostrar")
    formularioCelular.reset()

})

botonEnviarCelular.addEventListener("click", () =>{
    let cajaGeneralOpcionesCelular = document.querySelector("#cajaGeneralOpcionesCelular")
    let card = document.querySelector("#card")
    let nombreP = document.querySelector("#nombreP")
    let referenciaP = document.querySelector("#referenciaP")
    let codigoP = document.querySelector("#codigoP")
    let valorP = document.querySelector("#valorP")
    let cantidadP = document.querySelector("#cantidadP")
    const seleccionarImagen = document.querySelector("#seleccionarImagen")
    const imagenCard = document.querySelector("#imagenCard")

    // Obtener el archivo de la imagen seleccionada
    const file = seleccionarImagen.files[0];
  
    if (file) {
      // Crear un objeto FileReader
      const reader = new FileReader();
  
      // Cuando la imagen haya sido cargada correctamente
      reader.addEventListener("load", function () {
        // Mostrar la imagen en la etiqueta img del card
        imagenCard.src = reader.result;
      }, false);
  
      // Leer la imagen como una URL de datos
      reader.readAsDataURL(file);
    }
  
    nombreP.innerHTML = (nombre.value)
    referenciaP.innerHTML = (referencia.value)
    codigoP.innerHTML = (codigo.value)
    valorP.innerHTML = (valor.value)
    cantidadP.innerHTML = (cantidad.value)
    
    card.classList.remove("ocultar")
    card.classList.add("mostrar")
    cajaGeneralOpcionesCelular.classList.add("ocultar")

    
})



