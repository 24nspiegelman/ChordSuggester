import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
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
  }
return (
  <SafeAreaView style={styles.safeArea}>
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
    <View style={styles.container}>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>I</Text>
      </Pressable>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>II</Text>
      </Pressable>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>III</Text>
      </Pressable>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>IV</Text>
      </Pressable>
    </View>
    <View style={styles.container}>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>V</Text>
      </Pressable>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>VI</Text>
      </Pressable>
      <Pressable style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>VII</Text>
      </Pressable>
    </View>
  </SafeAreaView>
    




)}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
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
    marginHorizontal:20,
    marginVertical:70, 
    flex: 1,
  },
  buttonStyles:{
    height: 50,
    width: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 40,
    fontWeight: 'bold',
  }
});