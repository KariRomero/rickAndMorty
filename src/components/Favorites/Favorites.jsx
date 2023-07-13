import { useSelector } from "react-redux/es/hooks/useSelector";
import style from './Favorites.module.css';
import { Link } from "react-router-dom";

const Favorites = () => {
    const { myFavorites } =useSelector(state => state)
    return(
        <div className={style.back}>
            {
                myFavorites.map((character)=>{
                    return(
                        <div className={style.container}> 
                            <div className={style.topcard}>                                
                                <img src={character.image} alt={character.name} className={style.image}/>
                            </div>

                            <Link to={`/detail/${character.id}`} className={style.link}>
                                <h2 className={style.name}>{character.name}</h2>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
 
export default Favorites;