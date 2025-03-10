import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

// Interface defining the shape of our counter state
export interface CounterState {
    value: number
}

// Initial state for the counter
const initialState: CounterState = {
    value: 0
}

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
    }
})

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Export the reducer
export default counterSlice.reducer

// Selector to get counter value from root state
export const selectCount = (state: RootState) => state.counter.value