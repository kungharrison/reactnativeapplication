import { View, Text, TextInput, StyleSheet } from 'react-native';

export const CustomInput = (props) => {
  return (
    <View>
      <Text style={styles.label}>{props.text}</Text>
      <TextInput 
        value={props.value}
        onChangeText={props.setValue}
        placeholder={props.placeholder} 
        style={styles.input} 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: '3%',
  },
  input: {
    backgroundColor: 'white',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 6,

    paddingHorizontal: 16,
    marginVertical: 8,
    
  },
});