import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import NavBar from '../components/NavBar';

describe('Testa o componente AppBar', () => {
  it(
    'Testa se existe uma barra no topo da aplicação',
    () => {
      renderWithRouter(<NavBar />);
      const menuItem = screen.getByRole('Button', {name: /menu/i});
      expect(menuItem).toBeInTheDocument();
    },
  );

  it(
    'Testa se o avatar do usuario ou o botão de login está aparecendo corretamente para o usuario', 
    async () => {
    renderWithRouter(<NavBar />);
    const userAvatar = screen.getByRole('button', {name: /avatar/i});
    const loginButton = screen.getByRole('button', {name: /loginButton/i});
    expect(userAvatar || loginButton).toBeInTheDocument();
    },
  );
  it('deve renderizar a logo do site', () => {
    renderWithRouter(<NavBar />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });
});