import { titleSlice } from './../redux/title/titleSlice';
import { configureStore } from '@reduxjs/toolkit';
import { questionSlice } from '../redux/question/questionSlice';

export const store = configureStore({
  reducer: {
    title: titleSlice.reducer,
    questions: questionSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
