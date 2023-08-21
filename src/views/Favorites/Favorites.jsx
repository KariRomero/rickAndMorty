import style from './Favorites.module.css';
import { Link } from "react-router-dom";
import { useSelector  } from "react-redux";
import Filter from '../../components/Filter/Filter';

const Favorites = () => {
    const { myFavorites } =useSelector(state => state);
    
    return(
        <div className={style.background}>
            <Filter/>
            <div className={style.containerFavs}>
            
            {
                myFavorites.map((character)=>{
                    return(
                        <div className={style.container}> 
                            <Link to={`/detail/${character.id}`} className={style.link}> 

                                <img src={character.image} alt={character.name} className={style.image}/>                               
                                <h2 className={style.name}>{character.name}</h2>
                                <h2 className={style.name}>{character.gender}</h2>

                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
 
export default Favorites;