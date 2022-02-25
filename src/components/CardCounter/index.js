import React from 'react';

import {useCounter} from '../../contexts/CounterContext';

// Styles
import {
  CardTitle,
  Container,
  ContainerCount,
  Counter,
  Gradient,
} from './styles';

export const CardCounter = ({item, selected}) => {
  const {setCardSelected} = useCounter();

  return (
    <Container onPress={() => setCardSelected(item)}>
      {!selected && <Gradient />}
      <CardTitle>Counter {item.id}</CardTitle>

      <ContainerCount>
        <Counter>
          {item.counter < 10
            ? `000${item.counter}`
            : item.counter < 100
            ? `00${item.counter}`
            : item.counter < 1000
            ? `0${item.counter}`
            : null}
        </Counter>
      </ContainerCount>
    </Container>
  );
};
