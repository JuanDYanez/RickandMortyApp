const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (input) => {
  let errors = {}

  if (!input.email) errors.email = 'Debes ingresar tu email'
  else if (!regexEmail.test(input.email)) errors.email = 'Ingresa un email válido'
  
  if (input.email.length > 35) errors.email = 'El email debe tener menos de 35 caracteres'
  
  if (!input.password) errors.password = 'Debes ingresar tu contraseña'
  else if (!/\d/.test(input.password)) errors.password = 'La contraseña debe tener al menos un número'
  
  if (input.password.length < 6 || input.password.length > 10) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'

  return errors
}

export default validate;