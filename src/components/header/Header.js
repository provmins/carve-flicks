import React from 'react';
import { mobileLogo, menuBar } from '../../assets/images';

const Header = () => {
  return (
    <div>
      <div>
        <img src={mobileLogo} alt="logo" />
        <button>
          <img src={menuBar} alt="menubar" />
        </button>
      </div>
    </div>
  );
};

export default Header;
