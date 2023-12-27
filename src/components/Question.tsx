import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectQuestion } from '../redux/question/questionSlice';
import { IoTrashOutline } from 'react-icons/io5';
import { BsToggle2Off, BsToggle2On } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import { IoMdCopy } from 'react-icons/io';
import { useState } from 'react';
import React from 'react';

const Question = () => {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let selected = e.target.value;
  };
  const questions = useAppSelector(selectQuestion);
  console.log(questions);

  return (
    <>
      <section className="p-4 m-2">
        <div className="flex justify-between mb-2">
          <input type="text" name="question-title" className="block" />
          <select className="block" onChange={handleSelect}>
            <option value="text">단답형</option>
            <option value="textarea">장문형</option>
            <option value="radio">객관식</option>
            <option value="checkBox">체크박스</option>
            <option value="dropdown">드롭다운</option>
          </select>
        </div>
        <input type="text" className="bg-inherit" placeholder="단답형 텍스트" />
        <div className="flex text-2xl">
          <IoMdCopy />
          <IoTrashOutline />
          <BsToggle2Off />
          <BsToggle2On />
        </div>
      </section>
      <section className="p-4 m-2">
        <div className="flex justify-between mb-2">
          <input type="text" name="question-title" className="block" />
          <select className="block" onChange={handleSelect}>
            <option value="text">단답형</option>
            <option value="textarea">장문형</option>
            <option value="radio">객관식</option>
            <option value="checkBox">체크박스</option>
            <option value="dropdown">드롭다운</option>
          </select>
        </div>
        <input type="text" name="" id="" placeholder="장문형" />
        <div className="flex text-2xl">
          <IoMdCopy />
          <IoTrashOutline />
          <BsToggle2Off />
          <BsToggle2On />
        </div>
      </section>
      <section className="p-4 m-2">
        <div className="flex justify-between mb-2">
          <input type="text" name="question-title" className="block" />
          <select className="block" onChange={handleSelect}>
            <option value="text">단답형</option>
            <option value="textarea">장문형</option>
            <option value="radio">객관식</option>
            <option value="checkBox">체크박스</option>
            <option value="dropdown">드롭다운</option>
          </select>
        </div>
        <div className="mb-2">
          <input type="radio" name="" id="" className="mr-2" />
          <input type="text" name="" id="" className="bg-inherit border-b-2 " />
          <IoMdClose className="inline text-xl" />
        </div>
        <div className="mb-2">
          <input type="radio" name="" id="" className="mr-2" />
          <input type="text" name="" id="" className="bg-inherit border-b-2 " />
          <IoMdClose className="inline text-xl" />
        </div>
        <div className="flex text-2xl">
          <IoMdCopy />
          <IoTrashOutline />
          <BsToggle2Off />
          <BsToggle2On />
        </div>
      </section>
      <section className="p-4 m-2">
        <div className="flex justify-between mb-2">
          <input type="text" name="question-title" className="block" />
          <select className="block" onChange={handleSelect}>
            <option value="text">단답형</option>
            <option value="textarea">장문형</option>
            <option value="radio">객관식</option>
            <option value="checkBox">체크박스</option>
            <option value="dropdown">드롭다운</option>
          </select>
        </div>
        <div className="mb-2">
          <input type="checkBox" name="" id="" className="mr-2" />
          <input type="text" name="" id="" className="bg-inherit border-b-2 " />
          <IoMdClose className="inline text-xl" />
        </div>
        <div className="mb-2">
          <input type="checkBox" name="" id="" className="mr-2" />
          <input type="text" name="" id="" className="bg-inherit border-b-2 " />
          <IoMdClose className="inline text-xl" />
        </div>
        <div className="flex text-2xl">
          <IoMdCopy />
          <IoTrashOutline />
          <BsToggle2Off />
          <BsToggle2On />
        </div>
      </section>
    </>
  );
};

export default Question;
