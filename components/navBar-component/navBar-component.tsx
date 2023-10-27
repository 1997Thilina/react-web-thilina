//@ts-nocheck
import React ,{RefObject , useState, useEffect } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity,Dimensions, ScrollView } from 'react-native';
//import ftImage from '../../assets/footer5.jpg';

interface NavigationBarProps {
  title: string;
  buttons: string[];
  sectionRefs:RefObject<View | null>[];
  scrollViewRef: RefObject<ScrollView | null>;
}


const NavBar: React.FC<NavigationBarProps> = ({ title, buttons, sectionRefs, scrollViewRef }) => {
  
  
 
  const scrollToSection = (index: number) => {
    
    const sectionRef = sectionRefs[index].current;
    const scrollView = scrollViewRef?.current;

    if (sectionRef && scrollView) { // Check both sectionRef and scrollView
      console.log(sectionRef);
      sectionRef.measureLayout(
        scrollView.getInnerViewNode(),
        
        (x, y) => {
          scrollView.scrollTo({ y, animated: true }); // Use scrollView here
          console.log(x)
        }
      );
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.leftButtons}>
        {buttons.map((buttonText, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => scrollToSection(index)}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    //backgroundColor:'#fff',
    alignItems:'center',
    height:55,
    //position:'absolute'
   
  },
  leftButtons: {
    flex:1 ,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems:'flex-end',
    paddingVertical: 5,
    paddingRight:40,
    
  },
  button: {
    marginLeft: 10,
    //paddingHorizontal: 10,
    paddingTop: 7,
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginLeft:20,
    //marginRight:20,
    resizeMode:'stretch'
  },
  titleContainer: {
    //flexWrap: 'wrap',
    //marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#004d66',
    fontSize: 15,
    fontWeight: 'bold',
  },
  
});

export default NavBar;
