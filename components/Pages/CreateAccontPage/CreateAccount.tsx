import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccount() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Keep the picker open on iOS, close on Android
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  const navigation = useNavigation();

  return (
    <View style={styles.backgroundView2}>
    <Text style={styles.topic2}>Create account</Text>

    <Text style={styles.topic}>What's your date of birth?</Text>

    <TextInput style={styles.inputFeild} placeholder="MM/DD/YYYY" placeholderTextColor="white"/>


    <TouchableOpacity style={styles.nextBtn1} 
      onPress={() => navigation.navigate('Gender-Page')
        }>
      <Text style={styles.nextBtnText}>Next</Text>
    </TouchableOpacity>
  
  </View>
  );
}

const styles = StyleSheet.create({
  backgroundView2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'black',
  },
  topic2: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
  },
  topic: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 25,
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
    backgroundColor: '#848884',
  },
  nextBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 75,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'white',
  },
  nextBtnText: {
    fontWeight: 'bold',
    color: 'black',
  },
});
