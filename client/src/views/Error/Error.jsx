// import image from './Data/background7.jpg'
import image2 from '../../assets/background8.jpg'
import style from './Error.module.css'

export default function Error(){
    return(
        <div className={style.background}>

            <div className={style.error}>
                <h1>ERROR 404 
                    NOT FOUND
                </h1>
            </div>

            <img src={image2} alt ='error 404' className={style.image}/>
            
        </div>
    )
}