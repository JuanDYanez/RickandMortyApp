import { useState } from 'react';
import s from './Form.module.css'
import validate from './validation';

// eslint-disable-next-line react/prop-types
export default function Form({login, registerUser}) {

  // const navigate = useNavigate();

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
  }

  const handleBlur = (event) => {
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(userData);
  };

  return (
    <div className={s.FormContainer}>
      <img className={s.morty} src="src/assets/img/morty.webp" alt="morty" />
      <form>
        <img
          className={s.logo}
          src="src/assets/img/RAM-Logo.webp"
          alt="rick-and-morty-logo"
        />
        <label htmlFor="">Email: </label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${errors.email ? s.inputWarning : ""}`}
        />
        {errors.email ? <p className={s.textWarning}>{errors.email}</p> : ""}

        <label htmlFor="">Contraseña: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${errors.password ? s.inputWarning : ""}`}
        />
        {errors.password ? (
          <p className={s.textWarning}>{errors.password}</p>
        ) : (
          ""
        )}

        <div>
          <button className={s.submitButton} onClick={handleSubmit}>
            Ingresa
          </button>
          <button className={s.submitButton} onClick={handleRegister}>
                Regístrate
          </button>
        </div>
      </form>
      <img className={s.rick} src="../../src/assets/img/rick.webp" alt="rick" />
    </div>
  );
}