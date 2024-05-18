import {configureStore} from '@reduxjs/toolkit';
import {turnSlice} from './reducer.js'


const store = configureStore({
    reducer: turnSlice.reducer
})

export default store