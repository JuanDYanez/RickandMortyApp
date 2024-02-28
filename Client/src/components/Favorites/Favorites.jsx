/* eslint-disable react/prop-types */

import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import s from './Favorites.module.css'
import EmptyFavorites from "./EmptyFavorites";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {
  
  const [aux, setAux] = useState(false)

  const dispatch = useDispatch();

  const myFavorites = useSelector(state => state.myFavorites || []);

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux)
  }
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }
  
  return (
    <>
      <div className={s.filterLists}>
      <select className={s.select}onChange={handleOrder}>
        <option className={s.option}selected="true" disabled="disable">Ordenar</option>
        <option className={s.option}value="A">A-Z</option>
        <option className={s.option}value="D">Z-A</option>
      </select>
      <select className={s.select} onChange={handleFilter}>
        <option className={s.option}selected="true" disabled="disable">Filtrar</option>
        <option className={s.option}value="All">Todos</option>
        <option className={s.option}value="Male">Masculino</option>
        <option className={s.option}value="Female">Femenino</option>
        <option className={s.option}value="Genderless">Sin género</option>
        <option className={s.option}value="unknown">Desconocido</option>
      </select>
      </div>
      <div className={s.FavoritesContainer}>
        {myFavorites.length === 0 ? (
          <EmptyFavorites />
        ) : (
          myFavorites.map(
            ({ id, name, status, species, gender, origin, image, onClose }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin}
                  image={image}
                  onClose={onClose}
                />
              );
            }
          )
        )}
      </div>
    </>
  );
}

export default Favorites;