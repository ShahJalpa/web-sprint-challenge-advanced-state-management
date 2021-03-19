import {FETCH_SMURF_START, FETCH_SMURF_SUCESS, FETCH_SMURF_ERROR, ADD_SMURF, SET_SMURF_FORM_ERROR} from '../actions/index'

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
    smurfs: [],
    appIsLoading: false,
    error:""
}

//2. Add in the arguments needed to complete a standard reducer function.
const reducer = (state = initialState, action)=>{
    switch(action.type){
        //3. Add in a reducer case to accomidate the start of a smurf fetch.
        case(FETCH_SMURF_START):
            return({
                ...state,
                appIsLoading: true,
                error:""
            })

        //4. Add in a reducer case to accomidate the successful smurf api fetch.
        case(FETCH_SMURF_SUCESS):
            return({
                ...state,
                smurfs: action.payload,
                appIsLoading: false,
                error:''
            })

        //5. Add in a reducer cases to accomidate the failed smurf api fetch.
        case(FETCH_SMURF_ERROR):
            return({
                ...state,
                error:"something is not right",
                appIsLoading: false
            })

        //6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
        case(ADD_SMURF):
            return({
                ...state,
                smurfs: [...state.smurfs, action.payload],
                appIsLoading: false
            })
        
        //7. Add in a reducer case that adds in a value to the error message.
        case(SET_SMURF_FORM_ERROR):
            return({
                ...state,
                appIsLoading: false,
                error: "please fill the required from value"
            })
        default:
            return state;
    }
}

export default reducer;









