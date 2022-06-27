import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../components/API/API";

const initialState ={
    transports: []
}

export const fetchTransports = createAsyncThunk('/', async () => {
    const response = await API.get('api/Transports');
    return response.data
});

export const TransportsSlice = createSlice({
    name: 'Transports',
    initialState,
    reducers:{

    },
    extraReducers: {
        [fetchTransports.fulfilled]: (state, action)=> {
            state.transports = [...action.payload];
        }
    }
});

export default TransportsSlice.reducer;