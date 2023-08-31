import React from 'react';
import { ScrollView, StyleSheet, View,Text } from 'react-native';
import ProjectCard from '../project-card/project-card'; // Import the ProjectCard component
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';


const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: 'Portfolio website',
      description: 'In this project, I set out to create an impressive portfolio using the dynamic duo of React Native and TypeScript. My main goal was to craft a visually striking and functional web app that would serve as a digital showcase of my skills and accomplishments. By harnessing the power of React Native s cross-platform capabilities, I ensured that my portfolio would be accessible and responsive across various devices.',
      refLink:'https://github.com/1997Thilina/react-web-thilina/tree/dev',
      imageSource: project1, // Replace with actual image source
    },
    {
      title: 'IoT Smart Plug',
      description: ' As a vital member of a collaborative team of four, I took on the exciting task of crafting an appealing user interface for an admin dashboard in our PHP-powered smart plug IoT project. With a creative blend of HTML and CSS, I transformed concepts into visually captivating designs. This role allowed me to merge aesthetics with functionality, contributing to a seamless and visually engaging experience for users interacting with our IoT solution.',
      refLink:'https://github.com/1997Thilina/iot-smart-plug',
      imageSource: project2, // Replace with actual image source
    },
    {
        title: 'Smart human fall detector',
        description: 'In this innovative project, I engineered a smart human fall detection system integrated with a heartbeat sensor for older people, harnessing the capabilities of the ATmega32 microcontroller and the C programming language. With a keen focus on enhancing safety and well-being, the system efficiently detected instances of human falls through intelligent algorithms, triggering timely alerts through GSM.',
        refLink:'https://github.com/1997Thilina/smart-fall-detector-atmega32-',
        imageSource: project3, // Replace with actual image source
    },
    {
      title: 'Smart human fall detector',
      description: 'In this innovative project, I engineered a smart human fall detection system integrated with a heartbeat sensor for older people, harnessing the capabilities of the ATmega32 microcontroller and the C programming language. With a keen focus on enhancing safety and well-being, the system efficiently detected instances of human falls through intelligent algorithms, triggering timely alerts through GSM.',
      refLink:'https://github.com/1997Thilina/smart-fall-detector-atmega32-',
      imageSource: project3, // Replace with actual image source
  },
    
    // Add more project objects here
  ];

  return (
    <ScrollView contentContainerStyle={styles.container1}>
      <Text style={styles.heading}>My Works</Text>
      <View style={styles.container}>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          refLink={project.refLink}
          imageSource={project.imageSource}
        />
      ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom:100,
    flexWrap: 'wrap' ,
    flexDirection:"row",
    justifyContent:"space-evenly",
    //alignContent:'flex-start'
  },
  container1: {
   // padding: 20,
   // marginBottom:100,
    flex:1 ,
    flexDirection:"column",
    //justifyContent:"center",
    //alignItems:'center'
  },
  
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    flex:1,
    textAlign: 'center',
    marginBottom: 10,
    color:'#084155',
    
  },
});

export default ProjectsPage;
