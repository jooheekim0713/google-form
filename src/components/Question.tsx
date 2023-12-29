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
import { IoMdClose, IoMdCopy } from 'react-icons/io';
import React from 'react';

interface QuestionsProps {
  options?: Array<{
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

const DisplayQuestions = ({ id, type, answers }: AnswerProps) => {
  const removeAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    //객체를 넘겨줘야하는데 이 컴포넌트에 받은 데이터는 id, type,answers밖에 없다.
    console.log(id, e.currentTarget.value);
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
                  name=""
                  id=""
                  value={answer}
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
        <>
          {answers.map((answer, index) => (
            <div className="mb-2">
              <input type="checkBox" name="" id="" className="mr-2" />
              <input
                type="text"
                name=""
                id=""
                value={answer}
                className="bg-inherit border-b-2 "
              />
              <button onClick={removeAnswers} value={index}>
                <IoMdClose className="inline text-xl" />
              </button>
            </div>
          ))}
        </>
      );
      break;

    case 'radio':
      return (
        <div className="my-2">
          {answers.map((answer, index) => (
            <div className="mb-2">
              <input type="radio" name="" id="" className="mr-2" />
              <input
                type="text"
                name=""
                id=""
                value={answer}
                className="bg-inherit border-b-2 "
              />
              <button onClick={removeAnswers} value={index}>
                <IoMdClose className="inline text-xl" />
              </button>
            </div>
          ))}
        </div>
      );
      break;
    case 'textarea':
      return (
        <input
          type="text"
          name=""
          id=""
          value={answers.toString()}
          placeholder="장문형 텍스트"
          className="w-full border-b-2 border-dotted bg-inherit my-2"
        />
      );
      break;
    case 'text':
      return (
        <input
          type="text"
          value={answers.toString()}
          placeholder="단답형 텍스트"
          className="border-b-2 border-dotted bg-inherit my-2"
        />
      );
      break;

    default:
      return <p>wrong question type!</p>;
      break;
  }
};

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
    <>
      {options.map((question, index) => (
        <section className="p-4 m-2">
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
        </section>
      ))}
    </>
  );
};

export default Question;
