import React from 'react';
import { screen, act } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import NavBar from '../components/NavBar';

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
});