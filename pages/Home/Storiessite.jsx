import React from "react"



export default function Storiessite(props) {
    const { id, title1, title2, img } = props.data;
    return (
        <div className="container--Homesite">
            <img src={img} alt="Opis obrazka"/>
            <div className="titles--Homesite"> 
                <h1>{title1}</h1>
                <h2>{title2}</h2>
                <a href="">
                    <h3>READ STORY</h3>
                </a>
            </div>
        </div>
    )
};