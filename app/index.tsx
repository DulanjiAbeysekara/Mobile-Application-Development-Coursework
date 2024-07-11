import { View, Text,StyleSheet,Image,TextInput} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.backgroundView2}>
        <Image
        style={styles.spotifyLogo}
        source={require('../assets/images/left.png')}
        />
      <Text style={styles.topic2}>Create account</Text>

      <Text style={styles.topic}>What's your name?</Text>

      <TextInput style={styles.inputFeild} />

      <Text style={styles.topic3}>This appearn on your Spotify profile.</Text>

      

    </View>
  )
}

const styles=StyleSheet.create({
    backgroundView2: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 10,
        backgroundColor: 'black',
      },
      topic2: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        top: -15,
        left: 125,
      },
      spotifyLogo: {
        width:30,
        height:30,
        top:10,
        left:10
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
      inputFeild: {
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
      topic3: {
        fontSize: 10,
        color: 'white',
        textAlign: 'left',
        fontWeight: '300',
        marginBottom: 25,
        left: 18,
        top: 5,
      }
})