import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkillsAndAboutMe: React.FC = () => {
  return (
    <View style={styles.container}>
        
        <View style={styles.aboutMeContainer}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.aboutMeText}>
          I am a passionate software and web developer with a strong foundation in programming and a keen interest in mobile app development. Currently pursuing a degree in Electronics and Information Technology, I am dedicated to expanding my knowledge and skills to deliver innovative solutions. My collaborative spirit and adaptability enable me to contribute effectively to diverse teams. I thrive on challenges, embracing continuous learning, and leveraging mistakes as stepping stones to growth.
        </Text>
      </View>
      <View style={styles.skillsContainer}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.skillsText}>
          - Programming Languages:  JavaScript, Java, Typescript, Python
          {"\n"}- Frontend Development:  React Native, HTML, CSS
          {"\n"}- Database:  MySQL, Firebase
          {"\n"}- Other:  IOT, NodeMcu, AVR C
          {"\n"}- Tools:  Git, GitHub, jira
        </Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection:"row",
    padding: 20,
    marginTop:20
  },
  skillsContainer: {
    margin: 20,
    width:"40%",
    padding:50,
    //justifyContent:'center',
    alignItems:'flex-start'
  },
  aboutMeContainer: {
    margin: 20,
    width:"50%",
    padding:50,
    //justifyContent:'center',
    alignItems:'flex-start'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#084155'
  },
  skillsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  aboutMeText: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default SkillsAndAboutMe;
