import Card from '../Card/Card.jsx';
import styleCards from './Cards.module.css'
import PreLoader1 from '../PreLoader/PreLoader.js'
import { useEffect, useState } from 'react';

export default function Cards(props) {
   const [loading,setLoading] = useState(false); //?Preloader

   useEffect(() => {
      setLoading(true)

      setTimeout(() => {
         setLoading(false)
      },1000)
   }, [])

   return(
      <>
         {
            loading 
            ?
               <PreLoader1/>
            :
               <div className={styleCards.gridCards}>
                  {props.characters.map((card)=>{
                     return(
                        <Card
                           key     = {card.id} //?esto es porque REACT lo pide
                           id      = {card.id}
                           name    = {card.name}
                           status  = {card.status}
                           species = {card.species}
                           gender  = {card.gender}
                           origin  = {card.origin.name}
                           image   = {card.image}
                           onClose = {props.onClose}
                        />
                     )
                  })}
               </div>
         }
      </>
   );   
}
