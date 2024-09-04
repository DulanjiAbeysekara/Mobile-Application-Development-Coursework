import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const Library = () => {
  return (
    <View style={styles.backgroundView}>
    
    <View style={styles.circleContainer}>
          
          <View style={styles.circle}>
            <Text style={styles.circleText}>D</Text>
          </View>

          <Text style={styles.circleText1}>Your Library</Text>

          <AntDesign style={styles.icon} name="search1" size={24} color="gray" />
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  backgroundView:{
    flex:1,
    backgroundColor:'black'
  },
  circleContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
    top: 20,
    left: 20,
  },
  circle:{
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  circleText:{
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleText1:{
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    top: 1,
  },
  icon:{
    
  }
})

export default Library