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
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.id) {
          setCharacters([...characters, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    const charactersFiltered = characters.filter(character => character.id !== Number(id));
    setCharacters(charactersFiltered)
  }

  return (
    <div className={s.main}>
      <BgVideo />
      <Nav onSearch={onSearch} />

      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
