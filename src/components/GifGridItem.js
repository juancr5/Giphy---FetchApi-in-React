import React from 'react'

// devuelve la card con e; titulo y la imagen del gif
export const GifGridItem = ({ title, url, id }) => {

    /* Visualizar los items en la consola
    console.log('GifGridItem =id=: ' + id)
    console.log(' =title=: ' + title + ' =url=: ' + url)
    */

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}