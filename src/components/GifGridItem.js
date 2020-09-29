import React from 'react'
import '../index.css';
export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="card animate__animated animate__pulse" >
            <img src={url} alt={title}></img>
            <p><strong>{title}</strong></p>
        </div>
    )
}
