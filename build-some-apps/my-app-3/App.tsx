import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.topBar}></View>
        <View style={styles.contentContainer}>
          <Text style={styles.inputText}>Thing:</Text>
          <TextInput style={styles.input} />
          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Thing</Text>
          </Pressable>
          <View style={styles.thingContainer}></View>
        </View>
        <View style={styles.bottomBar}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  thingContainer: {
    padding: 10,
    margin: 10,
    width: '90%',
    height: '60%',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  addButton: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 110,
    backgroundColor: 'gray',
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
  topBar: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  contentContainer: {
    flex: 8,
    padding: 5,
    justifyContent: 'center', 
    alignItems: 'center',
    gap: 10,
  },
  bottomBar: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
});