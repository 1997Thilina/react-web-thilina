
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import LandingPage from './components/landing-page/landing-page';
import NavBar from './components/navBar-component/navBar-component';
import SkillsAndAboutMe from './components/about-me-page/about-me-page';
import ProjectsPage from './components/project-page/project-page';
//import ContactMeSection from './components/contact-page/contact-page';
import ContactsPage from './components/contact-page/contact-page';

//import SimpleMenu from './components/menu-component/menu-component';

const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      
      <NavBar title="" buttons={['Home', 'About me', 'My works', 'contact me']} />
      
      
      <ScrollView style={styles.container} >
        
        <LandingPage></LandingPage>
        <SkillsAndAboutMe></SkillsAndAboutMe>
        <ProjectsPage></ProjectsPage>
        <ContactsPage></ContactsPage>
        
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFF',
    height,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer:{
    height:70
  }
});

export default App;
