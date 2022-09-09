import { STATE } from '../../typeCasting/typeCasting'

const initialState = {
    baseUrl: "",
    loading: false,
    postalField: 0,
    postal: [],
    currentSnake: {
        message:'', 
        open: false
    },
    
}


// API Selector
export const BASE_URL = (state: STATE) => state.CalendarStore.baseUrl
export const LOADING = (state: STATE) => state.CalendarStore.loading
export const CURRENTSNAKE = (state: STATE) => state.CalendarStore.currentSnake
export const POSTAL = (state: STATE) => state.CalendarStore.postal
export const POSTALFIELD = (state: STATE) => state.CalendarStore.postalField

export default function AuthReducer(state = initialState, action: any) {
    switch (action.type) {
        case "Loading":
            return {
                ...state,
                loading:action.load
            }
        case "SetPostal":
            return {
                ...state,
                postal:action.load
            }
        case "UpdatePostal":
            return {
                ...state,
                postalField:action.load
            }
        case "SnakeBar":
            return {
                ...state,
                currentSnake: action.load
            }
    }


    return state;
}