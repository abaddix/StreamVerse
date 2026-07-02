import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConnectScreen from '../screens/Connect/ConnectScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import PlayerScreen from '../screens/Player/PlayerScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

export type RootStackParamList = {

  Connect: undefined;

  Home: undefined;

  Player: {
    channelId: string;
  };

  Search: undefined;

  Favorites: undefined;

  Settings: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {

  return (

    <Stack.Navigator

      initialRouteName="Connect"

      screenOptions={{

        headerShown:false,

        animation:"fade",

      }}

    >

      <Stack.Screen

        name="Connect"

        component={ConnectScreen}

      />

      <Stack.Screen

        name="Home"

        component={HomeScreen}

      />

      <Stack.Screen

        name="Player"

        component={PlayerScreen}

      />

      <Stack.Screen

        name="Search"

        component={SearchScreen}

      />

      <Stack.Screen

        name="Favorites"

        component={FavoritesScreen}

      />

      <Stack.Screen

        name="Settings"

        component={SettingsScreen}

      />

    </Stack.Navigator>

  );

}