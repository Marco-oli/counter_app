import React from 'react';

// Components
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';

// Styles
import {
  Content,
  ContentTitle,
  ContainerButtons,
  ContainerControls,
} from './styles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

// Contexts
import {useCounter} from '../../contexts/CounterContext';
import {colors} from '../../assets/colors';

export const ConfigScreen = () => {
  const {
    list,
    addCard,
    removeCard,
    resetCounter,
    incrementCounter,
    decrementCounter,
  } = useCounter();

  return (
    <>
      <Header title="Config" />
      <Content>
        <ContentTitle>Counters</ContentTitle>

        <ContainerButtons>
          <Button
            title="Add Counter"
            width="46%"
            onPress={addCard}
            icon={
              <IoniconsIcon name="add" size={25} color={colors.light_blue_2} />
            }
          />
          <Button
            disabled={list.length === 0}
            title="Remove Counter"
            width="46%"
            onPress={removeCard}
            icon={
              <IoniconsIcon
                name="remove"
                size={25}
                color={colors.light_blue_2}
              />
            }
          />
        </ContainerButtons>

        <ContainerControls>
          <ContentTitle>Selected Counter</ContentTitle>

          <ContainerButtons>
            <Button
              title="Increment"
              width="46%"
              onPress={incrementCounter}
              icon={
                <IoniconsIcon
                  name="add"
                  size={25}
                  color={colors.light_blue_2}
                />
              }
            />
            <Button
              title="Decrement"
              width="46%"
              onPress={decrementCounter}
              icon={
                <IoniconsIcon
                  name="remove"
                  size={25}
                  color={colors.light_blue_2}
                />
              }
            />
          </ContainerButtons>

          <Button
            title="Reset Counter"
            onPress={resetCounter}
            icon={
              <IoniconsIcon
                name="reload"
                size={25}
                color={colors.light_blue_2}
              />
            }
          />
        </ContainerControls>
      </Content>
    </>
  );
};
