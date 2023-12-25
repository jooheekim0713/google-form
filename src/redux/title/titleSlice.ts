import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface TitleState {
  text: string;
  description: string;
}

const initialState: TitleState = {
  text: '',
  description: '',
};

export const titleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{ text: string; description: string }>
    ) => {
      return {
        ...state,
        text: action.payload.text,
        description: action.payload.description,
      };
    },
  },
});

export const { update } = titleSlice.actions;

export const selectTitle = (state: RootState) => state.title;

export default titleSlice.reducer;
