/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import Colors from '../constants/Colors';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5
} from '@expo/vector-icons'

import Login from '../screens/Login';
import RecipeScreen from '../screens/RecipeScreen'
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation( {
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Colors.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

      <Stack.Screen
      name="Home"
      component={MainTabNavigator}
      options= {{
        title: "Lett-us Eat!",
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 90,
            justifyContent: 'space-between',
            marginRight: 10}
            }>
            <FontAwesome5 name="user-alt" size={21} color={'white'} />
            <Octicons name="search" size={22} color={'white'} component={Login}/>
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
          </View>
        )
      }}
      />

      <Stack.Screen
        name="Recipes"
        component={RecipeScreen}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}
