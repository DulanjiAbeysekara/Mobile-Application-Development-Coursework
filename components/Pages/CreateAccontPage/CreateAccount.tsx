import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform,Pressable ,Image} from 'react-native';
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

       <Pressable onPress={() => navigation.navigate('SignUp-Page')}>
        <Image
          style={styles.spotifyLogo}
          source={require('../../../assets/images/left.png')}
        />
      </Pressable>

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
    // margin: 10,
    backgroundColor: 'black',
  },
  topic2: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    bottom: 233,
  },
  topic: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    bottom:180,
    right:40
  },
  inputFeild: {
    height: 40,
    width: '90%',
    borderColor: '#848884',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    top: -165,
    backgroundColor: '#848884',
  },
  nextBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 75,
    alignItems: 'center',
    top: -65,
    backgroundColor: 'white',
  },
  nextBtnText: {
    fontWeight: 'bold',
    color: 'black',
  },
  spotifyLogo:{
    width: 30,
    height: 30,
    position: 'absolute',
    top: -240,
    left: -178, 
  }
});
