import React from 'react';
import { Button as Btn } from './styles';

const Button = props => <Btn {...props}>{props.children}</Btn>;

export default Button;
