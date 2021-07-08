
const initState{
    popular:[],
    upcoming:[],
    top_rated:[],
}


const moviesReducer=(state=initState,action)=>{
switch(action.type){
    case "FETCH_MOVIE":
        return{...state}
    default:
        return{...state}
}
}