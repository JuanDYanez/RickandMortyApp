import s from "./App.module.css";
import Nav from "../Nav/Nav.jsx"
import Cards from "../Cards/Cards.jsx";
import BgVideo from "../BgVideo/BgVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "../About/About";
import Detail from "../Detail/Detail";
import Form from "../Form/Form";
import Error404 from "../Error404/Error404";
import Favorites from "../Favorites/Favorites";

function App() {

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const navigate = useNavigate()

  let EMAIL = 'juancho644@gmail.com'
  let PASSWORD = 'Luciana15'

  const {pathname} = useLocation();

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

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = () => {
      setAccess(false);
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access]) 

  return (
    <div className={s.main}>
      <BgVideo />
      {pathname !== "/" && <Nav onSearch={onSearch} randomSearch={randomSearch} cleanSearch={cleanSearch} logout={ logout } />}

      <Routes>
        <Route path="/" element={<Form login={login} logout={logout} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
