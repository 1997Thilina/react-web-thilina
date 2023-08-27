
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

interface LandingPageProps {}

const LandingPage: React.FC<LandingPageProps> = () => {
  
  return (
    <View style={styles.container}>

      
      
      <Image source={require('../../assets/logo.png')}  />
      <Image
        source={{ uri: 'https://images.pexels.com/photos/9571268/pexels-photo-9571268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
        style={{ width: 200, height: 200 }} // Set the desired width and height
      />
      
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Text style={styles.subtitle}>Explore the Amazing Features</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginTop:100
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
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
