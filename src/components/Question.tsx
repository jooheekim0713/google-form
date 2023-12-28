import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectQuestion } from '../redux/question/questionSlice';
import { IoTrashOutline } from 'react-icons/io5';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { IoMdCopy } from 'react-icons/io';
import { useState } from 'react';
import React from 'react';

interface AnswerProps {
  type: string;
  answers: string[];
}

const DisplayQuestions = ({ type, answers }: AnswerProps) => {
  switch (type) {
    case 'dropdown':
      return (
        <ol className="list-decimal ps-4">
          {answers.map((answer) => (
            <li>
              <div className="mb-2">
                <input
                  type="text"
                  name=""
                  id=""
                  value={answer}
                  className="bg-inherit border-b-2 "
                />
                <IoMdClose className="inline text-xl" />
              </div>
            </li>
          ))}
        </ol>
      );
      break;
    case 'checkBox':
      return (
        <>
          {answers.map((answer) => (
            <div className="mb-2">
              <input type="checkBox" name="" id="" className="mr-2" />
              <input
                type="text"
                name=""
                id=""
                value={answer}
                className="bg-inherit border-b-2 "
              />
              <IoMdClose className="inline text-xl" />
            </div>
          ))}
        </>
      );
      break;

    case 'radio':
      return (
        <div className="my-2">
          {answers.map((answer) => (
            <div className="mb-2">
              <input type="radio" name="" id="" className="mr-2" />
              <input
                type="text"
                name=""
                id=""
                value={answer}
                className="bg-inherit border-b-2 "
              />
              <IoMdClose className="inline text-xl" />
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

const Question = () => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selected = e.target.value;
    alert('선택됐음!');
  };
  const questions = useAppSelector(selectQuestion);
  console.log(questions);
  //question.type selected 속성 추가
  return (
    <>
      {questions.map((question) => (
        <section className="p-4 m-2">
          <div className="flex justify-between mb-2">
            <input
              type="text"
              name="question-title"
              value={question.title}
              className="block"
            />
            <select className="block" onChange={handleSelect}>
              <option value="text">단답형</option>
              <option value="textarea">장문형</option>
              <option value="radio">객관식</option>
              <option value="checkBox">체크박스</option>
              <option value="dropdown">드롭다운</option>
            </select>
          </div>
          <DisplayQuestions type={question.type} answers={question.answers} />
          <div className="flex text-2xl">
            <IoMdCopy className="ml-auto mr-2" />
            <IoTrashOutline className="mr-2" />
            {question.required ? (
              <BsToggle2Off className="mr-2" />
            ) : (
              <BsToggle2On className="mr-2" />
            )}
          </div>
        </section>
      ))}
    </>
  );
};

export default Question;
