import React from 'react';
import { View, Text, Image, StyleSheet, Linking ,TouchableOpacity} from 'react-native';
import gitIcon from '../../assets/github.jpg'

interface ProjectCardProps {
  title: string;
  description: string;
  refLink:string;
  imageSource: any; // Replace with actual image source
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description,refLink, imageSource }) => {
  
  const handleImageClick = () => {

    Linking.openURL(refLink);
  };
  return (
    <View style={styles.card}>
      <Image source={{ uri: imageSource }} style={styles.image} resizeMode="cover" />
      <View style={styles.headContent}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>

        </View>
        <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleImageClick}>
        <Image
          source={{uri:gitIcon}}
          style={styles.gitImage}
        />
        </TouchableOpacity>

        </View>
        
      </View>

      <View style={styles.cardContent}>
      <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    //flex:1,
    //flexDirection:'column',
    borderRadius: 10,
    height:270,
    width:300,
    elevation: 3,
    shadowRadius:10,
    marginBottom: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    opacity: 0.4, // Adjust the opacity as needed
    borderRadius: 10,
  },
  headContent: {
    padding: 10,
    paddingRight:1,
    flex:1,
    flexDirection:'row',
    
  },
  imageContainer: {
    padding: 5,
    //justifyContent:'flex-end'
    //flex:1,
    //flexDirection:'row'
  },
  titleContainer: {
    padding: 5,
    width:'70%'
    //flex:1,
    //flexDirection:'row'
  },
  gitImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    
  }, 
  cardContent: {
    padding: 15,
    flex:4,
    //flexDirection:'row'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  description: {
    fontSize: 13,
    //color: '#666',
  },
});

export default ProjectCard;
