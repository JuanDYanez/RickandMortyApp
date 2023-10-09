
// import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { NavLink } from 'react-router-dom'
import s from "./Nav.module.css";

// eslint-disable-next-line react/prop-types
export default function Nav({onSearch}) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      setId(""); // Opcional: Limpiar el campo después de la búsqueda
    }
  };
  
  return (
    <div>
    <div className={s.navBar}>
      <div>
      <button className={s.button}>
        <NavLink className={s.button}  exact to="/about">Acerca de mi</NavLink>
      </button>
      <button className={s.button} >
        <NavLink className={s.button} exact to="/home">Inicio</NavLink>
      </button>
      {/* <SearchBar className={s.inputField} onSearch={onSearch} /> */}
      </div>   
    <div >
      <input placeholder='Digita un código de búsqueda' className={s.inputField} type='text' onChange={handleChange} onKeyPress={handleKeyPress} value={id} />
    <button className={s.button} onClick={() => { onSearch(id); setId('') }}>Agregar</button>
    </div>
    </div>
    </div>
  );
}


