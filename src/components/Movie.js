import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"



const Movie=({name,descriptiion,poster,id})=>{


    return(
        <MovieStyle>
            <h1>{name}</h1>
            <p>{descriptiion}</p>
            <img src={poster} alt={name} />

        </MovieStyle>
    )

}
const MovieStyle=styled(motion.div)`
color: lightblue;
`
export default Movie