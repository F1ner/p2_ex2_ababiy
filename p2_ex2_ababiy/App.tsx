import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import Listitem from './components/Listitem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState<{ text: string; key: string }[]>([
    { text: 'Купить молоко', key: '1' },
    { text: 'Убраться в комнате', key: '2' },
    { text: 'Помыть машину', key: '3' },
  ]);

  const addHandler = (text: string) => {
    setListOfItems((list) => [
      { text: text, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
  };

  const deleteHandler = (key: string) => {
    setListOfItems((list) => list.filter(item => item.key !== key));
  };

  return (
    <View>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <Listitem el={item} deleteHandler={deleteHandler} />
          )}
          keyExtractor={(item) => item.key} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { 
    flex: 1,
  },
});
