import React from 'react';
import { Spinner } from 'native-base';

const Loading = ({ color, show }) => show ? 
    <Spinner color={ color } /> :
    null;

export default Loading;