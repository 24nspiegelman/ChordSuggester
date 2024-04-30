import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import keyBuilder from './KeyBuilder';
import Key from './KeyClass';
export default function App() {
  const [key, setKey] = React.useState("");
  const [scale, setScale] = React.useState("")
  const keys = [
    {key: 'A♭', value:'A♭'},
    {key: 'A', value:'A'},
    {key: 'A#', value:'A#'},
    {key: 'B♭', value:'B♭'},
    {key: 'B', value:'B'},
    {key: 'C', value:'C'},
    {key: 'C#', value:'C#'},
    {key: 'D♭', value:'D♭'},
    {key: 'D', value:'D'},
    {key: 'D#', value:'D#'},
    {key: 'E♭', value:'E♭'},
    {key: 'E', value:'E'},
    {key: 'F', value:'F'},
    {key: 'F#', value:'F#'},
    {key: 'G♭', value:'G♭'},
    {key: 'G', value:'G'},
    {key: 'G#', value:'G#'},
    
  ];
    const scales = [
      {key: 'Major' ,value: 'Major'},
      {key: 'Minor', value: 'Minor'}
  
  ];
  if(!(key === '') && !(scale === '')){
    let keyArray = keyBuilder(key, scale);
    console.log(keyArray[1]);
  }
return (
  <View style={styles.container}>
  <View style={styles.dropdownStyles}>
    <SelectList data={keys} setSelected={setKey} placeholder='Select Key' search={false} >

    </SelectList>
  </View>
  <View style={styles.dropdownStyles}>
    <SelectList data={scales} setSelected={setScale} placeholder='Select Scale' search={false}>

    </SelectList>
  </View>
  </View>




)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  pickerStyles:{
    width:'50%',
    height: '30%',
    backgroundColor:'green',
    color:'white',
    justifyContent: 'center',
    marginTop: '15%',
    marginLeft: '21%',
  },
  dropdownStyles:{
    paddingHorizontal:20,
    paddingVertical:70, 
    flex: 1,
    color: 'Red'
  },
  buttonStyles:{
    paddingHorizontal:20,
    paddingVertical:70, 
    flex: 1,
    color: 'Red',
  }
});