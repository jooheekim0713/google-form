import { useAppSelector, useAppDispatch } from '../app/hooks';
import { update, selectTitle } from '../redux/title/titleSlice';
import { updateTitle } from '../redux/action';
import { connect } from 'react-redux';
import React from 'react';

interface TitleProps {
  title?: { text: string; description: string };
}

interface updateTitleProps {
  updateTitle: (title: object) => void;
}

type Iprops = TitleProps & updateTitleProps;

const Title = ({ title, updateTitle }: Iprops) => {
  const dispatch = useAppDispatch();
  const subject = useAppSelector(selectTitle);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(
      update({
        ...subject,
        [e.currentTarget.name]: e.currentTarget.value,
      })
    );
  };

  return (
    <section className="rounded-md m-2 p-4">
      <input
        className="block w-full text-4xl mb-2"
        type="text"
        name="text"
        value={subject.text}
        onChange={handleChange}
        placeholder="제목 없는 설문지"
      />
      <input
        className="block w-full text-xl mb-1"
        type="text"
        name="description"
        value={subject.description}
        onChange={handleChange}
        placeholder="설문지 설명"
      />
    </section>
  );
};

const mapStateToProps = (state: { text: string; description: string }) => {
  return {
    text: state.text,
    description: state.description,
  };
};

const mapDispatchToProps = {
  updateTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Title);
