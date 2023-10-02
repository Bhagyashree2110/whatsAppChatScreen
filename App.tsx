import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ChatScreen from './resource/Screens/ChatScreen';

const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={'#fff'}
        barStyle={'dark-content'}
      />
        <NavigationContainer>
          <Stack.Navigator
          initialRouteName="ChatScreen"
            screenOptions={{
              headerShown: false,
              animation:"none"
            }}>
            <Stack.Screen name="ChatScreen" component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});