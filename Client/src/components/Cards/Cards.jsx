import Card from '../Card/Card.jsx';
import styleCards from './Cards.module.css'
import PreLoader1 from '../PreLoader/PreLoader.js'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCharacters } from "../../redux/actions.js";

export default function Cards(props) {
   const dispatch             = useDispatch();
   const dynamicChars         = useSelector((state) => state.dynamicChars)
   const [loading,setLoading] = useState(true);

   useEffect(() => { 
      dispatch(getAllCharacters());
   }, [dispatch]);

   useEffect(() => {
      if(dynamicChars.length > 0) {
         setLoading(false);
      }
  }, [dynamicChars])
   
   return(
      <>
         {
            loading 
            ? 
            <PreLoader1/>
            : 
            (
               <div className={styleCards.gridCards}>
                  {dynamicChars.map(card => (
                     <Card
                        key     = {card.id}
                        id      = {card.id}
                        name    = {card.name}
                        status  = {card.status}
                        species = {card.species}
                        gender  = {card.gender}
                        origin  = {card.origin.name}
                        image   = {card.image}
                        onClose = {props.onClose}
                     />
                  ))}
               </div>
            )
         }
      </>
   );   
}