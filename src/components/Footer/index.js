  
import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/img/logo_henriquevigato.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/HenriqueVigato">
        <img src={logo} alt="Logo Henrique" width="120px"/>
      </a>
      <p>
        Orgulhosamente criado por Henrique Vigato durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
