import React from 'react';
import LocalForm from './LocalForm';
import { useParams } from 'react-router-dom';

const EditLocal = ({ history, locals, setLocals }) => {
  const { id } = useParams();
  const localToEdit = locals.find((local) => local.id === id);

  const handleOnSubmit = (local) => {
    const filteredLocals = locals.filter((local) => local.id !== id);
    setLocals([local, ...filteredLocals]);
    history.push('/');
  };

  return (
    <div>
      <LocalForm local={localToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditLocal;