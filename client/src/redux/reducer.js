import { ADD_FAV, REMOVE_FAV, ORDER,FILTER, RESET } from "./action-types";


const initialState = {  
    myFavorites:[],  
    allCharacters:[]    
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return { ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };
        case REMOVE_FAV:
            return { ...state, 
                myFavorites: action.payload,
                allCharacters:action.payload 
            };
        case FILTER:
           const newFilter = state.allCharacters.filter(char=> char.gender === action.payload);
           return{
            ...state,
            myFavorites:newFilter
           }
        case ORDER:
            const newOrder = state.myFavorites.sort((a,b)=>{
                if(a.id > b.id){
                    return'Ascendente' === action.payload ? 1 : -1;
                }
                if(a.id < b.id){
                    return'Descendente' === action.payload ? 1 : -1;
                }
                return 0;
            })
            return{
                ...state,
                myFavorites:newOrder
            }
            case RESET:
                return{
                    ...state,
                    myFavorites:[...state.allCharacters]
                }
        default:
            return{...state}
    }
}

export default reducer;

