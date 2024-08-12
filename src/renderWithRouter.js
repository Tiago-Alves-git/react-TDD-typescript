import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import React from 'react';

const renderWithRouter = (component, { route = '/' } = {}) => {
  return {
    ...render(
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    ),
  };
};

export default renderWithRouter;
