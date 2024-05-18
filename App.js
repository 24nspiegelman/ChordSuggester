import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Modal, Button, Pressable} from 'react-native';
import React,{useState, useCallback, useMemo, useRef} from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import keyBuilder from './KeyBuilder';
import Sheet from 'react-modal-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetSectionList, BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import chordBuilder from './ChordBuilder.js';


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

  if(!(key === '') && !(scale === '')){
    let keyArray = keyBuilder(key, scale);
  }

  const sheetRef = useRef(null);


  const sections = 
    [
    {title: "Diatonic", data:["1", "2", "3", "4", "5", "6", "7"]

    },
    {title: "Major", data:["1", "2", "3", "4", "5", "6", "7"]
    },
    {title: "Minor", data: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {title: "Dominant Seventh", data: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {title: "Major Seventh", data: ["1", "2", "3", "4", "5", "6", "7"]
    },
    {title: "Minor Seventh", data: ["1", "2", "3", "4", "5", "6", "7"]
    },

  ]

  const snapPoints = useMemo(() => ["25%", "50%", "80%", "85%"], []);

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
    
    <View style={styles.typeButtonView}>
    <Pressable style={styles.typeButton} onPress={() => handleSnapPress(2)}>
      <Text style={styles.typeButtonText}>Pick Chord</Text>
        </Pressable>
      </View>

  <GestureHandlerRootView>
  <BottomSheet
  ref={sheetRef}
  index={-1}
  snapPoints={snapPoints}
  onChange={handleSheetChange}
>
  <View style={styles.closeModalButtonView}>
  <Pressable style={styles.closeModalButton} onPress={() => handleClosePress()} >
    <Text style={styles.closeButtonText}> Close Window</Text>
    </Pressable>
    </View>
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
  typeButtonView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeButton:{
    width: 130,
    height: 30,
    backgroundColor: '#a274fc',
    alignItems: 'center',
    borderRadius: 10,
  },
  typeButtonText:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContent:{
    flexDirection: 'row-reverse',
  },
  closeModalButtonView:{
    flexDirection: 'row-reverse',
  },
  closeModalButton:{
    borderRadius: 5,
    width: 110,
    height: 20,
    marginTop: 20,
    backgroundColor: '#Ff1f20',
    alignItems: 'center',
  },
  closeButtonText:{
    color: 'white',
    fontSize: 15,
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