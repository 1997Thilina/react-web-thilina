import React from 'react';
import {  Image, StyleSheet, Linking ,TouchableOpacity} from 'react-native';


interface ContactTagsProps {
  refLink:string;
  imageSource: any; // Replace with actual image source
}

const ContactTags: React.FC<ContactTagsProps> = ({refLink, imageSource }) => {
  
  const handleImageClick = () => {

    Linking.openURL(refLink);
  };
  return (   
        
        <TouchableOpacity onPress={handleImageClick}>
        <Image
          source={{uri:imageSource}}
          style={styles.gitImage}
        />
        </TouchableOpacity>
      
  );
};

const styles = StyleSheet.create({
  
  imageContainer: {
    padding: 5,
    
    //justifyContent:'flex-end'
    //flex:1,
    //flexDirection:'row'
  },
  
  gitImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin:15,
    
  }, 
  
});

export default ContactTags;
