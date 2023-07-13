import { ADD_FAV, REMOVE_FAV } from "./action-types";

const initialState = {  
    myFavorites:[],  
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return{                
            }
        case REMOVE_FAV:
            return{                
            }
        default:
            return{...state}
    }
}

export default reducer;