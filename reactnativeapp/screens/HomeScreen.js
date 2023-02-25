import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.header}>Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: '20%',
    padding: 16,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
});
