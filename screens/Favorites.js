import { useContext } from 'react';
import { Text, View, StyleSheet} from 'react-native';
// import { FavoritesContext } from '../store/context/favorites-context';

import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';

function FavoritesScreen({ navigation }) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)


    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.textStyle}>You have no favorite meals yet :(</Text>
            </View>
        )
    }

    return <MealsList items={favoriteMeals} navigation={navigation}/>
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b8b8b8'
    },
    textStyle : {
        fontSize: 18,
        fontWeight: 'bold'
    }
})