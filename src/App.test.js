import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders DogList homepage', () => {
  render(
    <MemoryRouter initialEntries={["/dogs"]}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByText(/Meet Our Dogs!/i);
  expect(heading).toBeInTheDocument();
});

test('renders DogDetails for Duke', () => {
  render(
    <MemoryRouter initialEntries={["/dogs/duke"]}>
      <App />
    </MemoryRouter>
  );

  const heading = screen.getByRole('heading', { name: /duke/i, level: 2 });
  expect(heading).toBeInTheDocument();
});
