import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CustomButton } from '../components/CustomButton';
import { CustomText } from '../components/CustomText';
import { useRoute } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
  const route = useRoute();
  const numLogins = route.params.data[1].length;

  const onLogOutPress = () => {
    navigation.navigate('LoginScreen');
  }
  function addLogonInfo() {
    let logonInfo = route.params.data[1];
    let logonInfoList = [];
    for (let i = 0; i < logonInfo.length; i++) {
      logonInfoList.push(<Text style={styles.logItem}>Logged in at: {logonInfo[i]}</Text>);
    }
    return logonInfoList;
  }

  return (
    <View style={styles.appContainer}>
      <View>
        <CustomText type='header' text="Home" />
        <CustomText type='body' text={"Hello " + route.params.data[0] + ", You have logged in " + numLogins + " times."} />
        <View style={styles.logContainer}>
          <ScrollView>
            {addLogonInfo()}
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
  logContainer: {
    borderWidth: 1,
    height: '50%',
    borderRadius: 10,
  },
  logItem: {
    width: '80%',
    // center
    alignSelf: 'center',
    margin: 8,
    borderRadius: 90,
    backgroundColor: 'lightblue',
    padding: 8,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
  },
});
