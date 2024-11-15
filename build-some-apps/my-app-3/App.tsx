import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';

export default function App() {
  const [things, setThings] = useState<string[]>([]);
  const [inputText, setInputText] = useState('');
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const addThing = () => {
    if (inputText.trim()) {
      setThings([...things, inputText]);
      setCheckedItems([...checkedItems, false]);
      setInputText('');
    }
  };

  const deleteThing = (index: number) => {
    setThings(things.filter((_, i) => i !== index));
    setCheckedItems(checkedItems.filter((_, i) => i !== index));
  };

  const toggleChecked = (index: number) => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedItems(updatedCheckedItems);
  };

  const renderRightActions = (index: number) => (
    <Pressable
      style={styles.deleteButton}
      onPress={() => deleteThing(index)}
    >
      <Text style={styles.deleteText}>Delete</Text>
    </Pressable>
  );

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.bar}></View>
        <View style={styles.contentContainer}>
          <Text style={styles.inputText}>Thing:</Text>
          <TextInput
            style={styles.input}
            value={inputText}
            onChangeText={setInputText}
          />
          <Pressable style={styles.addButton} onPress={addThing}>
            <Text style={styles.addButtonText}>Add Thing</Text>
          </Pressable>
          <View style={styles.thingContainer}>
            {things.map((thing, index) => (
              <Swipeable
                key={index}
                renderRightActions={() => renderRightActions(index)}
                containerStyle={styles.swipeableContainer}
              >
                <View style={styles.thing}>
                  <Text style={styles.thingText}>{thing}</Text>
        
                  <Pressable
                      style={[styles.checkbox, checkedItems[index] && styles.checked]}
                      onPress={() => toggleChecked(index)}
                    >
                      {checkedItems[index] && <Text style={styles.checkmark}>✔</Text>}
                    </Pressable>
                </View>
              </Swipeable>
            ))}
          </View>
        </View>
        <View style={styles.bar}></View>
      </View>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    position: 'absolute',
    left: 10,
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: 'green',
    borderColor: 'green',
  },
  checkmark: {
    color: 'white',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flex: 1,
    padding: 10,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
  },
  thing: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#e4cbff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thingText: {
    fontSize: 16,
  },
  inputText: {
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  thingContainer: {
    padding: 10,
    margin: 10,
    width: '93%',
    height: '60%',
    borderRadius: 5,
    alignItems: 'center',
  },
  addButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 110,
    backgroundColor: '#b3b3b3',
    borderRadius: 2,
    marginRight: 25,
  },
  addButtonText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    width: '90%',
    margin: 12,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
  },
  container: {
    flex: 1,
  },
  flexContainer: {
    flex: 1,
  },
  bar: {
    flex: 1,
    backgroundColor: '#bfe2ff',
  },
  contentContainer: {
    flex: 8,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  swipeableContainer: {
    width: '100%',
  },
});
