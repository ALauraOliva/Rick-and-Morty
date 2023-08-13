import Card from "../Card/Card"
import styleFavs from './Favorites.module.css'
import { useDispatch, useSelector } from "react-redux"
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from "react";

export default function Favorites(){
    const [aux, setAux] = useState(false);

    const dispatch    = useDispatch()
    const dynamicChars = useSelector((state) => state.dynamicChars)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(!aux);
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <>
            <div className={styleFavs.contenedorGlobalFavs}> 
                <div className={styleFavs.containerFiltros}>
                    <div>Filters : </div>
                    <select onChange={handleOrder}>
                        <option value="N">None</option>
                        <option value="A">Ascendent</option>
                        <option value="D">Descendent</option>
                    </select>

                    <select onChange={handleFilter}>
                        <option value="All">All</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                    </select>
                </div>
            </div>

            <div className={styleFavs.container_Grid_Favs}>
                {
                    dynamicChars?.map(fav =>{
                        return(
                            <Card
                                key     = {fav.id}
                                id      = {fav.id}
                                name    = {fav.name}
                                status  = {fav.status}
                                species = {fav.species}
                                gender  = {fav.gender}
                                origin  = {fav.origin}
                                image   = {fav.image}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}