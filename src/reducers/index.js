import {FETCH_SMURF_START, FETCH_SMURF_SUCESS} from '../actions/index'

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
        default:
            return state;
    }
}

export default reducer;







//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.