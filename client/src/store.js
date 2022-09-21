import { configureStore } from "@reduxjs/toolkit";
import  FormsReducer  from "./FormsSlice"

export default configureStore({
    reducer:{
        forms: FormsReducer
    }
})

