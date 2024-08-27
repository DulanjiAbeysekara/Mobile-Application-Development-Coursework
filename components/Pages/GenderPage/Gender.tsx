import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Prefer not to say', value: '3' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('CreateAccount-Page')}>
        <Image
          style={styles.spotifyLogo}
          source={require('../../../assets/images/left.png')}
        />
      </Pressable>

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
        placeholder={!isFocus ? 'Gender' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />

      <TouchableOpacity 
        style={styles.nextBtn1}
        onPress={() => navigation.navigate('Name-Page')}
        disabled={!value} 
      >
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
    paddingTop: 50, 
  },
  dropdown: {
    height: 40,
    width: '90%',
    borderColor: '#848884',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    marginTop: 20, 
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
    bottom: 40, 
    // marginTop: 20, 
  },
  topic: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    bottom: -2,
    right:70
  },
  nextBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 75,
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 100,
  
  },
  nextBtnText: {
    fontWeight: 'bold',
    color: 'black',
    
  },
  spotifyLogo: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: -47,
    left: -180, 
  },
});
