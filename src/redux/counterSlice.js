import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 1
    },
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

console.log("Начальное состояние счетчика:", counterSlice.initialState);

console.log("Значение счетчика после увеличения:", counterSlice.reducer(counterSlice.initialState, increment()));

console.log("Значение счетчика после уменьшения:", counterSlice.reducer(counterSlice.initialState, decrement()));
export default counterSlice.reducer