import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [cat, setCat] = useState('');
  const [age, setAge] = useState('');
  const [things, setThings] = useState<string[]>([]);

  const handleAddCat = () => {
    if (cat && age) {
      setThings([...things, `Cat: ${cat}, Age: ${age}`]);
      setCat('');
      setAge('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.bar}></View>
        <View style={styles.contentContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.innerInputContainer}>
              <Text style={styles.inputText}>Cat:</Text>
              <TextInput
                style={styles.input}
                value={cat}
                onChangeText={setCat}
              />
            </View>
            <View style={styles.innerInputContainer}>
              <Text style={styles.inputText}>Age:</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
              />
            </View>
          </View>
          <Pressable style={styles.addButton} onPress={handleAddCat}>
            <Text style={styles.addButtonText}>Add Cat</Text>
          </Pressable>
          <View style={styles.thingContainer}>
            {things.map((thing, index) => (
              <View key={index} style={styles.thing}>
                <Text style={styles.thingText}>{thing}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.bar}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerInputContainer: {
    width: '50%',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  thing: {
    padding: 10,
    margin: 5,
    width: '100%',
    backgroundColor: '#fcd19d',
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
    width: '80%',
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

});