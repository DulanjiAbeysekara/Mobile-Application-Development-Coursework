import React, { useState,useEffect  } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'; 

export default function Index() {
  return (
    <View style={styles.backgroundView2}>
      <Text style={styles.topic2}>Create account</Text>

      <Text style={styles.topic}>What's your date of birth?</Text>

      <TextInput style={styles.inputFeild} placeholder="MM/DD/YYYY" placeholderTextColor="white"/>


      <TouchableOpacity style={styles.nextBtn1}>
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
    
    </View>
  ); 
}

const styles = StyleSheet.create({
  backgroundView2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
    backgroundColor: 'black',
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
  inputFeild: {
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
  nextBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 75,
    alignItems: 'center',
    marginTop: 85,
    backgroundColor: 'white',
    fontWeight: 'bold',
    left: 155,
  },
  nextBtnText: {
    fontWeight: 'bold',
    color: 'black',
  },
});
