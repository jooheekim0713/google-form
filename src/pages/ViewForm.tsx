import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectTitle } from '../redux/title/titleSlice';
import { selectQuestion } from '../redux/question/questionSlice';
import { connect } from 'react-redux';
import React from 'react';

interface TitleProps {
  title?: { text: string; description: string };
}

const ViewForm = ({ title }: TitleProps) => {
  const subject = useAppSelector(selectTitle);
  const questions = useAppSelector(selectQuestion);
  console.log(questions);

  return (
    <div className="flex flex-col items-center">
      미리보기 화면입니다.
      <div className="w-5/6 md:w-4/6 lg:w-1/2 min-w-min rounded-lg p-3 bg-slate-50">
        <section>
          <h1 className="text-5xl">{subject.text}</h1>
          <h2 className="text-xl">{subject.description}</h2>
        </section>
        <ol>
          {questions.map((question) => (
            <li className="" key={question.id}>
              <div>{question.title}</div>
              <div>{question.type}</div>
              {Array.isArray(question.answers) ? (
                <ol>
                  {question.answers.map((answer, index) => (
                    <li>{answer}</li>
                  ))}
                </ol>
              ) : (
                <div>{question.answers}</div>
              )}
              <div>{question.required.toString()}</div>
            </li>
          ))}
        </ol>
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
