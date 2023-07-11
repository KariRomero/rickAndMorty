import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import style from './Form.module.css';
import png from './Data/png.png'

export default function Form(){
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

    const navigate = useNavigate();
    const EMAIL = 'karinaromero@gmail.com';
    const PASSWORD = 'Asd.123';


    const [userData, setUserData] = useState({
        email:'',
        password:''        
    });

    const [errors,setErrors] = useState({
        email:'',
        password:''
    })

    const [access,setAccess] = useState(false);

    function validate(userData){
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
        else if (!passwordRegex.test(userData.password)){
            errors.password = 'Debe ser un password válido'
        }        
        
        return errors;
    }

    function login(userData) {
        if (userData.password === PASSWORD && userData.email === EMAIL) {
           setAccess(true);
           navigate('/home');
        }
     }

     useEffect(() => {
        !access && navigate('/');
     }, [access]);

    function handleChange(event){
        setUserData({
            ...userData,
            [event.target.name]: event.target.value,
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value,
        }))
    }

    return(
        <div className={style.background}>
            <div className={style.container}>
                <img src={png} alt='Logo Rick and Morty' className={style.image}/>
                <form className={style.form} >
                    
                    <input className={style.input} placeholder='E-mail' name='email' value={userData.email} onChange={handleChange} ></input>
                    <p className={style.error}>{errors.email}</p>
                    
                    <input className={style.input} placeholder='Password' name='password' value={userData.password} onChange={handleChange}></input>
                    <p className={style.error}>{errors.password}</p>

                    <Link to='/home'>
                    <button className={style.button}>Login</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}