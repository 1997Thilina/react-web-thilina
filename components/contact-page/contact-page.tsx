import React from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import ftImage from '../../assets/i.jpg';
import ContactTags from '../contact-tags/contact-tags';


const ContactsPage: React.FC = () => {
  const contLinks = [
    {
      refLink:'https://github.com/1997Thilina/react-web-thilina/tree/dev',
      imageSource: project1, // Replace with actual image source
    },
    {
      refLink:'https://github.com/1997Thilina/iot-smart-plug',
      imageSource: project2, // Replace with actual image source
    },
    {
        refLink:'https://github.com/1997Thilina/smart-fall-detector-atmega32-',
        imageSource: project3, // Replace with actual image source
    },
    
    // Add more project objects here
  ];

  return (
    <View style={styles.container}>
        <Image
          source={{ uri: ftImage }}
          style={[styles.footerImage]}
          //resizeMode="stretch"
        />
        <View style={styles.Holder}>

        <Text style={styles.text}>Contact me</Text>
        
        
        
        <View style={styles.contactHolder}>
            
        {contLinks.map((project, index) => (
            <ContactTags
            key={index}
            
            refLink={project.refLink}
            imageSource={project.imageSource}
            />
        ))}
        
        </View>
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop:50,
    //flexWrap:'wrap-reverse' ,
    flexDirection:"row",
    justifyContent:"space-evenly",
    width:'100%',
    //height:100,
    //alignContent:'flex-start'
  },
  Holder:{
    padding: 10,
    
    flex:1 ,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:'center'

  },

  contactHolder:{
    padding: 5,
    marginTop:100,
    flex:1 ,
    flexDirection:"row",
    justifyContent:"center",
    width:'100%',
    height:20,

  },
  footerImage: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    opacity: 0.75, // Adjust the opacity as needed
    borderRadius: 10,
    
  },
  text:{
    
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10,
    //marginLeft:80,
    color:'#084155'
  },
});

export default ContactsPage;
