import { View, Text, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';
import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function Name() {
  const radioButtons = useMemo(
    () => [
      {
        id: '1',
        value: 'option1',
      },
      {
        id: '2', 
        value: 'option1',
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState();

  return (
    <View style={styles.backgroundView2}>
      <Image
        style={styles.spotifyLogo}
        source={require('../../../assets/images/left.png')}
      />
      <Text style={styles.topic2}>Create account</Text>

      <Text style={styles.topic}>What's your name?</Text>

      <TextInput style={styles.inputField} />

      <Text style={styles.topic3}>This appears on your Spotify profile.</Text>

      <View style={styles.line} />

      <Text style={styles.topic4}>
        By tapping on ‘Create account’, you agree to the Spotify Terms of Use.
      </Text>

      <Text style={styles.linkText}>Terms of Use</Text>

      <Text style={styles.agreementText}>
        To learn more about how Spotify collects, uses, shares and protects
        your personal data, please see the Spotify Privacy Policy.
      </Text>
      <Text style={styles.linkText}>Privacy Policy</Text>

      <Text style={styles.agreementText}>
        I would prefer not to receive marketing messages from Spotify.
      </Text>

      <Text style={styles.agreementText}>Share my registration data with Spotify’s content providers for
        <br></br> marketing purposes.</Text>

      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        containerStyle={styles.radioButtonContainer}
      />

        <TouchableOpacity style={styles.nextBtn1}>
        <Text style={styles.nextBtnText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
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
  radioButtonContainer: {
    left: 300,
    marginTop: -80,
  },

  nextBtn1: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    width: 150,
    alignItems: 'center',
    marginTop: 85,
    backgroundColor: 'white',
    fontWeight: 'bold',
    left: 100,
  },
  nextBtnText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

