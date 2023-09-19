import { useContext } from 'react';
import { Text, View} from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function FavoritesScreen({ navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id));

    return <MealsList items={favoriteMeals} navigation={navigation}/>
};

export default FavoritesScreen;