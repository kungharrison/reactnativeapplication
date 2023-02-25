import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoalText]);
  }
  return (
    <View style={styles.appContainer}>
      <View>
        <Text style={styles.header}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='your course goal'
          onChangeText={goalInputHandler} />
        <TextInput style={styles.textInput}
        placeholder='your course goal'
        onChangeText={goalInputHandler} />
      </View>
      <View>
        <Button title='Login' onPress={addGoalHandler} />
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
    flexDirection: 'column',
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
