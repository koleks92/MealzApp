import { View, FlatList, StyleSheet} from 'react-native';
import { useLayoutEffect } from 'react';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

function MealsOverview({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id == catId).title;
        navigation.setOptions({
            title: categoryTitle
        });
    
    }, [catId, navigation]);

    
    return <MealsList items={displayedMeals} navigation={navigation}/>

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#b8b8b8'
    }
});

export default MealsOverview;
