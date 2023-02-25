import { Text, StyleSheet, ScrollView, View } from 'react-native';

export const CustomScroll = (props) => {
  let logonInfo = props.data;
  let logonInfoList = [];
  for (let i = 0; i < logonInfo.length; i++) {
    logonInfoList.push(<Text style={styles.logItem}>Logged in at: {logonInfo[i]}</Text>);
  }
  return (
    <View style={styles.logContainer}>
      <ScrollView>
        {logonInfoList}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
  logContainer: {
    borderWidth: 1,
    height: '50%',
    borderRadius: 10,
  },
});
