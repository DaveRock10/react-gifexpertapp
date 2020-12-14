import React, {Fragment, useState} from 'react';
import { AddCategoria } from './components/AddCategoria';
import { GiftGrid } from './components/GiftGrid';

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch Man']);
    

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategoria setCategorias={ setCategorias }/>
            <hr/>

            <ol>
                {
                    categorias.map( (item, index) => 

                        <GiftGrid 
                            key={item}
                            categoria={item}
                        />

                    )
                }
            </ol>
        </>
    );

};

export default GifExpertApp;