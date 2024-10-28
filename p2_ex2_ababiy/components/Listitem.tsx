import React from 'react';
import { StyleSheet,Text, View,FlatList,TouchableHighlight } from 'react-native';

type ListitemProps={
  el:{
    text: string,
    key: string,
  },
  deleteHandler:(key: string)=>void,
}

export default function Listitem(props: ListitemProps) {
  return (
        <TouchableHighlight onPress={()=>props.deleteHandler(props.el.key)}>
        <Text style={styles.text}>{props.el.text}</Text>
      </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  text:{
    padding:20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop: 20,
    width: '60%',
    marginLeft: '20%'
  }
});
