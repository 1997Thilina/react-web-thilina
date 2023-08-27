import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const SimpleMenu: React.FC = () => {
  return (
    <View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.buttonText}>About</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
       // marginRight:50,
        marginTop:10
        
      },
      buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        
      
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});

export default SimpleMenu;
