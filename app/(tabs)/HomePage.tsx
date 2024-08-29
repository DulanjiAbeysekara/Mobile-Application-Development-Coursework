import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function HomePage() {
  return (
    <View style={styles.backgroundView}>
      <View style={styles.circleContainer}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>D</Text>
        </View>

        <View style={styles.circle1}>
          <Text style={styles.circleText}>All</Text>
        </View>

        <View style={styles.circle2}>
          <Text style={styles.circleText1}>Music</Text>
        </View>
      </View>

      <View style={styles.labelBar}>
        <Text style={styles.label1}>Your top mixes</Text>
      </View>

      <View style={styles.firstContainer}>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundView: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start', // Start from the top
    paddingTop: 15, // Add padding to avoid overlap with status bar
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '80%',
    marginBottom: 30, 
    marginLeft:-30
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#DDA0DD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  circle1: {
    width: 60,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#32CD32',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  circle2: {
    width: 90,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#353839',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  circleText1: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
  },
  labelBar: {
    width: '80%',
    paddingTop: 80, 
  },
  label1: {
    color: 'white',
    fontSize: 28, 
    fontWeight: 'bold',
    top:70,
    left:-15,
  },
  firstContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:50,
    backgroundColor:'gray' 
  }
});
