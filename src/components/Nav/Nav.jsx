import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'

export default function Nav ({onSearch}) {
    return(
        <div>
            <SearchBar onSearch={onSearch}/>
        </div>
    )

}