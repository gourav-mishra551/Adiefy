import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id : [],
}

export const counterslice = createSlice({
    name: "idstore",
    initialState,
    reducers:{
        idstorePush:(state , action)=>{
            state.id.push(action.payload)
        },
        idstorePop:(state , action)=>{
            state.id = state.id.filter(id => id !== action.payload)
        } 
    }
})

export const {idstorePop ,idstorePush} = counterslice.actions

export default counterslice.reducer