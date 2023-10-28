/* eslint-disable react/prop-types */

import s from './Card.module.css'
import { NavLink } from 'react-router-dom'
export default function Card({ id, name, status, species, gender, origin, image, onClose }) {


       
    return (
    
     <div className={`${s.bgColor} ${s.CardContainer}`}>
      <div className={ s.cardHeader }>
        <NavLink to={`/detail/${id}`}>  
        <img src={image} alt={name} className={status == 'Alive' ? s.CharImgAlive : s.CharImgDeath} />
        </NavLink>
        <button onClick={() => onClose(id)} className={s.CloseButton}>X</button>
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
