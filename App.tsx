import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ecommerce from './src/Screen/ecommerce';


function App(){
  return(
   <AuthProvider>
     <AuthContext.Consumer>
   {(auth)=><NavigationContainer>
     {/* <stack.Navigator> */}
       {/* <stack.Screen name="MAD(A)" component={HomeScreen}/>
       <stack.Screen name="List Of Products" component={ListScreen}/>
       <stack.Screen name="Counter" component={CounterScreen}/>
       <stack.Screen name="SignIn" component={LoginScreen}/> */}
       {auth?.isLoggedIn? <CounterScreen/> : <AuthStackScreens/>}
     {/* </stack.Navigator> */}
   </NavigationContainer>}
   </AuthContext.Consumer>
   </AuthProvider>
  )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
