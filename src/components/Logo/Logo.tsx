import React from 'react';

import { SLogo, SImage, SLogoTitle } from './logo.style';
import bowl from '../../assets/bowl.png';

const Logo = () => {
  return (
    <SLogo>
      <SLogoTitle>Let's play a <span>game!</span></SLogoTitle>
      <SImage>
        <img src={bowl} alt="logo" aria-label="logo" />
      </SImage>
    </SLogo>
  );
};

export default Logo;