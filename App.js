import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import uuid from 'uuid/v4';
import lista from './src/list';
import styled from 'styled-components/native';
import ListaItem from './src/components/ListaItem';
import AddItemArea from './src/components/AddItemArea';
import ListaItemSwipe from './src/components/ListaItemSwipe';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Scroll = styled.FlatList`
  flex: 1;
`;

export default () => {
  const [items, setItems] = useState(lista);
  const addNewItem = txt => {
    let newItems = [...items];
    newItems.push({
      id: uuid(),
      task: txt,
      done: false,
    });
    setItems(newItems);
  };
  const toggleDone = index => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
  };
  const deleteItem = index => {
    let newItems = [...items];
    newItems = newItems.filter((it, i) => i != index);
    setItems(newItems);
  };
  return (
    <Page>
      <AddItemArea onAdd={addNewItem} />
      <SwipeListView
        data={items}
        renderItem={({item, index}) => (
          <ListaItem onPress={() => toggleDone(index)} data={item} />
        )}
        renderHiddenItem={({item, index}) => (
          <ListaItemSwipe onDelete={() => deleteItem(index)} />
        )}
        leftOpenValue={50}
        disableLeftSwipe={true}
        keyExtractor={item => item.id}
      />
    </Page>
  );
};
