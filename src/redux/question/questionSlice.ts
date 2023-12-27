import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface QuestionState {
  id: number;
  title: string;
  type: string;
  answers: string[];
  required: boolean;
}

interface QuestionStates extends Array<QuestionState> {}

const initialState: QuestionState[] = [
  {
    id: 0,
    title: '문항0입니다',
    type: 'checkBox',
    answers: ['첫번째 문항', '두번째 문항', '세번째 문항'],
    required: false,
  },
  {
    id: 1,
    title: '문항1입니다',
    type: 'radio',
    answers: ['첫번째 문항', '두번째 문항', '세번째 문항'],
    required: true,
  },
  {
    id: 2,
    title: '문항2입니다',
    type: 'dropdown',
    answers: ['첫번째 문항', '두번째 문항', '세번째 문항'],
    required: true,
  },
  {
    id: 3,
    title: '문항3입니다',
    type: 'short',
    answers: [''],
    required: true,
  },
];

export const questionSlice = createSlice({
  name: 'qustions',
  initialState,
  reducers: {
    update: (
      state,
      action: PayloadAction<{
        title: string;
        type: string;
        answers: string[];
        required: boolean;
      }>
    ) => {
      return {
        ...state,
        title: action.payload.title,
        type: action.payload.type,
        answers: action.payload.answers,
        required: action.payload.required,
      };
    },
  },
});

export const { update } = questionSlice.actions;

export const selectQuestion = (state: RootState) => state.questions;

export default questionSlice.reducer;