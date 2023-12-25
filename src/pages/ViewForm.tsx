import { useAppSelector } from '../app/hooks';
import { selectTitle } from '../redux/title/titleSlice';
import { connect } from 'react-redux';
import React from 'react';

interface TitleProps {
  title?: { text: string; description: string };
}

const ViewForm = ({ title }: TitleProps) => {
  const subject = useAppSelector(selectTitle);
  console.log(subject);

  return (
    <div className="flex flex-col items-center">
      미리보기 화면입니다.
      <div className="w-5/6 md:w-4/6 lg:w-1/2 min-w-min rounded-lg p-3 bg-slate-50">
        <h1 className="text-5xl">{subject.text}</h1>
        <h2 className="text-xl">{subject.description}</h2>
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
