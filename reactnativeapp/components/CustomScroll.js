import { Text, StyleSheet, ScrollView, View } from 'react-native';

export const CustomScroll = (props) => {
  let scrollItems = props.data;
  let scrollItemList = [];
  for (let i = 0; i < scrollItems.length; i++) {
    scrollItemList.push(
      <View style={styles.scrollItem} key={i}>
        <Text>
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
    backgroundColor: 'lightblue',

    width: '85%',

    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,

    color: 'black',
    borderRadius: 90,
    borderColor: 'black',
    borderWidth: 1,
  },
  scrollContainer: {
    height: '50%',

    marginHorizontal: 12,

    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
});
