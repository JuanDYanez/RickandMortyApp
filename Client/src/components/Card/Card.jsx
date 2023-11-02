/* eslint-disable react/prop-types */

import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import s from './Card.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';


function Card(props) {
    const { id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites } = props;
    
    const [isFav, setIsFav] = useState(false)
  
    const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props)
      setIsFav(!isFav)
    }
  
    useEffect(() => {
      myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [myFavorites]);
  
  const {pathname} = useLocation()

    return (
    
     <div className={`${s.bgColor} ${s.CardContainer}`}>
        <div className={s.cardHeader}>
          {isFav
            ? (<button className={s.FavButton} onClick={handleFavorite}>❤️</button>)
            : (<button className={s.FavButton} onClick={handleFavorite}>🤍</button>)
          }
        <NavLink to={`/detail/${id}`}>  
        <img src={image} alt={name} className={status == 'Alive' ? s.CharImgAlive : s.CharImgDeath} />
        </NavLink>
        {pathname === '/favorites' ? '' : <button onClick={() => onClose(id)} className={s.CloseButton}>X</button>}
        <p className={s.headerName}>{name}</p>
      </div>
      <div className={s.charInfo}>
        <div className={s.charInfo1}>
          <p><span>Estado:  </span><br/><span className={ s.charDescription}>{status == 'Alive' ? '❤️' : '💀'}</span></p>
          <p><span>Especie:  </span><br/><span className={ s.charDescription}>{species}</span></p>
        </div>
      <div className={s.charInfo2}>
        <p><span>Género:  </span><br/><span className={ s.charDescription}>{gender}</span></p>
        <p><span>Origen:  </span><br/><span className={ s.charDescription}>{origin}</span></p>
      </div>
      </div>
     </div>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card);