import { Text, StyleSheet, ScrollView, View } from 'react-native';

export const CustomScroll = (props) => {
  let scrollItems = props.data;
  let scrollItemList = [];
  for (let i = 0; i < scrollItems.length; i++) {
    scrollItemList.push(<Text style={styles.logItem}>Logged in at: {scrollItems[i]}</Text>);
  }
  return (
    <View style={styles.logContainer}>
      <ScrollView>
        {scrollItemList}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logItem: {
    width: '80%',
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
