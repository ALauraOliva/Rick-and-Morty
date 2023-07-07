import styleCard from './Detail.module.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(){
    const [character,setCharacter] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className={styleCard.contenedorDetail}>
            <figure className={styleCard.figuraContenedor}>
                <figcaption>
                    <h2> NAME : {character?.name}</h2>
                    <h2> GENRE : {character?.gender}</h2>
                    <h2> ORIGIN : {character?.origin?.name}</h2>
                </figcaption>
                <img src={character?.image} alt={character?.name} />
                <div className={styleCard.status}>{`${character?.status} ${character?.species}`}</div>
            </figure>
        </div>
    );
}