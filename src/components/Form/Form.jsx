import { Link } from "react-router-dom";
import style from './Form.module.css';
import png from './Data/png.png'

export default function Form(){
    return(
        <div className={style.background}>
            <div className={style.container}>
                <img src={png} alt='Logo Rick and Morty' className={style.image}/>
                <form className={style.form}>
                    {/* <label className={style.label}>E-mail:</label> */}
                    <input className={style.input} placeholder='E-mail'></input>

                    {/* <label className={style.label}>Password:</label> */}
                    <input className={style.input} placeholder='Password'></input>

                    <Link to='/home'>
                    <button className={style.button}>Submit</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}