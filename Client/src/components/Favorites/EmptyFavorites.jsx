  /* eslint-disable react/prop-types */

  import s from './Favorites.module.css'

  const EmptyFavorites = () => {

    return (
      <div className={s.EmptyFavorites}>
        <h2>No tienes personajes favoritos 😢💔</h2>
        <img src="src/assets/img/morty-heart.webp" alt="Morty in love" />
      </div>
    );
  }

  export default EmptyFavorites;