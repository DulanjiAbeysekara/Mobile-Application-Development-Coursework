import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React from 'react'

export default function Index() {
  return (
    <View style={styles.backgroundView2}>
      <Image
        style={styles.spotifyLogo}
        source={require('../assets/images/left.png')}
      />
      <Text style={styles.topic2}>Create account</Text>

      <Text style={styles.topic}>What's your name?</Text>

      <TextInput style={styles.inputField} />

      <Text style={styles.topic3}>This appears on your Spotify profile.</Text>

      <View style={styles.line} />

      <Text style={styles.topic4}>By tapping on ‘Create account’, you agree to the Spotify Terms of Use.</Text>

      <Text style={styles.linkText}>Terms of Use</Text>

      <Text style={styles.agreementText}>To learn more about how Spotify collects, uses, shares and protects<br></br>
      your personal data, please see the Spotify Privacy Policy. </Text>
      <Text style={styles.linkText}>Privacy Policy</Text>

      <Text style={styles.agreementText}>I would prefer not to receive marketing messages from Spotify.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundView2: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
    backgroundColor: 'black',
  },
  spotifyLogo: {
    width: 30,
    height: 30,
    top: 10,
    left: 10,
  },
  topic2: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    top: -15,
    left: 125,
  },
  topic: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    fontWeight: '600',
    marginBottom: 25,
    left: 15,
    top: 30,
  },
  inputField: {
    height: 40,
    width: '90%',
    borderColor: '#848884',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: '#848884',
  },
  line: {
    height: 0.1,
    width: '85%',
    backgroundColor: '#848884',
    alignSelf: 'center',
    marginTop: 5,
  },
  topic3: {
    fontSize: 10,
    color: 'white',
    textAlign: 'left',
    fontWeight: '300',
    marginBottom: 25,
    left: 18,
    top: 5,
  },
  topic4: {
    fontSize: 10,
    color: 'white',
    textAlign: 'left',
    fontWeight: '300',
    marginBottom: 25,
    left: 24,
    top: 15,
  },
  linkText: {
    fontSize: 10,
    color: '#059212',
    textAlign: 'left',
    fontWeight: '400',
    left: 24,
  },
  agreementText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'left',
    fontWeight: '300',
    marginBottom: 25,
    left: 24,
    top: 15,
  },
})
