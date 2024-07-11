import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Prefer not to say', value: '3' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.topic2}>Create account</Text>
      <Text style={styles.topic}>What's your gender?</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'grey' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Gender"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <TouchableOpacity style={styles.nextBtn1}>
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
    backgroundColor: 'black',
  },
  dropdown: {
    height: 40,
    width: '90%',
    borderColor: '#848884',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#848884',
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white',  
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white', 
  },
  iconStyle: {
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  topic2: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    top: 5,
    left: 140,
  },
  topic: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: 25,
    left: 15,
    top: 30,
  },
  nextBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 75,
    alignItems: 'center',
    marginTop: 85,
    backgroundColor: 'white',
    fontWeight: 'bold',
    left: 140,
  },
  nextBtnText: {
    fontWeight: 'bold',
    color: 'black',
  },
});