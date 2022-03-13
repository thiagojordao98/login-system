import React from 'react';
import * as C from './styles';
import Logo from './../../components/Input';

export const Home = () => {
  return (
    <>
      <C.Container>
        <input type="text" placeholder="Email" />
        <Logo />
        <input type="text" placeholder="Senha" />
      </C.Container>
    </>
  );
};
