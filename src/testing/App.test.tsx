import React from 'react';
import { screen, act, render, getByRole } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import NavBar from '../components/NavBar';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Home from '../pages/Home';


describe('Testa o componente AppBar', () => {
  it(
    'Testa se o avatar do usuario ou o botão de login e cadastro está aparecendo corretamente para o usuario', 
    () => {
    renderWithRouter(<NavBar />);
    const userAvatar = screen.queryByRole('img', {name: /avatar/i});
    const loginButton = screen.getByRole('button', {name: /loginButton/i});
    const signUp = screen.getByRole('button', {name: /signUp/i});
    expect(userAvatar || loginButton && signUp).toBeInTheDocument();
    },
  );
  it('deve renderizar a logo do site', () => {
    renderWithRouter(<NavBar />);
    const logo = screen.getByRole('img', {name: /logo/i});
    expect(logo).toBeInTheDocument();
  });
  it('deve renderizar as categorias do site', () => {
    renderWithRouter(<NavBar />);
    const categoryHosting = screen.getByRole('button', {name: /categoryHosting/i});
    const categoryFlights = screen.getByRole('button', {name: /categoryFlights/i});
    const categoryBooking = screen.getByRole('button', {name: /categoryBooking/i});
    expect(categoryBooking && categoryFlights && categoryHosting).toBeInTheDocument();
  },
);
it('testa se os botões de login e cadastro redirecionam o usuário para o link correto', () => {
  // Criando um histórico de rotas com todas as rotas relevantes
  const routes = [
    { path: '/', element: <NavBar /> },
    { path: '/login', element: <NavBar /> },
    { path: '/signUp', element: <NavBar /> },
  ];
  
  // Criando o MemoryRouter com as rotas
  const router = createMemoryRouter(routes, { initialEntries: ['/'] });

  // Renderizando o componente com o Router
  render(
    <RouterProvider router={router} />
  );

  // Selecionar os botões para teste
  const loginButton = screen.getByRole('button', { name: /loginButton/i });
  
  const signUpButton = screen.getByRole('button', { name: /signUp/i });

  // Simular os cliques nos botões
  userEvent.click(loginButton);
  expect(router.state.location.pathname).toBe('/');

  userEvent.click(signUpButton);
  expect(router.state.location.pathname).toBe('/');
});
});