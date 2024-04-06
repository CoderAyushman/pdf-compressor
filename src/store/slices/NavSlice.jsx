import {createSlice} from "@reduxjs/toolkit";


const NavSlice=createSlice({

    name:"navs",
   initialState:"white",
    reducers:{
        darkMode(state,action){
            
            if(action.payload==="white"){
                state="black";
                return state;
            }
            else{
                state="white";
                return state;
            }
        },
    },

});

export default NavSlice;
export const {darkMode}=NavSlice.actions;