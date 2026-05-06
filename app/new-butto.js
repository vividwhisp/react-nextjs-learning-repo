'use client';

import { useState } from 'react';



const products = [
    { title: 'Cabbage', id: 1},
    { title: 'garlic', id: 2},
    { title: 'Apple', id: 3}
]
 
const listItems = products.map( product => 
    <li key={product.id}>
        {product.title}
    </li>
);


function MyButton({count, onClick}){
    
    
    return(
        <button onClick={onClick}>Button({count})</button>
    );
}

export default function MyApp(){
    const [count, setCount] = useState(0);

    function handlClick(){
        setCount(count + 1)
        return document.querySelector("h1").style.backgroundColor = "blue";
    }
    return(
        <div>
            <h1> welcome </h1>
            <MyButton count={count} onClick={handlClick}/>
            <MyButton count={count} onClick={handlClick}/>
            <ul> {listItems} </ul>
            
        </div>
    )
}

const user = {
    name : "raj",
    imageUrl: "",
    imageSize: 90,
}
