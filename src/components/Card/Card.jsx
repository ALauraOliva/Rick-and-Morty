import styleCard from './Card.module.css'
import {NavLink} from 'react-router-dom'
import {addFav, removeFav} from '../../redux/actions'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'

export function Card({id,name,status,species,gender,origin,image,onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({id,name,status,species,gender,origin,image})
      }
   }

   useEffect(() =>{
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true)
         }
      })
   }, [myFavorites]);

   return (
      <div>
         <button onClick={handleFavorite}>{isFav ? '❤️':'🤍'}</button>
         <figure className={styleCard.figuraContenedor}>
            <button onClick={()=>onClose(id)} className={styleCard.buttonClose}>X</button>
            <figcaption>
               <NavLink to={`/Detail/${id}`}>
                  <h2>{name}</h2>
               </NavLink>
               <h2>{gender}</h2>
               <h2>{origin}</h2>
            </figcaption>
            <img src={image} alt='' />
            <div className={styleCard.status}>{`${status} ${species}`}</div>
         </figure>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) =>{
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);
