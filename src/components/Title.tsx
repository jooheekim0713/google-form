import { useAppSelector, useAppDispatch } from '../app/hooks';
import { update, selectTitle } from '../redux/title/titleSlice';
import React from 'react';

const Title = () => {
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

export default Title;
