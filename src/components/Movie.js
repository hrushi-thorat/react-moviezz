import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"



const Movie=({name,descriptiion,poster,id,rating})=>{


    return(
        <MovieStyle>
            <h2>{name}</h2>
            <p>{rating}/10</p>    
            <img src={poster} alt={name} />
                     
        </MovieStyle>
    )

}
const MovieStyle=styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
    background: white;
  overflow: hidden; 
  img{
      
    width: 100%;
    height: 50vh;
    object-fit: cover;
}  
`


export default Movie