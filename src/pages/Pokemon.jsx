import React,{useEffect, useState} from "react"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Loader } from "../components/Loader"



const Pokemon = ()=>{
    const [characters, setCharacters]=useState([])
    const [loader, setLoader] = useState(true)
    
    const getOnePokemon= async (url)=>{
        const response = await fetch(url)
        const data = await response.json()
        return data.sprites.front_shiny
    }

    //async await
    const getAllPokemons = async()=>{
        const pokemons = []
        const url ="https://pokeapi.co/api/v2/pokemon"
        const response = await fetch(url)
        const data = await response.json()
      

    
        for (let item of data.results){
             const image = await getOnePokemon(item.url)
            pokemons.push({name: item.name, image})
        }
        setLoader(false)
         setCharacters(pokemons)
         console.log(pokemons)
    }
    

    useEffect(()=>{
getAllPokemons();

    },[])

const renderPokemons=()=>{
    return (
<div>
    
{characters.map((item, index)=>(
    
<div key={index}><div>{item.name}</div>
<img src={item.image} alt={item.name}/>
</div>


))}
</div>
            
    )
}

    return (
        <>
        
        <Header>Header</Header>
        {loader && <Loader/>}
            {renderPokemons()}
        <Footer>Footer</Footer>
        </>
    )
}

export default Pokemon