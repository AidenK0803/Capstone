import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth } from "firebase/auth";

import Bills from "./Screens/Bills"
import Budget from "./Screens/Budget"
import Chart from "./Screens/Chart"
import Profile from "./Screens/Profile"
import Login from "./Screens/Login"
import Signup from "./Screens/Signup"

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()



export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Budget"
          component={HomeTabs}
          options={{headerShown: false}}
          screenOptions={{headerBackVisible:false}}
          />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
      name="Budget"
      component={Budget}
      />
      <Tab.Screen
      name="Chart"
      component={Chart}
      />
      <Tab.Screen
      name="Profile"
      component={Profile}
      />
      <Tab.Screen
      name="Bills"
      component={Bills}
      />
    </Tab.Navigator>
  )
}