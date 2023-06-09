import Card from './Card';
//TODO ES UN OBJETO!!!!!--------------------------------------------------
export default function Cards(props) { //si lo hubiera destruct {characteres}
   console.log(props)
   return(  //!Card no es una FUNCION es un componentes, por ello mando como si
   //!fuera propiedades de un html etiqueta
   <div>
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
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
         )
         }
      )}
   </div>);   
}
