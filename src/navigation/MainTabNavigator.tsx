/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Login from '../screens/Login';
import InputListScreen from '../screens/InputListScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../../types';

const BottomTab = createMaterialTopTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        activeTintColor: Colors.dark.text,
        style: {
          backgroundColor: Colors[colorScheme].tint
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        labelStyle: {
          fontWeight: 'bold',
        },
        showIcon: true,
      }}>
        <BottomTab.Screen
          name="Camera"
          component={TabTwoNavigator}
          options={{
            tabBarIcon: ({ color }) => <Fontisto name="camera" color='white' size={18} />,
            tabBarLabel: () => null
          }}
        />
      {/* <BottomTab.Screen
        name="Login"
        component={Login}
      /> */}
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="InputListScreen"
        component={InputListScreen}
        options={{ headerTitle: '', headerShown: false }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title', headerShown: false }}
      />
    </TabTwoStack.Navigator>
  );
}
