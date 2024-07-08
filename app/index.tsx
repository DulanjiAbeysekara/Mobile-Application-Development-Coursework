import { View, Text,StyleSheet} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View style={styles.backgroundView}>
      <Text>Million of songs.
      Free on Spotify.
      </Text>
    </View>
  )
}

const styles= StyleSheet.create({
  backgroundView:{
    flex:1,
    alignItems:'center',
    margin:10,
    backgroundColor:'black'
  }
})