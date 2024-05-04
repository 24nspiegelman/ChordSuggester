import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Modal} from 'react-native';
import React,{useState} from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import keyBuilder from './KeyBuilder';
import Sheet from 'react-modal-sheet';


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
  const [sheetOpen, setSheetOpen] = useState(false);
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
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>I</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>II</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>III</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>IV</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>V</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>VI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyles} onPress={() => alert('Pushed')}>
        <Text style={styles.buttonText}>VII</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.typeButton} onPress={() => setSheetOpen(true)}>
        <Text style={styles.typeButtonText}> Pick Chord</Text>
      </TouchableOpacity>
    </View>
    <View>
      <Sheet isOpen={sheetOpen} onClose={(setSheetOpen(false))}>

      </Sheet>
      
      {/* <Modal visible={modalOpen}>
        <SafeAreaView>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeModalButton} onPress={() => setModalOpen(false)}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
        </SafeAreaView>
      </Modal> */}
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
  typeButton:{
    marginTop: 20,
    width: '70%',
    height: 60,
    backgroundColor: '#a274fc',
    alignItems: 'center',
    borderRadius: 20,
  },
  typeButtonText:{
    fontSize: 40,
    fontWeight: 'bold',
  },
  modalContent:{
    flexDirection: 'row-reverse',
  },
  closeModalButton:{
    borderRadius: 20,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    marginRight: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  closeButtonText:{
    fontSize: 45,
    fontWeight: 'bold',
    marginLeft: 2,
  }
  }

);