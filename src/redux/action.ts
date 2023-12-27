import { UPDATE_TITLE, UPDATE_QUESTION } from './types';

export const updateTitle = () => {
  return {
    type: UPDATE_TITLE,
  };
};

export const updateQuestion = () => {
  return {
    type: UPDATE_QUESTION,
  };
};
