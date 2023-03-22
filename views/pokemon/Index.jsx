import React from 'react'
    
const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };

function Index(props) {

    return (
                <div>
                    <h1 style={myStyle}>See all the Pokemon!</h1>
                    <ul>
                        {props.pokemon.map((pokemon, index) => 
                            <li key={index}>
                                <a href={`/pokemon/${index}`}><strong>{pokemon.name}</strong></a>
                            </li>
                        )}
                    </ul>
                </div>
            )}

export default Index