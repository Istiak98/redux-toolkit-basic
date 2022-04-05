import { authSlice } from "./slice";
const { actions: slice } = authSlice;

//login action

export const loginAction = (phone) => (dispatch) => {
  dispatch(slice.setLogin(phone));
};

//logout action

export const logoutAction = () => (dispatch) => {
  dispatch(slice.setLogout());
};

//get data

export const getDataAction = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        if(response.ok){
           return response.json()
        }
        else{
            console.log("something went wrong");
        }
    })
    .then((json) => dispatch(slice.setData(json)))
};
