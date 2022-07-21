import React from 'react';
import _ from 'lodash';
import LocalU from './Local_User';

const LocalListU = ({ locals, setLocals }) => {

  const handleRemoveLocal = (id) => {
    setLocals(locals.filter((local) => local.id !== id));
  };

  return (
    <React.Fragment>
      <div className="local-list">
        {!_.isEmpty(locals) ? (
          locals.map((local) => (
            <LocalU key={local.id} {...local} handleRemoveLocal={handleRemoveLocal} />
          ))
        ) : (
          <p className="message">No Local available. Please add some local.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default LocalListU;