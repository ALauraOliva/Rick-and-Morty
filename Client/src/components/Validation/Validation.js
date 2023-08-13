export default function validation(userData){
    const errors = {};

    //?EMAIL ERRORS
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El e-mail ingresado no es válido'
    }
    if(!userData.email){
        errors.email = 'Debe ingresar un email'
    }
    if(userData.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres'
    }
    
    //?PASSWORD ERRORS
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos 1 numero'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe estar entre 6 y 10 caracteres'
    }
    
    return errors;
}