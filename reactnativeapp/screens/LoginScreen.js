import { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { CustomText } from '../components/CustomText';

const loginMap = new Map();

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const onSignInPress = () => {
    // make an array with the date and time of every login
    let userData = loginMap.get(email)
    // check if the email is in the map
    if (userData == undefined) {
      // if it is, add the new date and time to the array
      loginMap.set(email, [username, [Date().toLocaleString()]]);
    }
    else if (userData[0] == username) {
      // if it is, add the new date and time to the array
      userData[1].push(Date().toLocaleString());
    }
    else {
      alert("Email already exists with a different username!");
      return;
    }
    navigation.navigate('HomeScreen', { data: loginMap.get(email) });
  }

  return (
    <View style={styles.appContainer}>
      <CustomText type='header' text="Login" />
      <CustomInput
        text="Name"
        placeholder="Enter Name Here"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        text="Email"
        placeholder="Enter Email Here"
        value={email}
        setValue={setEmail}
      />
      <CustomButton
        text="Login"
        onPress={onSignInPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  header: {
    paddingTop: '20%',
    padding: 16,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
