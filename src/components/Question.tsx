import React, { useRef } from 'react';
import { useState } from 'react';

const Question = () => {
  const [option, setOption] = useState();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <section className="shadow-md rounded-md p-3">
      <div className="flex justify-between ">
        <input type="text" name="question-title" className="block" />
        <select className="block" onChange={handleSelect}>
          <option value="short">단답형</option>
          <option value="essay">장문형</option>
          <option value="multiple">객관식</option>
          <option value="checkbox">체크박스</option>
          <option value="dropdown">드롭다운</option>
        </select>
      </div>
      <input type="text" name="" id="" />
    </section>
  );
};

export default Question;
