import React,{useEffect} from "react"
import { useDispatch } from "react-redux";
import { loadmovies } from "./Actions/moviesAction";



function App() {
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(loadmovies());
})
  return (
    <div className="App">
<h1>Moviezzz</h1>
    </div>
  );
}

export default App;
