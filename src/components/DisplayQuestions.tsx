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

export default DisplayQuestions;
