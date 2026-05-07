import { useState } from 'react';

function Square ({value, onSquareClick}){
    return (
        <button className="square" onClick= {onSquareClick}> 
        {value}
        </button>
    )
}

export default function Square(){
    return <button className="square"> X </button>
}