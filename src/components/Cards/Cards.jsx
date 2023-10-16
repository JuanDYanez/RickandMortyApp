/* eslint-disable react/prop-types */
import Card from '../Card/Card';
import s from './Cards.module.css';

export default function Cards({ characters, onClose }) {
  
  const listCharacters = characters.map(({ id, name, status, species, gender, origin, image }) =>
      <Card
      key={id}
      id={id}
      name={name}
      status={status}
      species={species}
      gender={gender}
      origin={origin.name}
      image={image}
      onClose={onClose}
      />
   );
  return (
    <div className={s.CardsContainer}>
      {listCharacters}
    </div>
   )
}
