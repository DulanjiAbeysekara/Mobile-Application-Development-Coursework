import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const Search = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [text, onChangeText] = useState('');

  return (
    <View style={styles.backgroundView}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>D</Text>
        </View>

        <Text style={styles.circleText1}>Search</Text>

        <Pressable>
          <TouchableOpacity
            style={styles.camera}
            activeOpacity={0.7}
            onPressIn={() => setIsHovered(true)}
            onPressOut={() => setIsHovered(false)}
          >
            <Feather name="camera" size={28} color={isHovered ? '#FFD700' : 'white'} />
          </TouchableOpacity>
        </Pressable>
      </View>

      <View style={styles.textContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="What do you want to listen to?"
          placeholderTextColor="gray"
        />

      <AntDesign style={styles.icon} name="search1" size={24} color="gray" />
      </View>

      <Text style={styles.text1}>Browse All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    backgroundColor: 'black',
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    bottom: 190,
    marginLeft: -30,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  circleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleText1: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    top: 1,
  },
  camera: {
    left: 150,
    top: 5,
  },
  textContainer: {
    width: '100%',
    bottom: 185,
    alignItems: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    color: 'black',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    fontWeight:'500',
    top:18
  },
  icon:{
    right:120,
    bottom:18,
  },
  text1:{
    fontSize:22,
    color:'white',
    fontWeight:'bold',
    right:105,
    bottom:160,
  }
});

export default Search;