import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";

export default function Nav ({onSearch, random}) {
    return(
        <div className={style.nav}>
            {/* <Link to='/about'>
                <button>About</button>
            </Link> */}
        
            <Link to='/' className={style.link}>
            <button className={style.button}>
                Log Out
            </button>
            </Link>

            <Link to='/home' className={style.link}>
            <button className={style.button}>
                Home
            </button>
            </Link>

            <Link to='/favorites' className={style.link}>
            <button className={style.button}>
                Favorites
            </button>
            </Link>
        

            <button onClick={()=>onSearch(random())} className={style.button}>Random</button>
            <SearchBar onSearch={onSearch}/>

        </div>
    )

}