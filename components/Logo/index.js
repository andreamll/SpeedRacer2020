import React from 'react';
import { Image, Platform } from 'react-native';

import LogoImg from '../../assets/logo.png';

const Logo = () => {
    console.log(Platform.OS) // ios || android
    return <Image source={ LogoImg } />
};

export default Logo;