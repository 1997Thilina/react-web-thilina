import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface NavigationBarProps {
  title: string;
  buttons: string[];
}

const NavBar: React.FC<NavigationBarProps> = ({ title, buttons }) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.leftButtons}>
        {buttons.map((buttonText, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    width:'100%',

    
    //justifyContent: 'space-between',
    //alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  leftButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  button: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height:35,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  titleContainer: {
    flex: 1,
    //alignItems: 'flex-start',
    marginRight:20,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default NavBar;
