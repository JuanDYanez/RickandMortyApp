import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import s from './Detail.module.css'

const Detail = () => {
  
  const { id } = useParams();
  const [character, setCharacter] = useState({})
  
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
  }, [id]);

  return (
    <div>
      <NavLink to='/home' className={s.DetailCloseButton}>X</NavLink>
      <h2>{character?.name}</h2>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
}

export default Detail;