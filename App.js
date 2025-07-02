// App.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const screenStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#D3D3D3', // light grey
};

const textStyle = {
  color: '#000000', // black font
  fontSize: 20,
  marginBottom: 20,
};

function ScreenComponent({ navigation, title, nextScreen }) {
  return (
    <View style={screenStyle}>
      <Text style={textStyle}>{title}</Text>
      {nextScreen && (
        <Button
          title={`Go to ${nextScreen}`}
          onPress={() => navigation.navigate(nextScreen)}
          color="#000"
        />
      )}
    </View>
  );
}

function Page1({ navigation }) {
  return <ScreenComponent navigation={navigation} title="Page 1" nextScreen="Page2" />;
}
function Page2({ navigation }) {
  return <ScreenComponent navigation={navigation} title="Page 2" nextScreen="Page3" />;
}
function Page3({ navigation }) {
  return <ScreenComponent navigation={navigation} title="Page 3" nextScreen="Page4" />;
}
function Page4({ navigation }) {
  return <ScreenComponent navigation={navigation} title="Page 4" nextScreen="Page5" />;
}
function Page5({ navigation }) {
  return <ScreenComponent navigation={navigation} title="Page 5" nextScreen={null} />;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
        <Stack.Screen name="Page4" component={Page4} />
        <Stack.Screen name="Page5" component={Page5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
