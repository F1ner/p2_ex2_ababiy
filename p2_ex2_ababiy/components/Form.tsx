import React, { useState } from 'react';
import { StyleSheet,TextInput,Text, Button, View } from 'react-native';

type FormProps={
 addHandler:Function
}

export default function Form(props:FormProps) {
    const [text, setValue]=useState('');
    
    const onChange=(text: string)=> {
        setValue(text);
    }
    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишите задачу...'clearTextOnFocus/>
            <Button color='green' onPress={(onChangeText)=>props.addHandler(text)} title= 'Добавить задачу' />
        </View>
  );
}
const styles = StyleSheet.create({
  input:{
   borderBottomWidth: 1,
   borderColor: '#000',
   padding: 10,
   marginVertical: 30,
   marginHorizontal: '20%',
   width: '80%'
  }
});