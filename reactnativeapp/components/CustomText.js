import { Text, StyleSheet } from 'react-native';

export const CustomText = (props) => {
  if (props.type === 'header') {
    return (
      <Text style={styles.header}>{props.text}</Text>
    );
  } else if (props.type === 'body') {
    return (
      <Text style={styles.body}>{props.text}</Text>
    );
  } else {
    return (
      <Text>{props.text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: '20%',
    padding: 16,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  body: {
    paddingTop: '20%',
    padding: 16,
    fontSize: 16,
    textAlign: 'left',
  }
});
