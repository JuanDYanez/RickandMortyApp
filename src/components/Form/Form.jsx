import { useState } from 'react';
import s from './Form.module.css'
import validate from './validation';
// eslint-disable-next-line react/prop-types
export default function Form({login}) {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })

    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={s.FormContainer}>
      <form>
        <label htmlFor="">Email: </label>
        <input type="text" name='email' value={userData.email} onChange={handleChange} className={`${errors.email ? s.inputWarning : ''}`}/>
        {errors.email ? <p className={s.textWarning}>{errors.email}</p> : ''}

        <label htmlFor="">Contraseña: </label>
        <input type="password" name='password' value={userData.password} onChange={handleChange} className={`${errors.password ? s.inputWarning : ''}`}/>
        {errors.password ? <p className={s.textWarning}>{errors.password}</p> : ''}

        <button className={s.submitButton} onClick={handleSubmit}>Ingresar</button>
      </form>
    </div>
  );
}