import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.topBar}></View>
        <View style={styles.gridContainer}>
        <View style={styles.rowOne}>
          <View style={styles.gridItem}></View>
          <View style={styles.gridItem}></View>
        </View>
        <View style={styles.rowTwo}>
          <View style={styles.gridItem}></View>
          <View style={styles.gridItem}></View>
        </View>
        </View>
        <View style={styles.bottomBar}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  gridContainer: {
    flex: 8,
    backgroundColor: 'white',
    marginVertical: 60,
    marginHorizontal: 20,
    gap: 30,
    justifyContent: 'center',
  },
  bottomBar: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  gridItem: {
    flex: 1,
    backgroundColor: 'blue',
    borderRadius: 10,
    aspectRatio: 1,
  },
  rowOne: {

    flexDirection: 'row',
    gap: 15,
  },
  rowTwo: {

    flexDirection: 'row',
    gap: 15,
  },
});
