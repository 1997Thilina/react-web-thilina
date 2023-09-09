////@ts-nocheck
import React , { useRef} from 'react';
import {Dimensions, ScrollView,  StyleSheet, View} from 'react-native';
import LandingPage from './components/landing-page/landing-page';
import NavBar from './components/navBar-component/navBar-component';
import SkillsAndAboutMe from './components/about-me-page/about-me-page';
import ProjectsPage from './components/project-page/project-page';
//import ContactMeSection from './components/contact-page/contact-page';
import ContactsPage from './components/contact-page/contact-page';
//import SmoothScrollView from 'react-native-smooth-scroll-view';


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
    <View style={styles.container}   >
      
      <View>
       <NavBar title=""
          buttons={['Home', 'About me', 'My works', 'contact me']} sectionRefs={[section1Ref,section2Ref,section3Ref,section4Ref]} scrollViewRef={scrollViewRef} />
      </View>
      <ScrollView style={styles.center} ref={scrollViewRef}>
     
      
      

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

     
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFF',
    height:660,
  },
  center: {
    //flexWrap: 'wrap',
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#FFF',
    //margin:1,
    //height:height,
    //height:
  },
  


});

export default App;
