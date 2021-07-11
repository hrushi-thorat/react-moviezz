import React from "react"
//styling
import styled from "styled-components"
import {motion} from "framer-motion"
//redux
import { useSelector } from "react-redux"
import { useHistory } from "react-router"
const MovieDetails=()=>{
    const History=useHistory()
const {image,movie,isLoading}=useSelector((state)=>state.details)
 const backImage="https://image.tmdb.org/t/p/w500" + movie.poster_path
const exitHandler=(e)=>{
if(e.target.classList.contains("shadow")){
    document.body.style.overflow="auto"
    History.push("/")
}
}

return(
    <>
    {!isLoading &&(
<MovieShadow  className="shadow" onClick={exitHandler}>
<DetailCard>
<Stats>
    <Rating>
        <h3>{movie.original_title}</h3>
        <h4>Rating: {movie.vote_average}</h4>
    </Rating>
    <Info>
        <h2>Geners</h2>
    <Geners>
        {movie.genres.map(data=>(
            <h3 key={data.id}>{data.name}</h3>
        ))}
    </Geners>
    </Info>
</Stats>
<Media>
    <img src={backImage} alt={movie.name} />
</Media>
<Description>
    <p>{movie.overview}</p>
</Description>
<div className="gallery">
    {image.backdrops.map(screen=>(
        
        <img src={"https://image.tmdb.org/t/p/w500"+screen.file_path } alt="movie.name" />
    ))}
</div>


</DetailCard>



</MovieShadow>
)}
</>
)


}

const MovieShadow=styled(motion.div)`
min-height: 100vh;
width: 100%;
background: rgba(0,0,0,0.75);
overflow-y: scroll;
position: fixed;
top: 0;
left: 0;
cursor: pointer;
`
const DetailCard=styled(motion.div)`
width: 70%;
padding: 2rem 10rem;
position: absolute;
left: 15%;
background: #fff;
border-radius: 1rem;
img{
    width: 100%;
}
`
const Stats=styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;
`
const Rating=styled(motion.div)`
text-align: left;
h3{
    margin-bottom: 0.8rem;
    font-size: 1.7rem;
    font-weight: bold;
    letter-spacing: 2px;
    
}
`
const Geners=styled(motion.div)`
display: flex;

align-items: center;
justify-content:space-between;
h3{
    margin-right: 0.6rem;
    margin-bottom: 0.8rem;
}
`

const Info=styled(motion.div)`
h2{
    font-size: 1.7rem;
    text-align: left;
}
`
const Media=styled(motion.div)`
margin-top: 4rem;
`
const Description=styled(motion.div)`
font-size: 1.5rem;
font-weight: bold;
margin: 5rem 0rem;
line-height: 2;

`
export default MovieDetails