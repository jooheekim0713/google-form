import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface QuestionState {
  id: number;
  title: string;
  type: string;
  answers: string[];
  required: boolean;
}

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
    type: 'text',
    answers: [''],
    required: true,
  },
  {
    id: 4,
    title: '문항4입니다',
    type: 'textarea',
    answers: [''],
    required: true,
  },
];

export const questionSlice = createSlice({
  name: 'qustions',
  initialState,
  reducers: {
    updateRequired: (
      state,
      action: PayloadAction<{
        questions: QuestionState[];
        id: number;
        required: boolean;
      }>
    ) => {
      const updatedQuestion = action.payload.questions.map((element) => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            required: !element.required,
          };
        }
        return element;
      });
      return updatedQuestion;
    },
    updateTitle: (
      state,
      action: PayloadAction<{
        questions: QuestionState[];
        id: number;
        title: string;
      }>
    ) => {
      const updatedQuestion = action.payload.questions.map((element) => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            title: action.payload.title,
          };
        }
        return element;
      });
      return updatedQuestion;
    },
    updateType: (
      state,
      action: PayloadAction<{
        questions: QuestionState[];
        index: number;
        type: string;
      }>
    ) => {
      const updatedQuestion = action.payload.questions.map((element) => {
        if (element.id === action.payload.index) {
          return {
            ...element,
            type: action.payload.type,
          };
        }
        return element;
      });
      return updatedQuestion;
    },
    removeAnswer: (
      state,
      action: PayloadAction<{
        questions: QuestionState[];
        id: number;
        title: string;
      }>
    ) => {},
    copyQuestion: (
      state,
      action: PayloadAction<{
        questions: QuestionState[];
        index: number;
        question: QuestionState;
      }>
    ) => {
      const { questions, index, question } = action.payload;
      let questionArr = [...questions];
      questionArr.splice(index, 0, question);
      const updatedArr = questionArr.map((element, index) => {
        return {
          ...element,
          id: index,
        };
      });
      return updatedArr;
    },
    deleteQuestion: (
      state,
      action: PayloadAction<{
        questions: QuestionState[];
        index: number;
        question: QuestionState;
      }>
    ) => {
      const { questions, index, question } = action.payload;
      let questionArr = [...questions];
      questionArr.splice(index, 1);
      return questionArr;
    },
  },
});

export const {
  updateRequired,
  updateType,
  updateTitle,
  removeAnswer,
  copyQuestion,
  deleteQuestion,
} = questionSlice.actions;

export const selectQuestion = (state: RootState) => state.questions;

export default questionSlice.reducer;
