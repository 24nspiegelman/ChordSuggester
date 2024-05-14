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

  const sheetRef = useRef(null);


  const sections = 
    [
    {title: "Major", data:["1", "2"]
    },
    {title: "Minor", data: ["3", "4"]
    },
    {title: "Dominant Seventh", data: ["3", "4"]
    },
    {title: "Minor Seventh", data: ["3", "4"]
    },
    {title: "Major Seventh", data: ["3", "4"]
    },

  ]

  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={styles.sectionHeaderContainer}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    ),
    []
  );
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );


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
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
  <BottomSheet
  ref={sheetRef}
  index={1}
  snapPoints={snapPoints}
  onChange={handleSheetChange}
>
  <BottomSheetSectionList
    sections={sections}
    keyExtractor={(i) => i}
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
  alignItems: 'center',
},
itemContainer: {
  padding: 6,
  margin: 6,
  backgroundColor: "#eee",
},
headerText: {
  color: "#5E06FF",
  fontWeight: '900',
  fontSize: '20',
}
});