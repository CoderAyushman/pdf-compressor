import {configureStore} from "@reduxjs/toolkit";
import NavSlice from "./slices/NavSlice";

const store=configureStore({
    reducer:{
        navs:NavSlice.reducer,
    },
});

export default store;