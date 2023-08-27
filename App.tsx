
import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import LandingPage from './components/landing-page/landing-page';
import SimpleMenu from './components/menu-component/menu-component';
import NavBar from './components/navBar-component/navBar-component';

//import SimpleMenu from './components/menu-component/menu-component';

const {height} = Dimensions.get('screen');

const App = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.navContainer}>
      <NavBar title="My App" buttons={['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5']} />
      </View>
      <ScrollView style={styles.container}>
        <SimpleMenu></SimpleMenu>
        <LandingPage></LandingPage>
        
        <Text>Hello React Native Web!!!</Text>
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
