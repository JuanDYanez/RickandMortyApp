/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
import s from './SearchBar.module.css'
import { useState } from 'react';


export default function SearchBar({ onSearch }) {
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
      <div >
       <input type='text' onChange={handleChange} onKeyPress={handleKeyPress} value={id} />
       <button onClick={() => { onSearch(id); setId('') }}>Agregar</button>
      </div>
   );
}
