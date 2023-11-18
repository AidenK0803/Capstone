import React from 'react'
import { Center, NativeBaseProvider, Image, Text, Spacer } from 'native-base'

const Profile = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Image size={100} borderRadius={100} source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg"
        }} alt="Alternate Text" />
      <Text>Name</Text>
      <Text>Email</Text>
      </Center>
      <Text>--------------------------------------------------------------</Text>
      <Text>Contect</Text>
      <Text underline color={"red.600"}>Reset</Text>
      <Text underline color={"red.600"}>Log out</Text>
    </NativeBaseProvider>
  )
}

export default Profile