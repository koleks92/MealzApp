import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/Categories';
import MealsOverview from './screens/MealsOverview';
import FavoritesScreen from './screens/Favorites';
import MealDetails from './screens/MealDetails';

import { CATEGORIES } from './data/dummy-data';
// import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    contentStyle: { backgroundColor: "#351401" },
    drawerContentStyle: { backgroundColor: "#351401"},
    drawerInactiveTintColor: "white",
    drawerActiveTintColor: "#351401",
    drawerActiveBackgroundColor: "#e4baa1"
    }}>
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
      title: 'All Categories',
      drawerIcon: ({color, size}) => <Ionicons name="list" color={color} size={size} />
    }}/>
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
      title: 'Favorites',
      drawerIcon: ({color, size}) => <Ionicons name="heart-outline" color={color} size={size} />
    }}/>
  </Drawer.Navigator>; 
};

export default function App() {
  return (
    <>
      {/* <FavoritesContextProvider> */} 
      <Provider store={store}>
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
      </Provider>
      {/* </FavoritesContextProvider> */}
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
