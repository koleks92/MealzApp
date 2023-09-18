import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';
import { View, Text, FlatList, StyleSheet} from 'react-native';



function CategoriesScreen ({ navigation }) {
    function renderCategoryItem(itemData) {
        function onPressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                
            });
        };
    
        return (<CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>)
    };


    return (
        <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        style={ styles.container }
        />
    )
};

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#b8b8b8'
    }
})