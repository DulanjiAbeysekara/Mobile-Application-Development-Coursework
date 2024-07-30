import { View, Text ,StyleSheet,Button,TouchableOpacity,Image} from 'react-native'
import React from 'react'

export default function index() {
  return (
    <View  style={styles.backgroundView2}>
      
      <TouchableOpacity style={styles.btn1}>
        <Text style={styles.nextBtn1Text}> D</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.nextBtn2Text}> All</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.butotn3}>
        <Text style={styles.nextButotn3Text}> Music</Text>
      </TouchableOpacity>

      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/home (6).png')}
        
      />
       <Text style={styles.homeText}> Home</Text>

      <Image
        style={styles.tinyLogo2}
        source={require('../assets/images/search.png')}
      />
      <Text style={styles.searchText}> Search</Text>

        <Image
        style={styles.tinyLogo3}
        source={require('../assets/images/library.png')}
      />

      <Text style={styles.libraryText}> Your Library</Text>

    <Image
        style={styles.tinyLogo4}
        source={require('../assets/images/Spotify_Primary_Logo_RGB_White.png')}
      />

    <Text style={styles.premiumText}>Premium</Text>

    </View>
  )
}

const styles=StyleSheet.create({

    backgroundView2:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
    backgroundColor: 'black',
    },
    
    btn1:{
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 75,
    width: 40,
    height:40,
    alignItems: 'center',
    marginTop: 15   ,
    backgroundColor:'#DDA0DD',
    marginLeft:18
    },

    nextBtn1Text:{
     color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    bottom:30,

    },

  btn2:{
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 75,
        width: 60,
        height:40,
        alignItems: 'center',
        marginTop: -40   ,
        backgroundColor:'#059212',
        marginLeft:70
        },
    
        nextBtn2Text:{
         color: 'black',
        fontSize: 18,
        fontWeight: '400',
        bottom:27,
        right:2,
        },
        butotn3: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 75,
            width: 70,
            height:40,
            alignItems: 'center',
            marginTop: -40   ,
            backgroundColor:'#666362',
            marginLeft:140
        },

        nextButotn3Text:{
            color: 'white',
            fontSize: 18,
            fontWeight: '400',
            bottom:27,
            right:2,
        },
    
        tinyLogo:{
            width:28,
            height:28,
            left:22,
            top:440
        },
        homeText:{
          color: 'white',
          fontSize: 12,
          fontWeight: '300',
          top:440,
          left:17

        },
        tinyLogo2:{
          width:28,
          height:28,
          left:115,
          top:398
        },
        searchText:{
          color: 'white',
          fontSize: 12,
          fontWeight: '300',
          top:398,
          left:110
        },
        tinyLogo3:{
          width:28,
          height:28,
          left:208,
          top:355
        },
        libraryText:{
          color: 'white',
          fontSize: 12,
          fontWeight: '300',
          top:355,
          left:190
        },
        tinyLogo4:{
          width:28,
          height:28,
          left:295,
          top:310
        },
        premiumText:{
          color: 'white',
          fontSize: 12,
          fontWeight: '300',
          top:312,
          left:288,
        }
})