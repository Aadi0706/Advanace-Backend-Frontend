
import React from 'react';
import '../App.css';
export default function Display({data}){

    return(
        <div id="container" >
            {
            data.map((e)=>{
                return <div id="chappals">
                <img id="img" src={e.imgURL}></img>
                <h3>{e.title}</h3>
                <h4>Price--{e.price}</h4>
                </div>
            }
            )}
        </div>
    )
}