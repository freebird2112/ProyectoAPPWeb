import React from 'react';
import LocalForm from './LocalForm';

const AddLocal = () => {
  const handleOnSubmit = (local) => {
    console.log(local);
  };

  return (
    <React.Fragment>
      <LocalForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddLocal;