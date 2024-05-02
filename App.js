import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, SafeAreaView, Alert, Modal} from 'react-native';
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
  const [modalOpen, setModalOpen] = useState(false);
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
    <View style={styles.buttonContainer}>
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
    <View style={styles.buttonContainer}>
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
    <View style={styles.buttonContainer}>
      <Pressable style={styles.typeButton} >

      </Pressable>
    </View>
    <View>
      <Modal visible={modalOpen}>
        <SafeAreaView>
        <View style={styles.modalContent}>
          <Text>Hello from the Modal :)</Text>
        </View>
        </SafeAreaView>
      </Modal>
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
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    height: 60,
    width: 60,
    marginHorizontal: 10,
    marginVertical: 0,
    borderRadius: 30,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonTwo:{
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 120,
  },
  buttonThree:{
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 200,
    marginTop: 35,
  },
  buttonFour:{
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
  },
  buttonFive:{
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
  },
  buttonSix:{
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
  },
  buttonSeven:{
    height: 50,
    width: 50,
    marginVertical: 0,
    borderRadius: 25,
    backgroundColor: '#50befa',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 90,
  },
  typeButton:{
    marginTop: 20,
    width: '70%',
    height: 60,
    backgroundColor: '#a274fc',
  }
  }

);