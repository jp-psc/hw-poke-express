import React from 'react'
    
function Index (props) {
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        };

    return (
                <div>
                    <h1>See all the Pokemon!</h1>
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