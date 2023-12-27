import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectTitle } from '../redux/title/titleSlice';
import { selectQuestion } from '../redux/question/questionSlice';
import { connect } from 'react-redux';
import React from 'react';

interface TitleProps {
  title?: { text: string; description: string };
}

const Question = () => {
  const questions = useAppSelector(selectQuestion);

  return (
    <ol>
      {questions.map((question) => (
        <li className="p-4 shadow-md rounded-md m-2" key={question.id}>
          <div className="mb-2 text-xl text">
            <span>{question.required ? '* ' : ''}</span>
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

const ViewForm = ({ title }: TitleProps) => {
  const subject = useAppSelector(selectTitle);

  //question.type이 'text'일 경우 길이 제한 'textarea'일경우 길게 작성할 수 있도록 만들것
  return (
    <div className="flex flex-col items-center">
      미리보기 화면입니다.
      <div className="w-5/6 md:w-4/6 lg:w-1/2 min-w-min rounded-lg bg-slate-50">
        <section>
          <h1 className="text-5xl">{subject.text}</h1>
          <h2 className="text-xl">{subject.description}</h2>
        </section>
        <Question />
      </div>
    </div>
  );
};

const mapStateToProps = (state: { text: string; description: string }) => {
  return {
    text: state.text,
    description: state.description,
  };
};

export default connect(mapStateToProps)(ViewForm);
