const validezString = (value) =>{
    const textRegex = /^[a-zA-Z]+$/;

    if(textRegex.test(value)){
        return true
    }
    return false
}

const validezCorreo = (value) =>{
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(value)) {
        return true
    }
    return false
}

const validezNumero = (value) =>{
    const numeroRegex = /^[0-9,$]*$/;

    if (numeroRegex.test(value)) {
        return true
    }
    return false
} 

const enviarFormulario = (event) => {
    event.preventDefault();
    let nombre = event.target.nombre.value;
    let Email = event.target.email.value;
    let Edad = event.target.Edad.value;
    let Apellido = event.target.Apellido.value;
    let Archivo = event.target.formFileMultiple.value;
    let texto = event.target.message.value;
    
    if(validezString(nombre)){
        console.log(`Nombre: ${nombre}`);
    }else{
        console.warn(`Solo se acepta texto en el campo nombre`)
        return
    }
    if (validezString(Apellido)) {
        console.log(`Apellido: ${Apellido}`);
    }else{
        console.warn(`Solo se acepta texto en el campo Apellido`)
        return
    }

    if(validezCorreo(Email)){
        console.log(`Email: ${Email}`);
    }else{
        console.warn(`Formato incorrecto para este campo Email`)
        return
    }

    
    if (validezNumero(Edad)) {
       console.log(`Edad: ${Edad}`); 
   }else{
    console.warn(`Solo escribe numeros`)
   }
    
    
   if (Archivo ==="") {
     console.warn('El campo quedo vacio')
   }else{
    console.log(`Archivo: ${Archivo}`)
   }
    
    if (texto ==="") {
        console.warn("El campo quedo vacio")
        return
    }
    if (validezString(texto)) {
          console.log(`Mensaje: ${texto}`);
    }else{
        console.warn(`Solo se acepta texto quieres colocar numeros escribelos uno,dos,etc...`)
    }
}
