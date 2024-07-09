import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Index() {
  return (
    <View style={styles.backgroundView}>
      <Image
        style={styles.spotifyLogo}
        source={require('../assets/images/Spotify_Primary_Logo_RGB_White.png')}
      />
      
      <Text style={styles.text}>
        Millions of songs.
      </Text>

      <Text style={styles.text1}>
        Free on Spotify.
      </Text> 

      <TouchableOpacity style={styles.signUpBtn}>
        <Text style={styles.signUpText}>Sign up for free</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'black',
  },
  spotifyLogo: {
    width: 50,
    height: 50,
    marginTop: 180,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 30,
    fontWeight: '600',
  },
  text1: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 30,
    marginTop: -10,
    fontWeight: '600',
  },
  signUpBtn: {
    backgroundColor: '#06D001',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 300,
    alignItems: 'center',
  },
  signUpText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
