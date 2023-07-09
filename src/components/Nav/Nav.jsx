import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import { Link } from "react-router-dom";

export default function Nav ({onSearch, random}) {
    return(
        <div className={style.Nav}>
            <Link to='/about'>
                <button>About</button>
            </Link>

            <Link to='/home'>
                <button>Home</button>
            </Link>
            <button onClick={()=>onSearch(random())}>Random</button>
            <SearchBar onSearch={onSearch}/>
        </div>
    )

}