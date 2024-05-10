import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Modal, Button} from 'react-native';
import React,{useState, useCallback, useMemo, useRef} from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import keyBuilder from './KeyBuilder';
import Sheet from 'react-modal-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetSectionList, BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";


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
    {key: 'D♭', value:'D♭' },
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

  const newTasks = [
    {id: 2, title: "Wax on"},
    {id: 3, title: "Wax off"},
    {id: 4, title: "Wax on"}
  ];

  const completedTasks = [
    {id: 2, title: "Watch Karate Kid"},
    {id: 3, title: "Watch Karate Kid"},
    {id: 4, title: "Watch Karate Kid"}
  ];
const sheetRef = useRef(null);

  const sections = {[
    { title: 'New Tasks', data: newTasks}, 
    { title: 'Completed Tasks', data: completedTasks},
  ]}
  const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  });
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  });
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderSectionHeader = {( {section }) => (
    <View style={styles.sectionHeader}>
    <Text>{section.title}</Text>
    </View>
  )}


  const renderItem = {( { item } ) => (
    <View style={styles.row}>
    <Text>{item.title}</Text>
    </View>
  )}


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
    
  <GestureHandlerRootView>
  <BottomSheet
  ref={sheetRef}
  index={1}
  snapPoints={snapPoints}
  onChange={handleSheetChange}
>
  <BottomSheetSectionList
    sections={sections}
    keyExtractor={(item) => item.id}
    renderSectionHeader={renderSectionHeader}
    renderItem={renderItem}
    contentContainerStyle={styles.contentContainer}
  />
</BottomSheet>
</GestureHandlerRootView>
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
  },
contentContainer: {
  backgroundColor: "white",
},
sectionHeaderContainer: {
  backgroundColor: "white",
  padding: 6,
},
itemContainer: {
  padding: 6,
  margin: 6,
  backgroundColor: "#eee",
},
});