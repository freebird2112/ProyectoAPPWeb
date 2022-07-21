import React from 'react';
import _ from 'lodash';
import Local from './Local';

const LocalList = ({ locals, setLocals }) => {

  const handleRemoveLocal = (id) => {
    setLocals(locals.filter((local) => local.id !== id));
  };

  return (
    <React.Fragment>
      <div className="local-list">
        {!_.isEmpty(locals) ? (
          locals.map((local) => (
            <Local key={local.id} {...local} handleRemoveLocal={handleRemoveLocal} />
          ))
        ) : (
          <p className="message">No Local available. Please add some local.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default LocalList;