import * as React from 'react';
import { TextInput, Text, setState, Pressable, ScrollView, View, Alert } from 'react-native';

const { styles } = require('../style');

class SignUpScreen extends React.Component {

        constructor() {
         
            super()
         
            this.state = {
         
                email: '', firstName: '', lastName: '', password: '', confirmPassword: '', city: ''
         
            }
         
          }
         
        UserRegistrationFunction = async () => {
         
          await fetch('http://10.0.0.178/cricketable/user_registration.php', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
          
              firstName: this.state.firstName,

              lastName: this.state.lastName,
          
              email: this.state.email,

              city: this.state.city,
          
              password: this.state.password
          
            })
          
          }).then((response) => response.text())
                .then((responseJson) => {
          
          // Showing response message coming from server after inserting records.
                  Alert.alert(responseJson);
          
                }).catch((error) => {
                  console.error(error);
                });
         
        }

    
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    // signUp = async () => {
    //     const { email, username, password, confirmPassword, city } = this.state
    //     try {
    //         console.log('user successfully signed up!: ', success)
    //     } catch (err) {
    //         console.log('error signing up: ', err)
    //     }
    // }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('email', val)}
                        
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='FirstName'
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('firstName', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='LastName'
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('lastName', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('confirmPassword', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='City'
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('city', val)}
                    />
                    <Pressable
                        onPress={this.UserRegistrationFunction}
                        style={styles.button}>
                        <Text style={[styles.invertText, styles.text]}>Sign Up</Text>
                    </Pressable>
                    <Text></Text>
                    <Text style={[styles.normalText, styles.text]}>Already Have an Account?</Text>
                    <Pressable onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}>
                        <Text style={[styles.link, styles.text]}>Login</Text>
                    </Pressable>
                </View>
            </ScrollView>
        )
    }
}

class LoginScreen extends React.Component {
    state = {
        email: '', password: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    login = async () => {
        const { email, password } = this.state
        try {
            // here place your signup logic
            console.log('user successfully logged in!: ', success)
        } catch (err) {
            console.log('error logging in: ', err)
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('email', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='#aaa'
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                    <Pressable
                        onPress={this.login}
                        style={styles.button}>
                        <Text style={[styles.invertText, styles.text]}>Login</Text>
                    </Pressable>
                    <Text></Text>
                    <Text style={[styles.normalText, styles.text]}>New Here?</Text>
                    <Pressable onPress={() => {
                        this.props.navigation.navigate('SignUp')
                    }}>
                        <Text style={[styles.link, styles.text]}>Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        );
    }
}

module.exports = {
    'SignUpScreen': SignUpScreen,
    'LoginScreen': LoginScreen,
}
