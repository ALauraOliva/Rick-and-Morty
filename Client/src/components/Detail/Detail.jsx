import styleCard from './Detail.module.css'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import barcode from './barcode.png'
import PreLoader2 from '../PreLoader/PreLoader2';

export default function Detail(){
    const [loading,setLoading]     = useState(true); //?Preloader
    const [character,setCharacter] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              setLoading(false);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    let firma       = String(character?.name);
    let firmaActual = firma.split(" ") 
    let firmaFinal  = '';

    return(
        <>
            {
                loading ?
                    <PreLoader2/>
                :
                <div className={styleCard.contenedorDetail}>
                    <figure className={styleCard.figuraContenedor}>
                        <div className={styleCard.title}>IDENTITY DOCUMENT</div>
                        <div className={styleCard.contenidoContenedor}>
                            <figcaption>
                                <h2> NAME : {character?.name}</h2>
                                <h2> GENRE : {character?.gender}</h2>
                                <h2> ORIGIN : {character?.origin?.name}</h2>
                                <h2> STATUS : {character?.status}</h2>
                                <h2> SPECIE : {character?.species}</h2>
                            </figcaption>
                            <img src={character?.image} alt={character?.name} />                   
                        </div>
                        <div className={styleCard.footerContenedor}>
                            <div className={styleCard.SignatureContenedor}><p>Signature :</p><div>{firmaFinal.concat(firmaActual[0], ' ',firmaActual[1]!==undefined?firmaActual[1]:'')}</div></div>
                            <img src={barcode} alt=""/>
                        </div>
                    </figure>
                </div>
            }
        </>
    );
}