import React from 'react';
import LocalForm from './LocalForm';

const AddLocal = ({ history, locals, setLocals }) => {
  const handleOnSubmit = (local) => {
    setLocals([local, ...locals]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <LocalForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddLocal;
