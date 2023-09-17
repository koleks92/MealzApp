import { View, Pressable, Text, Image, StyleSheet, Platform} from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
    return (
    <View style={styles.mealItem}>
        <Pressable 
        android_ripple={{color:'#ccc'}} 
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsText}>{duration}m</Text>
                    <Text style={styles.detailsText}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsText}>{affordability.toUpperCase()}</Text>
                </View>
            </View>
        </Pressable>
    </View>
    )
};

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        padding: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailsText: {
        padding: 4
    },
    buttonPressed: {
        opacity: 0.5,
    },  
})