import React from 'react';
import Title from '../components/Title';
import Question from '../components/Question';

export default function Form() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-5/6 md:w-4/6 lg:w-1/2 min-w-min rounded-lg bg-slate-50">
        <Title />
        <Question />
      </div>
    </div>
  );
}
