import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/Categories';
import MealsOverview from './screens/MealsOverview';
import FavoritesScreen from './screens/Favorites';

import { CATEGORIES } from './data/dummy-data';
import MealDetails from './screens/MealDetails';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    contentStyle: { backgroundColor: "#351401" }
    }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} />
  </Drawer.Navigator>; 
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#351401" }
        }}>
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{
            headerShown: false
          }}/>
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverview} 
          />
          <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
