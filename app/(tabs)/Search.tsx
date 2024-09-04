import { View, Text, StyleSheet, TouchableOpacity, Pressable, TextInput, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const Search = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [text, onChangeText] = useState('');

  // Define arrays of colors, images, and topics
  const colors = ['#FF6347', '#FFD700', '#00563B', '#87CEEB', '#FF69B4', '#20B2AA', '#FFA500', '#8A2BE2'];
  const images = [
    require('../../assets/images/music.jpeg'),
    require('../../assets/images/live event.jpeg'),
    require('../../assets/images/made for you.jpeg'),
    require('../../assets/images/new release.jpeg'),
    require('../../assets/images/pop.jpeg'),
    require('../../assets/images/hippop.jpeg'),
    require('../../assets/images/dance.jpeg'),
    require('../../assets/images/latian.jpeg'),
  ];
  const topics = ['Music', 'Live Event', 'Made For You', 'New Releases', 'Pop', 'Hip-Hop', 'Dance', 'Latin'];

  return (
    <ScrollView style={styles.scrollContainer}>
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

        <View style={styles.browserContainer}>
          {/* Map through the colors, images, and topics arrays to create grid items */}
          {colors.map((color, index) => (
            <View key={index} style={[styles.gridItem, { backgroundColor: color }]}>
              <Image 
                style={styles.sideScrollPic}
                source={images[index]}
              />
              <Text style={styles.artistsName}>{topics[index]}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
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
    bottom: -3,
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
    bottom: 80,
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
    fontWeight: '500',
    top: 100,
  },
  icon: {
    position: 'absolute',
    right: 300,
    bottom: -88,
  },
  text1: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    right: 105,
    bottom: -50,
  },
  browserContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '90%',
    bottom: -60,
  },
  gridItem: {
    width: '45%',
    height: 100,
    margin: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sideScrollPic: {
    height: 55,
    width: 55,
    borderRadius: 3,
    transform: [{ rotate: '15deg' }], 
    left:43,
    top:10,
  },
  artistsName: {
    top: -40,
    color: 'white',
    fontWeight: 'bold',
    right:40,
    fontSize:12,
    left:-31
  },
});

export default Search;
