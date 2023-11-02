/* eslint-disable react/prop-types */

import { connect } from "react-redux";
import Card from "../Card/Card";
import s from './Favorites.module.css'

const Favorites = (props) => {
  // eslint-disable-next-line react/prop-types
  const { myFavorites } = props;

  return (
    <div className={s.FavoritesContainer}>
      {myFavorites.map(({ id, name, status, species, gender, origin, image, onClose }) => {
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
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(Favorites);