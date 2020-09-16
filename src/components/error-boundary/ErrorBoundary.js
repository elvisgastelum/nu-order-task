import React from 'react';

import { ErrorMessage, ErrorMessageWrapper } from './styled';

/**
 * Handle Errors
 *
 * @param {{children: React.ReactElement, error: {message: string, errorEvent: Error}}} props used for this component
 */
export default function ErrorBoundary({ children, error }) {
  console.log(error);
  if (error) {
    return (
      <>
        <ErrorMessageWrapper>
          <ErrorMessage>Ops, {error.message}</ErrorMessage>
        </ErrorMessageWrapper>
        {children}
      </>
    );
  }

  return children;
}
