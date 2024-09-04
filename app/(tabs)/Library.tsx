// If your file structure is different, adjust the path accordingly
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const Library = () => {
  const artists = [
    { name: 'Ridma Weerawardana',name1:'Artist', image: require('../../assets/images/ridma 2.jpeg') }, // Adjusted path
    { name: 'Raini Charuka',name1:'Artist', image:require('../../assets/images/raini.jpeg') },
    { name: 'Tehan Prera',name1:'Artist', image: require('../../assets/images/tehan perera.jpeg') },
    { name: 'Charitha Attalage',name1:'Artist', image:require('../../assets/images/charitha.jpeg') },
    { name: 'La Signore',name1:'Artist', image:require('../../assets/images/la signore.jpeg') },
    {image:require('../../assets/images/plus (4).png')}
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.backgroundView}>
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>D</Text>
          </View>

          <Text style={styles.circleText1}>Your Library</Text>

          <AntDesign style={styles.icon} name="search1" size={30} color="white" />
          <AntDesign style={styles.plus} name="plus" size={30} color="white" />
        </View>

        <View style={styles.circleContainer2}>
          <View style={styles.circle1}>
            <Text style={styles.text}>Playlists</Text>
          </View>
          <View style={[styles.circle1, styles.active]}>
            <Text style={styles.text}>Artists</Text>
          </View>
        </View>

        <View style={styles.artistsContainer}>
          {artists.map((artist, index) => (
            <View key={index} style={styles.artistWrapper}>
              <View style={styles.artists}>
                <Image style={styles.artistsImg} source={artist.image} />
              </View>
              <Text style={styles.artistsName}>{artist.name}</Text>
              <Text style={styles.artistsName1}>{artist.name1}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'black',
  },
  backgroundView: {
    flex: 1,
    paddingTop: 20,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
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
    marginRight: 'auto',
  },
  icon: {
    marginRight: 20,
  },
  plus: {
    marginRight: 0,
  },
  circleContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    // marginTop: 20,
    marginBottom: 10,
  },
  circle1: {
    backgroundColor: '#353839',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontWeight: '400',
  },
  active: {
    backgroundColor: '#353839',
  },
  artistsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: 20,
    marginTop:20
  },
  artistWrapper: {
    alignItems: 'center',
    // marginBottom: 20,
    right:90
  },
  artists: {
    backgroundColor: '#353839',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 10,
  },
  artistsImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  artistsName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    left:150,
    bottom:80,
    
  },
  artistsName1:{
    color: 'white',
    fontWeight: '300',
    textAlign: 'center',
    left:150,
    bottom:80,
  }
});

export default Library;
