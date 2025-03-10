import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Interface defining the shape of our counter state
export interface CounterState {
    value: number,
    loading: boolean,
    quote: string,
    error: string | null,
    author: string
}

// Initial state for the counter
const initialState: CounterState = {
    value: 0, quote: "", loading: false, error: null, author: ""
}

/**
 * A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. 
 * The name comes from splitting up the root Redux state object into multiple "slices" of state.
 */
// Create a slice for counter with reducers
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Increment the counter by 1
        increment: state => { state.value++ },
        // Decrement the counter by 1
        decrement: state => { state.value-- },
        // Increment the counter by a specified amount
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchQuoteAsync.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchQuoteAsync.fulfilled, (state, action) => {
                state.loading = false,
                    state.quote = action.payload.content,
                    state.author = action.payload.author
            }).addCase(fetchQuoteAsync.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.error.message || null
            }
            )
    }
})

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the reducer
export default counterSlice.reducer

// Selector to get counter value from root state
export const selectCount = (state: RootState) => state.counter.value
export const selectQuote = (state: RootState) => state.counter.quote
export const selectLoading = (state: RootState) => state.counter.loading
export const selectError = (state: RootState) => state.counter.error

/**
 * A thunk is a redux function that can contain async logic.
 * It can dispatch multiple actions and has access to the store's state.
 * Thunks are typically used to fetch data from an API and dipatch actions to update the state.
 */

export const fetchQuoteAsync = createAsyncThunk(
    'counter/fetchQuote',
    async () => {
        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()
        console.log({data});
        return data
    }
)