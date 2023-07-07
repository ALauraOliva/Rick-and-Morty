import styleCard from './Card.module.css'
import {NavLink} from 'react-router-dom'
import {addFav, removeFav} from '../../redux/actions'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
//*❤️‍🔥❤️*/
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

   let num = 0;
   return (
      <div className={styleCard.contenedorPrincipal}>
         
            <div className={styleCard.spinningTextWrapper}>
               <div className={styleCard.spinningText}>
                  <p>
                     {name.split("").map((letra, i) => (
                        num=num+8,
                        <span
                           key={i}
                           style={{
                              transform: `rotate(${num}deg)`
                           }}
                        >
                           {letra}
                        </span>
                     ))}
                  </p>
               </div>

               <img src={image} alt={name} />
               <div className={styleCard.image_overlay}>
                  <div className={styleCard.image_buttons}>
                     <button onClick={handleFavorite} className={styleCard.buttonFav}>{isFav ? '❤️‍🔥':'🤍'}</button> 
                     <button onClick={()=>onClose(id)} className={styleCard.buttonClose}>💀</button>
                     <NavLink to={`/Detail/${id}`}>
                        <p>Know More</p>
                     </NavLink>
                     
                  </div>
               </div>
         </div>
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
