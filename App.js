import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Dropdown } from 'react-native-material-dropdown-v2-fixed';
import React,{useState} from 'react';

export default function App() {
const [key, setKey] = useState();
  return (
    <View style={styles.pickerStyles}>
      <Picker
      selectedValue={key}
      onValueChange={(itemValue, itemIndex) =>
      setKey(itemValue)
    }>
  <Picker.Item label="A" value="A" />
  <Picker.Item label="A#" value="A#" />
  <Picker.Item label="B♭" value="B♭" />
  <Picker.Item label="B" value="B" />
  <Picker.Item label="C" value="C" />
  <Picker.Item label="C#" value="C#" />
  <Picker.Item label="D♭" value="D♭" />
  <Picker.Item label="D" value="D" />
  <Picker.Item label="D#" value="D#" />
  <Picker.Item label="E♭" value="E♭" />
  <Picker.Item label="E" value="E" />
  <Picker.Item label="F" value="F" />
  <Picker.Item label="F#" value="F#" />
  <Picker.Item label="G♭" value="G♭" />
  <Picker.Item label="G" value="G" />
  <Picker.Item label="G#" value="G#" />
  <Picker.Item label="A♭" value="A♭" />

</Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
  }
});
