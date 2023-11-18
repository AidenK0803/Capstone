import React from 'react'
import { TextInput, Button } from 'react-native-web';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';

export const Signup = ({navigation}) => {
  const [Email, onChangeEmail] = useState("");
  const [Password, onChangePassword] = useState("");

  function createNewaccount() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("Budget");
            console.log(user);
          })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
      })};
  
  return (
      <SafeAreaView>
          <TextInput
           style={styles.input}
           onChangeText={onChangeEmail}
           value={Email}
           placeholder="Email"
          />
          <TextInput
           style={styles.input}
           onChangeText={onChangePassword}
           value={Password}
           placeholder="Password"
          />
          <Button onPress={(createNewaccount)} title='Sign in'/>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Signup