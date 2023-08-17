import style from './Favorites.module.css';
import { Link } from "react-router-dom";
import { useDispatch, useSelector  } from "react-redux";
import { orderCards, filterCards, reset } from "../../redux/actions";

const Favorites = () => {
    const { myFavorites } =useSelector(state => state);
    const dispatch = useDispatch();

    const handlerOrder = (event)=> {
        event.preventDefault()
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event)=> {
        event.preventDefault()
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={style.back}>
            <div>
                <select name='order' onChange={handlerOrder} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disable>Order by:</option>
                    <option value='Ascendente'>Ascendente</option>
                    <option value='Descendente'>Descendente</option>
                </select>

                <select name='filter' onChange={handlerFilter} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled='disabeled'>Filter by:</option>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Genderless'>Genderless</option>
                    <option value='unknown'>unknown</option>
                </select>
                <button onClick={()=>dispatch(reset())}>Reset</button>
            </div>
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