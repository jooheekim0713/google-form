import { connect } from 'react-redux';
import React from 'react';

interface TitleProps {
  title?: { text: string; description: string };
}

const ViewForm = ({ title }: TitleProps) => {
  return <div className="flex flex-col items-center">ViewForm </div>;
};

const mapStateToProps = (state: { text: string; description: string }) => {
  return {
    text: state.text,
    description: state.description,
  };
};

export default connect(mapStateToProps)(ViewForm);
