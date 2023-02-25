import { StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { CustomButton } from '../components/CustomButton';
import { CustomText } from '../components/CustomText';
import { CustomScroll } from '../components/CustomScroll';

export default function HomeScreen({ navigation }) {
  const route = useRoute();
  const numLogins = route.params.data[1].length; // length of user timestamps list

  const onLogOutPress = () => {
    navigation.navigate('LoginScreen');
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <CustomText 
          type='header' 
          text="Home" 
        />
        <CustomText 
          type='body' 
          text={"Hello " + route.params.data[0] + ", You have logged in " + numLogins + " times."} 
        />
        <CustomScroll data={route.params.data[1]} />
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
});