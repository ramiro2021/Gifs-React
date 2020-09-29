import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Vikings', 'Harry Potter']);

    // const handleAdd = () => {
    //     setCategories(['Naruto', ...categories]);
    // }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>
                        (
                            <GifGrid
                                key={category}
                                category={category} />
                        )
                    )
                }
            </ol>
        </div>
    )
}
