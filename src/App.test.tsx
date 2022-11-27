import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import Routes from './Routes';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });

  it('renders correctly the heading text', () => {
    render(<App />);

    const textElement = screen.getByRole('heading');

    expect(textElement).toBeInTheDocument();
  });

  it('renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/badroute']}>
        <Routes />
      </MemoryRouter>
    );

    const notFoundText = screen.getByRole('heading');

    expect(notFoundText).toHaveTextContent('404');
  });
});
