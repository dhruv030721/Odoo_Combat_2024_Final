import { createSlice } from "@reduxjs/toolkit"

const initialState =
{
    bookData: null,
    issuedBook: null
}


const bookSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        addBookData: (state, action) => {
            state.bookData = action.payload
        },
        addIssuedBook: (state, action) => {
    
            state.issuedBook = action.payload
        }
    }
})


export const { addBookData, addIssuedBook } = bookSlice.actions;


export default bookSlice.reducer;