import { useAppSelector } from '../app/hooks';
import { selectTitle } from '../redux/title/titleSlice';
import { selectQuestion } from '../redux/question/questionSlice';
import Button from '../components/ui/Button';
import React from 'react';

const Question = () => {
  const questions = useAppSelector(selectQuestion);
  //question.required true인 경우 이벤트 추가
  return (
    <ol>
      {questions.map((question) => (
        <li className="p-4 m-2" key={question.id}>
          <div className="mb-2 text-xl text">
            <span className="text-red-500">
              {question.required ? '* ' : ''}
            </span>
            <span>{question.title}</span>
          </div>

          <div>
            {question.type === 'dropdown' ? (
              <select>
                {question.answers.map((answer) => (
                  <option value={answer}>{answer}</option>
                ))}
              </select>
            ) : Array.isArray(question.answers) ? (
              <ol>
                {question.answers.map((answer, index) => (
                  <li key={index}>
                    <label className="block w-full">
                      <input
                        type={question.type}
                        name={question.id.toString()}
                        id={question.id.toString()}
                        className="mr-2"
                      />
                      <span>{answer}</span>
                    </label>
                  </li>
                ))}
              </ol>
            ) : (
              <textarea name="" id="" cols={50} rows={1} />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
};

const ViewForm = () => {
  const subject = useAppSelector(selectTitle);

  const handleSubmit = () => {
    //미리보기 화면에서 제출버튼 클릭시 발생하는 이벤트
    alert('제출하기 버튼 클릭');
  };
  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let reset = window.confirm(
      '양식을 지우시겠습니까? \n모든 질문에서 답변이 삭제되며 되돌릴 수 없습니다.'
    );

    if (reset) {
      //양식 데이터 지우기
    }
  };
  //question.type이 'text'일 경우 길이 제한 'textarea'일경우 길게 작성할 수 있도록 만들것
  return (
    <div className="flex flex-col items-center">
      <div className="w-5/6 md:w-4/6 lg:w-1/2 min-w-min rounded-lg bg-slate-50">
        <section className="rounded-md m-2 p-4">
          <h1 className="text-4xl mb-2">{subject.text}</h1>
          <h2 className="text-xl mb-1">{subject.description}</h2>
          <p className="text-red-500"> * 표시는 필수 질문입니다.</p>
        </section>
        <Question />
        <div className="flex justify-between">
          <Button text="제출" onClick={handleSubmit} />
          <Button text="양식 지우기" onClick={resetForm} />
        </div>
      </div>
    </div>
  );
};

export default ViewForm;
