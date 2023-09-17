import { View, Text, StyleSheet} from 'react-native';

import { MEALS } from '../data/dummy-data';

function MealsOverview({ route }) {
    return (
        <View style={styles.container}>
            <Text>Meals OverView Screen</Text>
            <Text>{ route.params.categoryId }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});

export default MealsOverview;
