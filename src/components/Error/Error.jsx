import image from './Data/background7.jpg'
import style from './Error.module.css'

export default function Error(){
    return(
        <div className={style.background}>

            <img src={image} alt ='error 404' className={style.image}/>
            
        </div>
    )
}