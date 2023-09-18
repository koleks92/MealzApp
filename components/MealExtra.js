import { View, Text, StyleSheet} from 'react-native';

function MealExtra({ duration, complexity, affordability, style }) {
    return (
        <View style={[styles.details]}>
                    <Text style={[styles.detailsText, style]}>{duration}m</Text>
                    <Text style={[styles.detailsText, style]}>{complexity.toUpperCase()}</Text>
                    <Text style={[styles.detailsText, style]}>{affordability.toUpperCase()}</Text>  
        </View>
    )
};

export default MealExtra;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailsText: {
        padding: 4
    },
});