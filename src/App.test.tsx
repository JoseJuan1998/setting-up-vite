import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });

  it('renders correctly the heading text', () => {
    render(<App />);

    const textElement = screen.getByRole('heading');

    expect(textElement).toBeInTheDocument();
  });
});
