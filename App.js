import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, View, SafeAreaView, ScrollView, Modal, Button, Pressable } from 'react-native';
import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import keyBuilder from './KeyBuilder';
import Sheet from 'react-modal-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetSectionList } from "@gorhom/bottom-sheet";
import chordBuilder from './ChordBuilder.js';
import { Chord, Interval, Note, Scale, Key, ScaleType } from "tonal";

export default function App() {
  const [key, setKey] = useState("");
  const [type, setType] = useState("");
  const [chosenScale, setChosenScale] = useState(Scale.get("C Major"));
  const [selectedChords, setSelectedChords] = useState([]);

  const keys = [
    { key: 'A♭', value: 'A♭' },
    { key: 'A', value: 'A' },
    { key: 'A#', value: 'A#' },
    { key: 'B♭', value: 'B♭' },
    { key: 'B', value: 'B' },
    { key: 'C', value: 'C' },
    { key: 'C#', value: 'C#' },
    { key: 'D♭', value: 'D♭' },
    { key: 'D', value: 'D' },
    { key: 'D#', value: 'D#' },
    { key: 'E♭', value: 'E♭' },
    { key: 'E', value: 'E' },
    { key: 'F', value: 'F' },
    { key: 'F#', value: 'F#' },
    { key: 'G♭', value: 'G♭' },
    { key: 'G', value: 'G' },
    { key: 'G#', value: 'G#' },
  ];

  const types = [
    { key: 'Major', value: 'Major' },
    { key: 'Minor', value: 'Minor' },
  ];

  useEffect(() => {
    if (key !== '' && type !== '') {
      setChosenScale(Scale.get(`${key} ${type}`));
    }
  }, [key, type]);

  const getChord = (i) => {
    let root = chosenScale.notes[i];
    i += 2;
    if (i > 6) {
      i = i % 7;
    }
    let third = chosenScale.notes[i];
    i += 2;
    if (i > 6) {
      i = i % 7;
    }
    let fifth = chosenScale.notes[i];

    const chord = Chord.detect([root, third, fifth]);
    if (chord.length > 0) {
      return chord[0];
    } else {
      return "Unknown";
    }
  };

  const getSeventhChord = (i) => {
    let root = chosenScale.notes[i];
    i += 2;
    if (i > 6) {
      i = i % 7;
    }
    let third = chosenScale.notes[i];
    i += 2;
    if (i > 6) {
      i = i % 7;
    }
    let fifth = chosenScale.notes[i];
    i += 2;
    if (i > 6) {
      i = i % 7;
    }
    let seventh = chosenScale.notes[i];

    const chord = Chord.detect([root, third, fifth, seventh]);
    if (chord.length > 0) {
      return chord[0];
    } else {
      return "Unknown";
    }
  };

  const getPentatonic = (i) => {
   pentatonicScale = Scale.get(chosenScale.name + " Pentatonic");

    let root = pentatonicScale.notes[i];
    i += 2;
    if (i > 4) {
      i = i % 5;
    }
    let third = pentatonicScale.notes[i];
    i += 2;
    if (i > 4) {
      i = i % 5;
    }
    let fifth = pentatonicScale.notes[i];

    const chord = Chord.detect([root, third, fifth]);
    if (chord.length > 0) {
      return chord[0];
    } else {
      return "Unknown";
    }
  }

  const getBlues = (i) => {
    bluesScale = Scale.get(chosenScale.name + " blues");
 
     let root = bluesScale.notes[i];
     console.log(root);
     i += 2;
     if (i > 5) {
       i = i % 6;
     }
     let third = bluesScale.notes[i];
     console.log(third);
     i += 2;
     if (i > 5) {
       i = i % 6;
     }
     let fifth = bluesScale.notes[i];
     console.log(fifth);
 
     const chord = Chord.detect([root, third, fifth]);
     if (chord.length > 0) {
       return chord[0];
     } else {
       return "Unknown";
     }
   }

  const sheetRef = useRef(null);

  const sections = [
    {
      title: "Triad",
      data: [getChord(0), getChord(1), getChord(2), getChord(3), getChord(4), getChord(5), getChord(6)]
    },
    {
      title: "Seventh",
      data: [getSeventhChord(0), getSeventhChord(1), getSeventhChord(2), getSeventhChord(3), getSeventhChord(4), getSeventhChord(5), getSeventhChord(6)]
    },
    {
      title: "Pentatonic",
      data: [getPentatonic(0), getPentatonic(1), getPentatonic(2), getPentatonic(3), getPentatonic(4)]
    },
    {
      title: "Blues",
      data: [getBlues(0), getBlues(1), getBlues(2), getBlues(3), getBlues(4), getBlues(5)]
    },

  ];


  const snapPoints = useMemo(() => ["55%", "85%", "90%"], []);

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

  const handleChordPress = (chord) => {
    setSelectedChords((prevSelectedChords) => {
      const newChords = [...prevSelectedChords];
      if (newChords.length >= 4) {
        newChords.shift();
      }
      newChords.push(chord);
      return newChords;
    });
  };

  const clearChords = () => {
    setSelectedChords([]);
  };

  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer} key={item}>
        <TouchableOpacity 
          style={styles.itemStyle} 
          onPress={() => handleChordPress(item)}
        >
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
          <SelectList data={keys} setSelected={setKey} placeholder='Select Key' search={false} />
        </View>
        <View style={styles.dropdownStyles}>
          <SelectList data={types} setSelected={setType} placeholder='Select Type' search={false} />
        </View>
      </View>
      <View style={styles.chordViewerView}>
        <View style={styles.chordViewer}>
          {selectedChords.map((chord, index) => (
            <View key={index} style={styles.chordBox}>
              <Text style={styles.chordBoxText}>{chord}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.typeButtonView}>
      <Pressable style={styles.clearButton}onPress={clearChords}>
        <Text style={styles.typeButtonText}>Clear</Text>
      </Pressable>
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
            <Pressable style={styles.closeModalButton} onPress={handleClosePress}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
          <BottomSheetSectionList
            sections={sections}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  dropdownStyles:{
    marginHorizontal:20,
    marginVertical:50, 
    marginTop: 20,
    backgroundColor: '#E9ECEF',
    flex: 1,
  },
  typeButtonView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeButton:{
    width: 130,
    height: 30,
    backgroundColor: '#28A745',
    alignItems: 'center',
    borderRadius: 10,
  },
  typeButtonText:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  clearButton:{
    width: 130,
    height: 30,
    backgroundColor: '#FD7E14',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  modalContent:{
    flexDirection: 'row-reverse',
  },
  closeModalButtonView:{
    flexDirection: 'row-reverse',
  },
  closeModalButton:{
    borderRadius: 5,
    width: 75,
    height: 20,
    marginTop: 20,
    marginHorizontal: 25,
    backgroundColor: '#DC3545',
    alignItems: 'center',
  },
  closeButtonText:{
    color: '#FFFFFF',
    fontSize: 15,
  },
contentContainer: {
  backgroundColor: '#F8F9FA',
  
},
sectionHeaderContainer: {
  backgroundColor: '#6F42C1',
  padding: 6,
  alignItems: 'center',
},
itemContainer: {
  padding: 6,
  margin: 6,
  width: "97%",
  height: 60,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomWidth: 1,
  borderBottomColor: '#E9ECEF',
  backgroundColor: "#E9ECEF"
},
headerText: {
  color: '#FFFFFF',
  fontWeight: '900',
  fontSize: '20',
},
itemStyle: {
  alignItems: 'center',
  backgroundColor: '#FFC107',
},
itemText:{
  fontSize: 30,
  fontWeight:'bold',
  color: '#343A40',
},
chordViewerView: {
  alignItems: 'center',
  marginBottom: 20,
},
chordViewer:{
  height: 60,
  width: '90%',
  backgroundColor: '#d9dbda',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 20
},
chordBox:{
  height: 55,
  width: 70,
  borderRadius: 15,
  backgroundColor: '#1E90FF',
  marginHorizontal: 10,
  alignItems: 'center',
  justifyContent: 'center'
},
chordBoxText:{
color: 'black',
fontWeight: 'bold',
fontSize: 15,
}
});