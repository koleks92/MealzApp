import { Text, View, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { useLayoutEffect } from 'react';

import Meal from '../models/meal';
import MealExtra from '../components/MealExtra';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';


function MealDetails ({ route, navigation }) {
    const item = route.params.item;

    function headerButtorPressHandler() {
        console.log("Yes!");
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: item.title,
            headerRight: () => {
                return <IconButton onPress={ headerButtorPressHandler } icon="heart-outline" color="white"/>
            }
        });
    }, [item.title, navigation, headerButtorPressHandler]);

    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: item.imageUrl }} style={styles.image}/>
            <Text style={styles.title}>{item.title}</Text>
            <MealExtra 
            affordability={item.affordability}
            complexity={item.complexity}
            duration={item.duration}
            style={styles.mealExtra}
            />
            <View style={styles.outerContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={item.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={item.steps}/>
            </View>
            </View>
        </ScrollView>
    )
};

export default MealDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#351401',
        marginBottom: 16
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
        color: 'white'
    },
    image: {
        width: '100%',
        height: 200,
        overflow: 'hidden',

    },
    mealExtra: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    outerContainer: {
        alignItems: 'center'
    }
    
})