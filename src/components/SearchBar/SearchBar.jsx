import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {

const [id,setId] = useState('')

function handleChange(event) {
   setId(event.target.value)
}

   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange} value={id} className={style.input}/>
         <button onClick={()=>onSearch(id)} className={style.button}>Agregar</button>
      </div>
   );
}
