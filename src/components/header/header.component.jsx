import React from 'react';
import './header.styles.scss';
import {Link} from "react-router-dom";
//Sintaxe especial para importar SVG
import {ReactComponent as Logo} from '../../assets/crown.svg.svg';

const Header = () => {
  return (

    <div className='header'>
      <Link to='/'>
        <Logo className='logo-container'/>
      </Link>
      <div className='options'>
        <Link className='options' to='/shop'>
          SHOP
        </Link>
        <Link className='options' to='/shop'>
          CONTACT
        </Link>
      </div>

    </div>

  );
};

export default Header;