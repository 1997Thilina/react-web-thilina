
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import LandingPage from './components/landing-page/landing-page';
import NavBar from './components/navBar-component/navBar-component';
import SkillsAndAboutMe from './components/about-me-page/about-me-page';

//import SimpleMenu from './components/menu-component/menu-component';

const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      
      <NavBar title="" buttons={['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5']} />
      
      
      <ScrollView style={styles.container} >
        
        <LandingPage></LandingPage>
        <SkillsAndAboutMe></SkillsAndAboutMe>
        
        
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
