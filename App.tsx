////@ts-nocheck
import React , { useRef} from 'react';
import {Dimensions, ScrollView,  StyleSheet,ImageBackground, View} from 'react-native';
import LandingPage from './components/landing-page/landing-page';
import NavBar from './components/navBar-component/navBar-component';
import SkillsAndAboutMe from './components/about-me-page/about-me-page';
import ProjectsPage from './components/project-page/project-page';
//import ContactMeSection from './components/contact-page/contact-page';
import ContactsPage from './components/contact-page/contact-page';
//import bgi from 'https://www.w3schools.com/images/background_in_space.gif';
import bgi from './assets/bgi.jpg'

import ContactForm from './components/emailMe-page/emailMe-page';

const {height} = Dimensions.get('screen');
const App = () => {
  console.log(height);

  const scrollViewRef = useRef<ScrollView | null>(null);
  const section1Ref = useRef<View | null>(null);
  const section2Ref = useRef<View | null>(null);
  const section3Ref = useRef<View | null>(null);
  const section4Ref = useRef<View | null>(null);
  return (
    <ScrollView style={styles.container}  >
      <ImageBackground
          source={{ uri: bgi }}
          style={[styles.backgroundImage]}
          //resizeMode="contain"
        />
       
       <NavBar title=""
          buttons={['Home', 'About me', 'My works', 'contact me']} sectionRefs={[section1Ref,section2Ref,section3Ref,section4Ref]} scrollViewRef={scrollViewRef} />
      
      <ScrollView style={styles.center}  ref={scrollViewRef} showsVerticalScrollIndicator={false}>
     
      
      

      <View ref={section1Ref}></View>
      <LandingPage ></LandingPage>
      <View ref={section2Ref}></View>
      <SkillsAndAboutMe></SkillsAndAboutMe>
      <View  ref={section3Ref}></View>
      <ProjectsPage ></ProjectsPage>
      <View ref={section4Ref}></View>
      <ContactForm></ContactForm>
      <ContactsPage></ContactsPage>
      
      </ScrollView>

     
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
  container: {
    
    
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFF',
    //height:height,
    
  },
  center: {
    //flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#FFF',
    //margin:1,
    height:height,
    //height:
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    opacity: 0.7, // Adjust the opacity as needed
    //borderRadius: 10,
  },

  


});

export default App;
