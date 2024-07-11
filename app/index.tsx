import { View, Text ,StyleSheet,Button,TouchableOpacity} from 'react-native'
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
         color: 'white',
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
    
})