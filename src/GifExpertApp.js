//Main

import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = ['Volkswagen', 'Suzuki', 'Mazda'];

    // Por defecto el arreglo tendra el primer valor de asigando por el useState
    const [categories, setCategories] = useState(['Volkswagen']);

    //Codigo Html
    return (
        <>
            {/*Titulo*/}
            <h2>GiftExpertApp</h2>

            {/*Componente AddCategory para pasar setCategories atraves del props en el buscador AddCategory*/}
            <AddCategory setCategories={setCategories} />
            <hr/>

            {console.log("GifExpertApp Main: " + categories)}

            {/*Lista de Imagenes*/}
            <ol>
                {
                    categories.map(category => (
                        //return <li key={category}> {category}</li>
                        <GifGrid 
                        key={category} 
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}


export default GifExpertApp;
