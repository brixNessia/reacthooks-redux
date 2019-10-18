import React from 'react';

import TopPage from './components/TopPage/TopPage';

function Default(props) {
  const { children } = props;

  return (
    <div>
      <TopPage />
      {children}
    </div>
  );
}

export default Default;
