import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { CustomText } from '../components/CustomText';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const onSignInPress = () => {
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={styles.appContainer}>
      <CustomText type='header' text="Login" />
      <CustomInput
        text="Name"
        placeholder="Name"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        text="Email"
        placeholder="Email"
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
