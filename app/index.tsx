import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Index() {
  return (
    <View style={styles.backgroundView}>

      <Text style={styles.text}>
        Millions of songs.
       
      </Text>

      <Text style={styles.text1}>
        Free on Spotify.
      </Text> 

      <Image
        style={styles.spotifyLogo}
        source={require('../assets/images/Spotify_Primary_Logo_RGB_White.png')}
      />
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
  text: {
    color: 'white',  
    textAlign: 'center',  
    marginBottom: 20, 
    fontSize:30,
    fontWeight:600,
    paddingTop:180

  },

  text1: {
    color: 'white',  
    textAlign: 'center',  
    marginBottom: 20, 
    fontSize:30,
    marginTop:-20,
    fontWeight:600
  },
  spotifyLogo: {
    width: 50,
    height: 50,
    bottom:170
  }
});
