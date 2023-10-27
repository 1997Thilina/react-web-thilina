import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Image } from 'react-native';
import back1 from '../../assets/footer2.jpg';
import phone from '../../assets/phone-call.png';
import emailIcon from '../../assets/email.png';
import location from '../../assets/marker.png';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (!name || !email || !message) {
            Alert.alert('Please fill in all fields');
            return;
        }

        // You can implement the logic to send the email here
        // You might need to use a third-party library or API for this

        // Reset the form
        setName('');
        setEmail('');
        setMessage('');

        Alert.alert('Message sent successfully!');
    };

    return (
        <View style={styles.container0}>
            <Text style={styles.text}>Contact me</Text>
            <View style={styles.container}>
                <Image
                    source={{ uri: back1 }}
                    style={[styles.backgroundImage]}
                //resizeMode="contain"
                />
                <View style={styles.addressContainer}>
                    <Image
                        source={{ uri: phone }}
                        style={[styles.icon]}
                        
                    />
                    <Text style={styles.label}>+94771129694</Text>

                    <Image
                        source={{ uri: emailIcon }}
                        style={[styles.icon]}
                        
                    />
                    <Text style={styles.label}>madhushanthilina888@gmail.com</Text>

                    <Image
                        source={{ uri: location }}
                        style={[styles.icon]}
                        //resizeMode='stretch'
                    />
                    <Text style={styles.label}> Baduraliya
                    
                    {"\n"} Sri Lanka</Text>

                </View>

                <View style={styles.emailContainer}>
                    <Text style={styles.label}>Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Your Name"
                    />

                    <Text style={styles.label}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Your Email"
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Message:</Text>
                    <TextInput
                        style={styles.input}
                        value={message}
                        onChangeText={(text) => setMessage(text)}
                        placeholder="Your Message"
                        multiline
                        numberOfLines={4}
                    />

                    <Button title="Send Message" onPress={handleSendMessage} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container0: {
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        //backgroundColor:'red'

    },
    container: {
        padding: 10, margin: 10,
        //borderStartColor:'red',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        //alignItems:'center',
        shadowRadius: 10,
        width: '75%',
        elevation: 2,
        //backgroundColor:'red'

    },

    addressContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        width: 300,
        height: 400,
        minWidth:280,
        marginBottom:20,

    },

    emailContainer: {
        padding: 20,
        width: 300,
        height: 400
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#084155',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject, // Fill the entire container
        opacity: 0.3, // Adjust the opacity as needed


    },
    text: {

        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 20,
        //marginLeft:80,
        color: '#084155'
    },
    icon:{
        height:25,
        width:25,
        marginTop:40,
        marginBottom:20,
    }
});

export default ContactForm;
