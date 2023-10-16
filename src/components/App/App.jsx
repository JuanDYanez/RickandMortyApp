import s from "./App.module.css";
import Nav from "../Nav/Nav.jsx"
import Cards from "../Cards/Cards.jsx";
import BgVideo from "../BgVideo/BgVideo";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from 'react-router-dom';
import About from "../About/About";
import Detail from "../Detail/Detail";

function App() {

  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {

    const characterExists = characters.find((character) => character.id === Number(id));
    
    if (characterExists) {
      // alert("Este personaje ya fue agregado");
      return;
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            alert("¡No hay personajes con este ID!");
          }
        })
    }
  }

  const randomSearch = () => {

    let randomId = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => setCharacters((oldChars) => [...oldChars, data])
    );

  }

  const cleanSearch = () => {
    setCharacters([])
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== Number(id)))
  }

  return (
    <div className={s.main}>
      <BgVideo />
      <Nav onSearch={onSearch} randomSearch={randomSearch} cleanSearch={cleanSearch} />

      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
