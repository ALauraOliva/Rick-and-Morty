import Card from '../Card/Card.jsx';
import styleCards from './Cards.module.css'
import { useEffect, useState} from 'react';
import PreLoader1 from '../PreLoader/PreLoader.js'

//TODO ES UN OBJETO!!!!!--------------------------------------------------
export default function Cards(props) { //si lo hubiera destruct {characteres}
   const [loading,setLoading] = useState(false); //?Preloader

   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
      },1000)
   }, [])

   return(  //!Card no es una FUNCION es un componentes, por ello mando como si
   //!fuera propiedades de un html etiqueta
   <>
       {
         loading ?
            <PreLoader1/>
         :
            <div className={styleCards.gridCards}>
               {props.characters.map((card)=>{
                  //!id,name,status,species,gender,origin,image,onClose CARD
                  return(
                     <Card
                        key = {card.id} //?esto es porque REACT lo pide
                        id = {card.id}
                        name = {card.name}
                        status = {card.status}
                        species = {card.species}
                        gender = {card.gender}
                        origin = {card.origin.name}
                        image = {card.image}
                        onClose={props.onClose}
                     />
                  )
                  }
               )}
            </div>
      }
   </>
  
   );   
}
