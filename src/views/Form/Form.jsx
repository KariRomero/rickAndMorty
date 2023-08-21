import { useState } from "react";
import style from './Form.module.css';
import png from '../../assets/png.png'
import validate from "./validate";

export default function Form({login}){

    const [userData, setUserData] = useState({
        email:'',
        password:''        
    });

    const [errors,setErrors] = useState({
        email:'',
        password:''
    })
    
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


    function handleSubmit(event){
        event.preventDefault();
        login(userData);
    }


    return(
        <div className={style.background}>
            <div className={style.container}>
                <img src={png} alt='Logo Rick and Morty' className={style.image}/>
                <form className={style.form} onSubmit={handleSubmit} >
                    
                    <input type='text' className={style.input} placeholder='E-mail' name='email' value={userData.email} onChange={handleChange} ></input>
                    {errors.email && <p className={style.error}>{errors.email}</p>}
                    
                    <input type='password' className={style.input} placeholder='Password' name='password' value={userData.password} onChange={handleChange}></input>
                    {errors.password && <p className={style.error}>{errors.password}</p>}

                    
                        {/* Object.keys(errors) toma los elementos del objeto errors y los coloca dentro de un array
                        {Object.keys(errors).length===0 ? <button type='submit' className={style.button} >Login</button> : null} */}
                        <button  className={style.button} >Login</button>

                    
                    
                </form>
            </div>
        </div>
    )
}