
// import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { NavLink, useLocation } from 'react-router-dom'
import s from "./Nav.module.css";

// eslint-disable-next-line react/prop-types
export default function Nav({onSearch, randomSearch, cleanSearch, logout}) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch(id);
      setId("");
    }
  };

  const {pathname} = useLocation()
  
  return (
      <div className={s.navBar}>
        <div className={s.leftNavBar}>
          <button className={s.button} >
            <NavLink className={s.button} exact to="/home">Inicio</NavLink>
          </button>
          <button className={s.button}>
            <NavLink className={s.button}  exact to="/about">Acerca de mi</NavLink>
          </button>
        </div>
        <div>
        {pathname === '/favorites' ? '' : <div className={s.midNavBar}>
          <input placeholder='Digita un código y presiona Enter' className={s.inputField} type='text' onChange={handleChange} onKeyPress={handleKeyPress} value={id} />
          <button className={s.addButton} onClick={() => { onSearch(id); setId('') }}>+</button>
          <button className={s.button} onClick={() => { randomSearch()}}>Random</button>
          <button className={s.button} onClick={() => { cleanSearch() }}>Limpiar</button>
          <button className={s.button}>
            <NavLink className={s.button} exact to="/favorites">Favoritos</NavLink>
          </button>
        </div>}
        </div>
        <div className={s.rightNavBar}>
          <img src='src/assets/img/logout.png' className={s.logOut} onClick={() => { logout()}} />
        </div>
      </div>
  );
}


