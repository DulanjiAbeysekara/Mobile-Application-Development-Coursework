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

      <TouchableOpacity style={[styles.button, styles.signUpBtn]}>
        <Text style={styles.signUpText}>Sign up for free</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.googleBtn]}>
        <Image
          style={styles.googleLogo}
          source={require('../assets/images/google.png')}
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.facebookBtn]}>
        <Image
          style={styles.facebookLogo}
          source={require('../assets/images/facebook (1).png')}
        />
        <Text style={styles.facebookText}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.appleBtn]}>
        <Image
          style={styles.appleLogo}
          source={require('../assets/images/apple.png')}
        />
        <Text style={styles.appleText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
       Login
      </Text>

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
    marginTop: 120,
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
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 300,
    alignItems: 'center',
    marginTop: 8,
  },
  signUpBtn: {
    backgroundColor: '#059212',
  },
  signUpText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleLogo: {
    width: 20,
    height: 20,
    right:30,
  },
  facebookBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  facebookLogo: {
    width: 20,
    height: 20,
    right:25,
  },

  appleBtn: {
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center',
  },

  appleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  
  appleLogo: {
    width: 20,
    height: 20,
    right:36,
  },

  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:8,
  }
});
