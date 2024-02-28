import s from "./App.module.css";
import Nav from "../Nav/Nav.jsx"
import Cards from "../Cards/Cards.jsx";
import BgVideo from "../BgVideo/BgVideo";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Detail from "../Detail/Detail";
import Form from "../Form/Form";
import Error404 from "../Error404/Error404";
import Favorites from "../Favorites/Favorites";

function App() {

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);
  const navigate = useNavigate()

  const {pathname} = useLocation()

  const onSearch = async (id) => {

    try {
      const characterExists = characters.find((character) => character.id === Number(id));
      
      if (characterExists) {
        return;
      } else {
        const { data } = await axios(`${import.meta.env.VITE_URL_BACKEND}/rickandmorty/character/${id}`);
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        }
    } catch (error) {
      alert(`Error ${error.response.status}: ¡No hay personajes con este ID!`);
    }

    
  }

  const randomSearch = async () => {
    let randomId = Math.floor(Math.random() * 826) + 1;

    try {
      const characterExists = characters.find((character) => character.id === randomId);
      
      if (characterExists) {
        return
      } else {
        const {data} = await axios(`${import.meta.env.VITE_URL_BACKEND}/rickandmorty/character/${randomId}`)
        
        setCharacters((oldChars) => [...oldChars, data])
      }
    } catch (error) {
      alert(`Error agregando personaje`);
    }
  }

  const cleanSearch = () => {
    setCharacters([])
  }

  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== Number(id)))
  }

  const login = async (userData) => {
    const URL = `${import.meta.env.VITE_URL_BACKEND}/rickandmorty/login/`;

    try {
      const { email, password } = userData;
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
        
      const { access } = data;
      console.log(data);
      setAccess(data);
      access && navigate("/home");

    } catch (error) {
      alert('Usuario no existe')
    }

 
  }

  const logout = () => {
      setAccess(false);
  }

  // eslint-disable-next-line no-unused-vars
  const registerUser = async (userData) => {
    const URL = `${import.meta.env.VITE_URL_BACKEND}/rickandmorty/login/`;

    try {
      const { email, password } = userData;
      const { data } = await axios.post(URL, {
        email: email,
        password: password
      } 
      );

      const { access } = data;
      setAccess(data);

      if(data) {
        Swal.fire({
          title: "¡Registro exitoso!",
          icon: "success"
        });
      }

      access && navigate("/home");
    } catch (error) {
      alert("Usuario no existe");
    }
  };

  useEffect(() => {
    !access && navigate('/')
  }, [access, navigate]) 

  return (
    <div className={s.main}>
      <BgVideo />
        {pathname !== "/" && <Nav onSearch={onSearch} randomSearch={randomSearch} cleanSearch={cleanSearch} logout={ logout } />}

      <Routes>
        <Route path="/" element={<Form login={login} logout={logout} registerUser={registerUser} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
