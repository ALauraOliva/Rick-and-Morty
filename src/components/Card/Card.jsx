import styleCard from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card({id,name,status,species,gender,origin,image,onClose}) {
   return (
      <div>
         <figure className={styleCard.snip0056}>
            <button onClick={()=>onClose(id)} className={styleCard.buttonClose}>X</button>
            <figcaption>
               <Link to={`/Detail/${id}`}>
                  <h2>{name}</h2>
               </Link>
               <h2>{gender}</h2>
               <h2>{origin}</h2>
            </figcaption>
            <img src={image} alt='' />
            <div className={styleCard.position}>{`${status} ${species}`}</div>
         </figure>
      </div>
   );
}
