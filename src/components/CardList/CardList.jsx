import React from "react";

import {Card} from "./Card";

import "./Card_list.scss"

const CardList = ({list})=>{
    return (         
         
            <div className="card-list">
                {list.length>=1 && 
                list.map((item, index)=>(
                <Card key={index} name={item.name} image={item.image}></Card>
            ))}</div>
        
    )
}

export default CardList