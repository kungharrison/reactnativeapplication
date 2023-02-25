import { Text, StyleSheet, ScrollView, View } from 'react-native';

export const CustomScroll = (props) => {
  let scrollItems = props.data;
  let scrollItemList = [];
  for (let i = 0; i < scrollItems.length; i++) {
    scrollItemList.push(
      <Text style={styles.scrollItem} key={i}>
        Logged in at: {scrollItems[i]}
      </Text>
    );
  }
  return (
    <View style={styles.scrollContainer}>
      <ScrollView>
        {scrollItemList}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollItem: {
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
  scrollContainer: {
    borderWidth: 1,
    height: '50%',
    borderRadius: 10,
  },
});
