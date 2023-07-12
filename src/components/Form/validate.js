export default function validate(userData){

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;
    const numberRegex = /\d/;
    const errors= {}
    
    if(!userData.email){
        errors.email = 'Debe completar email'
    }
    if(userData.email.length>35){
        errors.email='Email debe tener menos de 35 caracteres'
    }
    else if (!userData.password){
        errors.password = 'Debe haber un password'
    }
    else if (!emailRegex.test(userData.email)){
        errors.email = 'Debe ser un email válido'
    }
    else if(userData.password.length<6 || userData.password.length>10){
        errors.password = 'La password debe contener entre 6 y 10 caracteres'
    }
    else if (!userData.password.match(numberRegex)){
        errors.password = 'Debe contener al menos un numero'
    }
    else if (!passwordRegex.test(userData.password)){
        errors.password = 'Debe ser un password válido'
    }        
    
    return errors;
}