
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from 'react-router-dom'
import s from "./Nav.module.css";

// eslint-disable-next-line react/prop-types
export default function Nav({onSearch}) {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button className={s.inputField}>
        <NavLink to="/about">About</NavLink>
      </button>
      <button className={s.inputField}>
        <NavLink to="/home">Home</NavLink>
      </button>
    </div>
  );
}


