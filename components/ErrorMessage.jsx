import React from 'react';


const ErrorMessage = ({ children }) => (
  <Alert color="danger" fade={false} data-testid="error">
    {children}
  </Alert>
);

export default ErrorMessage;
