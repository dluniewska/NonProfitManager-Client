import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../components/API/API";

const initialState ={
    animals: []
}

export const fetchAnimals = createAsyncThunk('/', async () => {
    const response = await API.get('api/Animals');
    return response.data
});

export const AnimalsSlice = createSlice({
    name: 'Animals',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchAnimals.fulfilled]: (state, action)=> {
            state.animals = [...action.payload];
        }
    }
});

export default AnimalsSlice.reducer;