import { ADD_FAV, REMOVE_FAV, ORDER,FILTER, RESET } from "./action-types";


const initialState = {  
    myFavorites:[],  
    allCharacters:[],
    filtered:[]
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_FAV:
            return{   
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters:[...state.allCharacters, action.payload],
                filtered:[...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            const newFav = state.allCharacters.filter(char => char.id !== action.payload)
            return{   
                ...state,
                myFavorites: newFav,
                allCharacters: newFav,
                filtered: newFav            
            }
        case FILTER:
           const newFilter = state.filtered.filter(char=> char.gender === action.payload);
           return{
            ...state,
            myFavorites:newFilter
           }
        case ORDER:
            const newOrder = state.allCharacters.sort((a,b)=>{
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

