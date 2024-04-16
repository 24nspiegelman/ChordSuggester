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
  <Picker.Item label="A" value="java" />
  <Picker.Item label="A#" value="js" />
  <Picker.Item label="B♭" value="java" />
  <Picker.Item label="B" value="java" />
  <Picker.Item label="C" value="java" />
  <Picker.Item label="C#" value="java" />
  <Picker.Item label="D♭" value="java" />
  <Picker.Item label="D" value="java" />
  <Picker.Item label="D#" value="java" />
  <Picker.Item label="E♭" value="java" />
  <Picker.Item label="E" value="java" />
  <Picker.Item label="F" value="java" />
  <Picker.Item label="F#" value="java" />
  <Picker.Item label="G♭" value="java" />
  <Picker.Item label="G" value="java" />
  <Picker.Item label="G#" value="java" />
  <Picker.Item label="A♭" value="java" />

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
