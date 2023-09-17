import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriesScreen from './screens/Categories';
import MealsOverview from './screens/MealsOverview';

import { CATEGORIES } from './data/dummy-data';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          contentStyle: { backgroundColor: "#b8b8b8" }
        }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{
            title: "Categories",
          }}/>
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverview} 
          
          // options={({ route, navigation }) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: route.params.categoryId
          //   };
          // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light'/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
