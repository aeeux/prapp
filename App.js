import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

// Screens
import { Home, ItemDetail} from "./screens/";
import { Text, View, StyleSheet, ActivityIndicator,  } from 'react-native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  }
};

const Stack = createStackNavigator();

const App = () => {
  return(
      <NavigationContainer theme={theme}>
          <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
              initialRouteName={'Home'}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: "center"
  },
  horizontal: {
    justifyContent: "space-around",
  }
});

export default () => {
  return <App />;
}