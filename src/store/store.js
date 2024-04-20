import { configureStore } from '@reduxjs/toolkit'


import projectSlice from './ProjectSlice'

export const store= configureStore({
    reducer:{
       
        projectAction:projectSlice
    }
})