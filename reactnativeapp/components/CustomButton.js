import { Text, Pressable, StyleSheet } from 'react-native';

export const CustomButton = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#3B71F3',

    width: '50%',

    alignSelf: 'center',
    padding: 16,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});