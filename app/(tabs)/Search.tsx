import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

const Search = () => {
  const [isHovered, setIsHovered] = useState(false);

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

      </View>
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
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 480,
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
    top: 5,
  },
  camera: {
    left: 150,
    top: 8,
  },
  textContainer:{
    
  }
});

export default Search;
