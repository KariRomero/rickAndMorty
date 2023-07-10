import { Link } from "react-router-dom";
import style from './Form.module.css';

export default function Form(){
    return(
        <div className={style.background}>
            <div className={style.container}>
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