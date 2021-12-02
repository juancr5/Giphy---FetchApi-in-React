
import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('Escriba un Texto');

    //
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2 ) {
            // Asigna el valor del input al arreglo en GifExpertApp
            setCategories( cats => [...cats, inputValue]); 
            setInputValue('')
        }
    }


    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

//Obliga a pasar un SetCategories atraves del Props
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
