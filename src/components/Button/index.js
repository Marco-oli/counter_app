import React from 'react';

import {ButtonText, Container} from './styles';

export const Button = ({title, onPress, width, disabled, icon}) => {
  return (
    <Container width={width} onPress={onPress} disabled={disabled}>
      {icon && icon}
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};
