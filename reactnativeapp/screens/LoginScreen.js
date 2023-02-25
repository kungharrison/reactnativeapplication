import { useState } from 'react'
import { StyleSheet, View } from 'react-native';

import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { CustomText } from '../components/CustomText';

// TODO: userDatabase acts as user database, replace with a database in production (i.e. API calls to Firebase)
// stores email as key and array of username and array of timestamps as value
const userDatabase = new Map();

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const onSignInPress = () => {
    // check to ensure that the username and email are not empty
    if (username == '' || email == '') {
      alert("Please enter a valid username and email!");
      return;
    }

    let userData = userDatabase.get(email);
    if (userData == undefined) {
      // email is not in database, associate name and add timestamp
      userDatabase.set(email, [username, [Date().toLocaleString()]]);
    }
    else if (userData[0] == username) {
      // email is in database and username matches, add timestamp
      userData[1].push(Date().toLocaleString());
    }
    else {
      // email is in database but username does not match
      alert("Email already exists with a different username!");
      return;
    }

    navigation.navigate('HomeScreen', { data: userDatabase.get(email) });
  }

  return (
    <View style={styles.appContainer}>
      <CustomText 
        type='header' 
        text="Login" 
      />
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
});
