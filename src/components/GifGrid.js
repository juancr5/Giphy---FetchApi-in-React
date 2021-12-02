import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

const GifGrid = ({category}) => {

    //useFetchGifs recibe el atributo a buscar en la api
    const {data:images, loading} = useFetchGifs(category);
    console.log("GifGrid: " + category)
    return (
        <>
            <h3>{category}</h3>
            {loading && <p> Loading...</p>
            }
            <div className="card-grid">        
                {
                    /*
                    data.map( ({id, title}) => (
                        <li key={id}> {title} </li>
                    ))
                    */
                    
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid;
