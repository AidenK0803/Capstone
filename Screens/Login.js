import React, { useState } from 'react'
import { Input, Icon, Pressable, NativeBaseProvider, Button, Alert } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.config';

export const Login = ({navigation}) => {
  const [show, setShow] = React.useState(false);
  const [Email, onChangeEmail] = useState("");
  const [Password, onChangePassword] = useState("");

  function letSignup(){
    console.log("this is sigup....")
    navigation.navigate("Signup")
  } 

  function letLogin(){
    const auth = getAuth();
        signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Budget");
        console.log(user);
    })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert("Wrong password!!")
    })
}

  return (
  <NativeBaseProvider>
    <SafeAreaView>
    <Input onChangeText={onChangeEmail}
      value={Email}
      w={{ base: "75%",
      alignItems:"center",
      md: "25%"}} 
      InputLeftElement={<Icon as={<MaterialIcons name="person" />} 
      size={5} ml="2" color="muted.400"/>} 
      placeholder="Name" />
    <Input onChangeText={onChangePassword}
      value={Password}
      w={{ base: "75%",
      alignItems:"center",
      md: "25%"}} type={show ? "text" : "password"} 
      InputRightElement={<Pressable onPress={() => setShow(!show)}>
      <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
      size={5} mr="2" color="muted.400"/>
      </Pressable>} placeholder="Password" />
    <Button 
      style= {{alignSelf:'center',
      width: 120,
      size: "md"}}
      variant="subtle"
      colorScheme="secondary"
      onPress={(letLogin)}>
      Login
      </Button>
    <Button 
      style= {{alignSelf:'center',
      width: 120,
      size: "md"}}
      variant="subtle"
      colorScheme="secondary"
      onPress={(letSignup)}>
      Sign up
      </Button>
    </SafeAreaView>
  </NativeBaseProvider>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login