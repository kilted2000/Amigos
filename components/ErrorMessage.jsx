import React from 'react';


const ErrorMessage = ({ children }) => (
  <Alert color="danger" fade={false} >
    {children}
  </Alert>
);

export default ErrorMessage;
