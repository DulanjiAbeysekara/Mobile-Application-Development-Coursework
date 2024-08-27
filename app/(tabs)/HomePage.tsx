import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <View style={styles.backgroundView}>
      
      {/* Circle Buttons */}
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>D</Text>
        </View>

        <View style={styles.circle1}>
          <Text style={styles.circleText}>All</Text>
        </View>

        <View style={styles.circle2}>
          <Text style={styles.circleText1}>Music</Text>
        </View>
      </View>

      {/* Icon Buttons */}
      <View style={styles.iconContainer}>
        <Image
          style={styles.home}
          source={require('../../assets/images/home (4).png')}
        />
        <Image
          style={styles.home}
          source={require('../../assets/images/search (5).png')}
        />
        <Image
          style={styles.home}
          source={require('../../assets/images/music-album.png')}
        />
        <Image
          style={styles.home}
          source={require('../../assets/images/Spotify_Primary_Logo_RGB_White.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    width: '80%',
    position: 'absolute',
    top: 20, 
    right:55
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10, // Space between circles
  },
  circle1: {
    width: 60,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  circle2: {
    width: 90,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#353839',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    position: 'absolute',
    bottom: 50, 
  },
  home: {
    width: 25,
    height: 25,
  },
});
