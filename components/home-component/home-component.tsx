//@ts-nocheck
import React ,{RefObject} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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
          scrollView.scrollTo({ y:600, animated: true }); // Use scrollView here
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
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 20,
    height:70,
  },
  leftButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 5,
  },
  button: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 35,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  titleContainer: {
    flex: 1,
    marginRight: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#666',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default NavBar;
