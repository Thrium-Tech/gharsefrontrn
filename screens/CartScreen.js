import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Animated, PanResponder } from 'react-native'
import React, { useState, useRef } from 'react'
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AppHeader from '../components/AppHeader'

const CartScreen = ({ navigation }) => {

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: pan.x }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gestureState) => {
                if (gestureState.dx < -100) {
                    // Swipe threshold for deletion, you can adjust this value as needed.
                    deleteItem(); // Call your function to handle the deletion here
                } else {
                    Animated.spring(pan, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
            },
        })
    ).current;

    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const deleteItem = () => {
        // Implement your logic to delete the item here
        console.log('Item deleted');
    };

    return (
        <View style={styles.container} >
            <AppHeader navigation={navigation} />
            <View style={styles.swipeContainer}>
                <MaterialIcons name="swipe" size={18} color="black" />
                <Text style={styles.swipeText} >swipe on an item to delete</Text>
            </View>
            <ScrollView style={styles.ScrollViewStyles} contentContainerStyle={styles.ScrollViewContainer} >
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../assets/vegTomatoMix.png')} />
                    </View>
                    <View style={{ paddingLeft: 8 }}  >
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.labelText}>Veggie tomato mix</Text>
                        </View>
                        <View>
                            <Text style={styles.priceText}>₹500</Text>
                        </View>
                    </View>
                    <View style={styles.orderCountContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.count}>{count}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../assets/vegTomatoMix.png')} />
                    </View>
                    <View style={{ paddingLeft: 8 }}  >
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.labelText}>Veggie tomato mix</Text>
                        </View>
                        <View>
                            <Text style={styles.priceText}>₹500</Text>
                        </View>
                    </View>
                    <View style={styles.orderCountContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.count}>{count}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require('../assets/vegTomatoMix.png')} />
                    </View>
                    <View style={{ paddingLeft: 8 }}  >
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.labelText}>Veggie tomato mix</Text>
                        </View>
                        <View>
                            <Text style={styles.priceText}>₹500</Text>
                        </View>
                    </View>
                    <View style={styles.orderCountContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.count}>{count}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Animated.View
                    style={[styles.card, { transform: [{ translateX: pan.x }], flexDirection: 'row', alignItems: 'center', position: 'relative' }]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../assets/vegTomatoMix.png')} />
                        </View>
                        <View style={{ paddingLeft: 8 }}  >
                            <View style={styles.cardTextContainer}>
                                <Text style={styles.labelText}>Veggie tomato mix</Text>
                            </View>
                            <View>
                                <Text style={styles.priceText}>₹500</Text>
                            </View>
                        </View>
                        <View style={styles.orderCountContainer}>
                            <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                                <Text style={styles.buttonText}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.count}>{count}</Text>
                            <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                                <Text style={styles.buttonText}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={{ position: 'absolute', right: - 50, height: 40, width: 40, backgroundColor: '#FFA41B', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <FontAwesome name="heart-o" size={24} color="#fff" />
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
    swipeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    swipeText: {
        fontFamily: 'WorkSans-Regular',
        fontSize: 10,
        marginLeft: 4,
    },
    ScrollViewStyles: {
        paddingHorizontal: 30,
        marginVertical: 20,
    },
    cardContainer: {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 25,
        alignItems: 'center',
        borderColor: '#EFF2F5',
        borderWidth: 1,
    },
    cardTextContainer: {
        width: '100%',
    },
    labelText: {
        color: '#002B5B',
        fontFamily: 'Manrope-Medium',
        fontSize: 16,
    },
    priceText: {
        color: '#002B5B',
        fontFamily: 'Manrope-Medium',
        fontSize: 14,

    },
    orderCountContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F86F03',
        width: 60,
        height: 25,
        borderRadius: 20,
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 10,
        right: 20,
    },
    button: {
        padding: 5,
    },
    buttonText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    count: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
})