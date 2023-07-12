import React from 'react'
import stylePreLoader2 from './PreLoader2.module.css'

function PreLoader2(){
    return(
        <div className={stylePreLoader2.contenedorPreLoader}>
           <img className={stylePreLoader2.img} src={require('./portal.png')} alt="loading..." />
           <img className={stylePreLoader2.img2} src={require('./MortyBlink.gif')} alt="loading..." />
        </div>  
    )
}

export default PreLoader2;