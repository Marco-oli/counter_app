import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';

const counterContext = createContext();

export const CounterContext = ({children}) => {
  const [list, setList] = useState([]);
  const [cardSelected, setCardSelected] = useState(null);

  const addCard = useCallback(() => {
    setList(prevList => {
      const lastId = prevList[prevList.length - 1]?.id || 0;
      return [...prevList, {id: lastId + 1, counter: 0}];
    });
  }, []);

  useEffect(() => {
    addCard();
  }, [addCard]);

  useEffect(() => {
    if (list.length === 1) {
      setCardSelected(list[0]);
    }
  }, [list]);

  const removeCard = useCallback(
    () =>
      setList(prevList =>
        prevList.filter(item => item.id !== cardSelected?.id),
      ),
    [cardSelected?.id],
  );

  const resetCounter = useCallback(() => {
    setList(prevList => {
      const itemIndex = prevList.findIndex(i => i.id === cardSelected?.id);
      prevList.splice(itemIndex, 1, {
        id: cardSelected?.id,
        counter: 0,
      });
      return [...prevList];
    });
  }, [cardSelected?.id]);

  const incrementCounter = useCallback(() => {
    setList(prevList => {
      const itemIndex = prevList.findIndex(i => i.id === cardSelected?.id);
      prevList.splice(itemIndex, 1, {
        ...cardSelected,
        counter: (prevList[itemIndex]?.counter || 0) + 1,
      });
      return [...prevList];
    });
  }, [cardSelected]);

  const decrementCounter = useCallback(() => {
    setList(prevList => {
      const itemIndex = prevList.findIndex(i => i.id === cardSelected?.id);
      const counter = prevList[itemIndex].counter;
      prevList.splice(itemIndex, 1, {
        id: cardSelected?.id,
        counter: counter === 0 ? 0 : counter - 1,
      });
      return [...prevList];
    });
  }, [cardSelected?.id]);

  return (
    <counterContext.Provider
      value={{
        addCard,
        removeCard,
        cardSelected,
        setCardSelected,
        list,
        setList,
        resetCounter,
        incrementCounter,
        decrementCounter,
      }}>
      {children}
    </counterContext.Provider>
  );
};

export const useCounter = () => {
  const {
    cardSelected,
    setCardSelected,
    list,
    setList,
    addCard,
    removeCard,
    removeCardCounter,
    resetCounter,
    incrementCounter,
    decrementCounter,
  } = useContext(counterContext);

  return {
    cardSelected,
    setCardSelected,
    list,
    setList,
    addCard,
    removeCard,
    removeCardCounter,
    resetCounter,
    incrementCounter,
    decrementCounter,
  };
};
