import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import lnkdin from '../../assets/linkedin.png';
import fb from '../../assets/facebook.png';
import github from '../../assets/github.jpg';
import ftImage from '../../assets/footer5.jpg';
import wapp from '../../assets/whatsapp.png';
import ContactTags from '../contact-tags/contact-tags';


const ContactsPage: React.FC = () => {
  const contLinks = [
    
    {
      refLink:'https://github.com/1997Thilina/react-web-thilina/tree/dev',
      imageSource: wapp, // Replace with actual image source
    },
    {
      refLink:'https://github.com/1997Thilina/react-web-thilina/tree/dev',
      imageSource: fb, // Replace with actual image source
    },
    {
      refLink:'https://github.com/1997Thilina/iot-smart-plug',
      imageSource: lnkdin, // Replace with actual image source
    },
    {
        refLink:'https://github.com/1997Thilina/smart-fall-detector-atmega32-',
        imageSource: github, // Replace with actual image source
    },
    
    // Add more project objects here
  ];

  return (
    <View style={styles.container}>
        <Image
          source={{ uri: ftImage }}
          style={[styles.footerImage]}
          resizeMode='stretch'
        />

        
        
        <View style={styles.contactHolder}>
            
        {contLinks.map((project, index) => (
            <ContactTags
            key={index}
            
            refLink={project.refLink}
            imageSource={project.imageSource}
            />
        ))}
        
        </View>
        <Text style={styles.subtitle}>@2023 Thilina Munasingha</Text>
        
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:0.2,
    paddingBottom:20,
    marginTop:80,
    flexDirection:"column",
    //justifyContent:"space-evenly",
    width:'100%',
    alignItems:'center',
    
  },


  contactHolder:{
    padding: 5,
    marginTop:10,
    flex:1 ,
    flexDirection:"row",
    justifyContent:"center",
    width:'100%',
    //height:20,

  },
  footerImage: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    opacity: 0.75, // Adjust the opacity as needed
    borderRadius: 5,
    
  },
  text:{
    
    fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
    //paddingBottom: 10,
    //marginLeft:80,
    color:'#084155'
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    //marginBottom: 20,
  },
});

export default ContactsPage;
