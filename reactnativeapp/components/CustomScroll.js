import { Text, StyleSheet, ScrollView, View } from 'react-native';

export const CustomScroll = (props) => {
  let scrollItems = props.data;
  let scrollItemList = [];
  for (let i = 0; i < scrollItems.length; i++) {
    scrollItemList.push(
      <View style={styles.scrollItem}>
        <Text key={i}>
          Logged in at: {scrollItems[i]}
        </Text>
      </View>
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
    width: '85%',
    alignSelf: 'center',
    marginVertical: 8,
    borderRadius: 90,
    backgroundColor: 'lightblue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
  },
  scrollContainer: {
    borderWidth: 1,
    borderColor: 'black',
    height: '50%',
    borderRadius: 10,
    marginHorizontal: 12,
  },
});
