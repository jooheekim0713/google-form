import React, { useState } from 'react';
import Title from '../components/Title';
import Question from '../components/Question';

type SurveyInfo = {
  title: string | '';
  description: string | '';
};

const initialValue = {
  title: '',
  description: '',
};

export default function Form() {
  /** 
  const [survey, setSurvey] = useState<SurveyInfo>(initialValue);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSurvey({ ...survey, [e.currentTarget.name]: e.currentTarget.value });
  };
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(e);
  };
  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let reset = window.confirm(
      '양식을 지우시겠습니까? \n모든 질문에서 답변이 삭제되며 되돌릴 수 없습니다.'
    );
    if (reset) {
      setSurvey(initialValue);
    }
  };
*/
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-5/6 md:w-4/6 lg:w-1/2 min-w-min rounded-lg p-3 bg-slate-50">
        {/**<form onSubmit={handleSubmit}>*/}
        <Title />
        <Question />
        <div className="flex justify-between">
          <button>제출하기</button>
          {/** <button onClick={resetForm}>양식지우기</button> */}
        </div>
        {/** </form> */}
      </div>
    </div>
  );
}
