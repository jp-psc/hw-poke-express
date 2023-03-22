import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>{props.pokemon.name}</h1>
            <br />
            <img src={props.pokemon.img} />
            <br />

            <a href="/pokemon">Back</a>
        </div>
    )
}

export default Show;