// @ts-nocheck

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import ims from '../../assets/1680719239716.jpg'
import background1 from '../../assets/background1.jpg'

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  //const screenWidth = Dimensions.get('window').width;
  //const isWideScreen = screenWidth > 500;

  return (
    <View style={styles.container}>  
      
      <Image
          source={{ uri: background1 }}
          style={[styles.backgroundImage]}
          //resizeMode="contain"
        />
      <View style={styles.textContainer}>
      <Text style={styles.titleUp}>I'm</Text>
        <Text style={styles.title}>Thilina Munasingha</Text>
        <Text style={styles.subtitle}>"I'm Ready to Turn Your Vision into Reality Using the Latest Innovations in Technology for Your Next Remarkable Tech Product."</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact me</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: ims }}
          style={[styles.logo]}
          
        />
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap' ,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100,
    margin:10,
    
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    opacity: 0.75, // Adjust the opacity as needed
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    //paddingLeft: 100,
    marginEnd: 30,
    marginBottom:40
  },
  imageContainer: {
    flexWrap: 'wrap' ,
    justifyContent: 'center',
    alignItems: 'center',
    //margintop: 20,
  },
  logo: {
    marginBottom: 20,
    borderRadius: 200,
    //borderBottomLeftRadius: 50,
    //borderTopRightRadius: 50,
    width: 400,
    height:400
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleUp: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#177B9D',
  },
  subtitle: {
    fontSize: 20,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LandingPage;
