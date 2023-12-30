import { useAppDispatch } from '../app/hooks';
import { updateAnswer, removeAnswer } from '../redux/question/questionSlice';
import { IoMdClose, IoMdCopy } from 'react-icons/io';
import React from 'react';

interface QuestionsProps {
  options: Array<{
    id: number;
    title: string;
    type: string;
    answers: string[];
    required: boolean;
  }>;
}

interface AnswerProps {
  id: number;
  type: string;
  answers: string[];
}

type QProps = QuestionsProps & AnswerProps;

const DisplayQuestions = ({ options, id, type, answers }: QProps) => {
  const dispatch = useAppDispatch();

  const updateAnswers = (
    index: number,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    dispatch(
      updateAnswer({
        questions: options,
        id,
        answerId: index,
        answer: e.currentTarget.value,
      })
    );
  };

  const removeAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(
      removeAnswer({
        questions: options,
        id,
        answerId: parseInt(e.currentTarget.value),
      })
    );
  };
  switch (type) {
    case 'dropdown':
      return (
        <ol className="list-decimal ps-4">
          {answers.map((answer, index) => (
            <li key={index}>
              <div className="mb-2">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => updateAnswers(index, e)}
                  className="bg-inherit border-b-2 "
                />
                <button onClick={removeAnswers} value={index}>
                  <IoMdClose className="inline text-xl" />
                </button>
              </div>
            </li>
          ))}
        </ol>
      );
      break;
    case 'checkBox':
      return (
        <ol>
          {answers.map((answer, index) => (
            <li className="mb-2" key={index}>
              <input type="checkBox" name="" id="" className="mr-2" />
              <input
                type="text"
                value={answer}
                onChange={(e) => updateAnswers(index, e)}
                className="bg-inherit border-b-2 "
              />
              <button onClick={removeAnswers} value={index}>
                <IoMdClose className="inline text-xl" />
              </button>
            </li>
          ))}
        </ol>
      );
      break;

    case 'radio':
      return (
        <ol className="my-2">
          {answers.map((answer, index) => (
            <li className="mb-2" key={index}>
              <input type="radio" name="" id="" className="mr-2" />
              <input
                type="text"
                value={answer}
                onChange={(e) => updateAnswers(index, e)}
                className="bg-inherit border-b-2 "
              />
              <button onClick={removeAnswers} value={index}>
                <IoMdClose className="inline text-xl" />
              </button>
            </li>
          ))}
        </ol>
      );
      break;
    case 'textarea':
      return (
        <input
          type="text"
          disabled
          placeholder="장문형 텍스트"
          className="w-full border-b-2 border-dotted bg-inherit my-2"
        />
      );
      break;
    case 'text':
      return (
        <input
          type="text"
          disabled
          placeholder="단답형 텍스트"
          className="border-b-2 border-dotted bg-inherit my-2"
        />
      );
      break;

    default:
      throw new Error(
        `지원되지 않는 타입의 설문입니다. 입력된 설문 타입 : ${type}`
      );
      break;
  }
};

export default DisplayQuestions;
