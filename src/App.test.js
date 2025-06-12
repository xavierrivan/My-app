import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Lista de Tareas heading', () => {
  render(<App />);
  const heading = screen.getByText(/Lista de Tareas/i);
  expect(heading).toBeInTheDocument();
}); 