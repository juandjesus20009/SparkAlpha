// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkAlpha title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkAlpha/i);
    expect(titleElement).toBeInTheDocument();
});
