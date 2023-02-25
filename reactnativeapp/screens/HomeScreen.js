import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomText } from '../components/CustomText';

export default function HomeScreen({ navigation }) {
  const onLogOutPress = () => {
    navigation.navigate('LoginScreen');
  }
  return (
    <View style={styles.appContainer}>
      <View>
        <CustomText type='header' text="Home" />
        <CustomText type='body' text="Hello NAME, You have logged in CNT times." />
        <View style={styles.goalsContainer}>
          <ScrollView>
            <View style={styles.goalsContainer}>
              <Text style={styles.goalItem}>Goal 1</Text>
              <Text style={styles.goalItem}>Goal 2</Text>
              <Text style={styles.goalItem}>Goal 3</Text>
              <Text style={styles.goalItem}>Goal 3</Text>
              <Text style={styles.goalItem}>Goal 3</Text>
              <Text style={styles.goalItem}>Goal 3</Text>
            </View>
          </ScrollView>
        </View>
        <CustomButton 
          text="Logout"
          onPress={onLogOutPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    borderWidth:1,
  },
  goalItem: {
    margin: 8,
    borderRadius: 90,
    backgroundColor: 'lightblue',
    padding: 8,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
  },
});
