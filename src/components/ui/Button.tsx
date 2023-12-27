import React from 'react';

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="text-brand py-2 px-4 rounded-sm">
      {text}
    </button>
  );
};

export default Button;
