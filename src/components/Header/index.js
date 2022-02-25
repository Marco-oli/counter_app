import React from 'react';

import {Container, HeaderText} from './styles';

export const Header = ({title}) => {
  return (
    <Container>
      <HeaderText>{title}</HeaderText>
    </Container>
  );
};
