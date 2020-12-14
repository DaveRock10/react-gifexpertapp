import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategoria = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');

    const hanldeInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const hanldeSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 0) {
            setCategorias( categoriasActuales => [ inputValue, ...categoriasActuales] );
        }
    }


    return (
        <form onSubmit={hanldeSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={ hanldeInputChange }
            />
        </form>
    )
}

AddCategoria.propTypes = {
    setCategorias: PropTypes.func.isRequired
};
