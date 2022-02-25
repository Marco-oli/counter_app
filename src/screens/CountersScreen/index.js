import {FlatList} from 'react-native';
import React from 'react';

// Components
import {Header} from '../../components/Header';
import {CardCounter} from '../../components/CardCounter';

// Styles
import {Container, ContainerEmptyText, EmptyText} from './styles';

//Contexts
import {useCounter} from '../../contexts/CounterContext';

export const CountersScreen = () => {
  const {cardSelected, list} = useCounter();

  return (
    <>
      <Header title="Counters" />
      <Container>
        {!list.length ? (
          <ContainerEmptyText>
            <EmptyText>Você não possui contador no momento!</EmptyText>
          </ContainerEmptyText>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <CardCounter
                item={item}
                selected={item.id === cardSelected?.id}
              />
            )}
          />
        )}
      </Container>
    </>
  );
};
