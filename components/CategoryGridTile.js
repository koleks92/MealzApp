import { View, Pressable, Text, StyleSheet, Platform} from 'react-native';

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
            android_ripple={{color: '#cccccc'}}
            style={({ pressed }) => [styles.pressableContainer, pressed ? styles.buttonPressed : null]}
            onPress={onPress}>
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        backgroundColor: 'white',
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    pressableContainer: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },  
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#7a7a7a"
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});