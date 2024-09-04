import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';

const Library = () => {
  return (
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

      <View style={styles.artistsContainer}></View>
          <View style={styles.artists}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: 'black',
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
    marginTop: 50,
  },
  circle1: {
    backgroundColor: '#353839',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 45,
    borderRadius: 25,
    marginRight: 10,
    bottom:40
  },
  text: {
    color: 'white',
    fontWeight: '400',
  },
  active: {
    backgroundColor: '#353839', 
  },
  artistsContainer:{

  },
  artists:{

  }
});

export default Library;
