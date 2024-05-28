import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, Modal, Button, Pressable} from 'react-native';
import React,{useState, useCallback, useMemo, useRef} from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import keyBuilder from './KeyBuilder';
import Sheet from 'react-modal-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BottomSheet, { BottomSheetSectionList, BottomSheetModal, BottomSheetView, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import chordBuilder from './ChordBuilder.js';
import { Chord, Interval, Note, Scale, Key, ScaleType } from "tonal";


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
      {key: 'Minor', value: 'Minor'},
      {key: 'Dorian', value: 'Dorian'},
      {key: 'Phrygian', value: 'Phrygian'},
      {key: 'Lydian', value: 'Lydian'},
      {key: 'Mixolydian', value: 'Mixolydian'},
      {key: 'Locrian', value: 'Locrian'},
      {key: 'Harmonic Major', value: 'Harmonic Major'},
      {key: 'Harmonic Minor', value: 'Harmonic Minor'},
      {key: 'Hungarian Minor', value: 'Hungarian Minor'},
      {key: 'Jazz Minor', value: 'Jazz Minor'},
      {key: 'Major Blues', value: 'Major Blues'},
      {key: 'Minor Blues', value: 'Minor Blues'},
      {key: 'Prometheus', value: 'Prometheus'},
      {key: 'Augmented', value: 'Augmented'},
      {key: 'Diminished', value: 'Diminished'},
      {key: 'Aeolian Dominant', value: 'Aeolian Dominant'},
      {key: 'Phrygian Dominant', value: 'Phrygian Dominant'},
      {key: 'Whole Tone', value: 'Whole Tone'},
      {key: 'Neapolitan Major', value: 'Neapolitan Major'},
      {key: 'Neapolitan Minor', value: 'Neapolitan Minor'},
      {key: 'Persian', value: 'Persian'},
      {key: 'Double Harmonic Major', value: 'Double Harmonic Major'},
      {key: 'Altered Dominant', value: 'Altered Dominant'},
      {key: 'Major Pentatonic', value: 'Major Pentatonic'},
      {key: 'Minor Pentatonic', value: 'Minor Pentatonic'},
      {key: 'Neutral Pentatonic', value: 'Neutral Pentatonic'},
 
  ];

  let chosenScale = Scale.get("C Major");
  if(!(key === '') && !(scale === '')){
    if(scale.contains("Major")){
      chosenScale = Scale.get(key + " " + scale);
    }
  }

 
  const sheetRef = useRef(null);


  const sections = 
    [
    // {title: "Triad", data:[getChord(0), getChord(1), getChord(2), getChord(3), getChord(4), getChord(5), getChord(6)]
    // },
    {title: "Triad", data:[chosenScale.notes[0], chosenScale.notes[1], chosenScale.notes[2], chosenScale.notes[3], chosenScale.notes[4], chosenScale.notes[5], chosenScale.notes[0]]
    },

  ]

  const snapPoints = useMemo(() => [ "55%", "85%", "90%"], []);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  let chordViewerPosition = 0;
  let chordViewerArray = [];
  // function chordPress(chord){

  // }

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
        <TouchableOpacity style={styles.itemStyle}>
        <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
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
        <SelectList data={scales} setSelected={setScale} placeholder='Select Scale' >
        </SelectList>
      </View>
    </View>
    <View style={styles.chordViewerView}>
    <View style={styles.chordViewer}>

      <View style={styles.chordBox}>
        </View>

      <View style={styles.chordBox}>
          </View>

      <View style={styles.chordBox}>
        </View>
      
      <View style={styles.chordBox}>
        </View>

      </View>
      </View>
    
    <View style={styles.typeButtonView}>
    <Pressable style={styles.typeButton} onPress={() => handleSnapPress(1)}>
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
    marginVertical:50, 
    marginTop: 20,
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
  // flexDirection: 'row',
},
sectionHeaderContainer: {
  backgroundColor: "white",
  padding: 6,
  alignItems: 'center',
},
itemContainer: {
  padding: 6,
  margin: 6,
  width: 60,
  height: 60,
  borderRadius: 10,
  backgroundColor: "#eee",
  alignItems: 'center',
  justifyContent: 'center',
},
headerText: {
  color: "#5E06FF",
  fontWeight: '900',
  fontSize: '20',
},
itemStyle: {
  alignItems: 'center',
},
itemText:{
  fontSize: 30,
  fontWeight:'bold',
},
chordViewerView: {
  alignItems: 'center',
  marginBottom: 20,
},
chordViewer:{
  height: 60,
  width: '80%',
  backgroundColor: '#E5C3FF',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
},
chordBox:{
  height: 55,
  width: 55,
  borderRadius: 10,
  backgroundColor: 'black',
  marginHorizontal: 10
}
});