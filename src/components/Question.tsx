import { useAppSelector, useAppDispatch } from '../app/hooks';
import {
  selectQuestion,
  updateRequired,
  updateType,
  updateTitle,
  removeAnswer,
  copyQuestion,
  deleteQuestion,
} from '../redux/question/questionSlice';
import { IoTrashOutline } from 'react-icons/io5';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { IoMdCopy } from 'react-icons/io';
import DisplayQuestions from './DisplayQuestions';
import React from 'react';

interface CopyOrDeleteQuestionProps {
  id: number;
  title: string;
  type: string;
  answers: string[];
  required: boolean;
}

const Question = () => {
  const dispatch = useAppDispatch();
  const handleSelect = (
    question: CopyOrDeleteQuestionProps,
    index: number,
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selected = e.target.value;
    dispatch(updateType({ questions: options, index, type: selected }));
  };

  const options = useAppSelector(selectQuestion);
  //question.type selected 속성 추가

  console.log(options);
  const handleTitle = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(
      updateTitle({
        questions: options,
        id: parseInt(e.currentTarget.name),
        title: e.currentTarget.value,
      })
    );
  };

  const copyOrDeleteQuestion = (
    question: CopyOrDeleteQuestionProps,
    index: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e.currentTarget.name.includes('copy')) {
      dispatch(copyQuestion({ questions: options, index, question }));
    } else {
      dispatch(deleteQuestion({ questions: options, index, question }));
    }
  };
  const handleRequired = (id: number, required: boolean) => {
    dispatch(updateRequired({ questions: options, id, required }));
  };

  return (
    <ol>
      {options.map((question, index) => (
        <li className="p-4 m-2" key={question.id}>
          <div className="flex justify-between mb-2">
            <input
              type="text"
              name={question.id.toString()}
              value={question.title}
              onChange={handleTitle}
              className="block"
            />
            <select
              className="block"
              onChange={(e) => handleSelect(question, index, e)}
            >
              <option value="text">단답형</option>
              <option value="textarea">장문형</option>
              <option value="radio">객관식</option>
              <option value="checkBox">체크박스</option>
              <option value="dropdown">드롭다운</option>
            </select>
          </div>
          <DisplayQuestions
            id={question.id}
            type={question.type}
            answers={question.answers}
          />
          <div className="flex text-2xl">
            <button
              name="copy-button"
              title="복사"
              className="ml-auto mr-2"
              onClick={(e) => copyOrDeleteQuestion(question, index, e)}
            >
              <IoMdCopy />
            </button>
            <button
              name="delete-button"
              title="삭제"
              className="mr-2"
              onClick={(e) => copyOrDeleteQuestion(question, index, e)}
            >
              <IoTrashOutline />
            </button>
            <button
              className="mr-2"
              title="필수조건 변경"
              onClick={() => handleRequired(question.id, question.required)}
            >
              {question.required ? <BsToggle2Off /> : <BsToggle2On />}
            </button>
          </div>
        </li>
      ))}
    </ol>
  );
};

export default Question;
