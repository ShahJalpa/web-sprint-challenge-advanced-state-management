import axios from 'axios';

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCESS = "FETCH_SMURF_SUCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const SET_SMURF_FORM_ERROR = "SET_SMURF_FORM_ERROR";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
    export const fetchSmurfs = () => {
        return dispatch => {
            dispatch({type: FETCH_SMURF_START});

            axios
                .get('http://localhost:3333/smurfs')
                .then((response) => {
                    dispatch({type: FETCH_SMURF_SUCESS, payload: response.data})
                })
                .catch((error) => {
                    dispatch({type: FETCH_SMURF_ERROR, payload: error})
                })
        }
    }

//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
    export const addSmurf = (newSmurf) => {
        return({type: ADD_SMURF, payload: newSmurf});
    }

//3. Add a standard action that allows us to set the value of the error message slice of state.
    export const setFormErrors = (formError) => {
        return({type: SET_SMURF_FORM_ERROR, payload:formError});
    }