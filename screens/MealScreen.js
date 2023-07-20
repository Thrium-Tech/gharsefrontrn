import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppHeader from '../components/AppHeader'

const MealScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <AppHeader navigation={navigation} />
            <View style={styles.upperPart}>
                <View style={styles.imageContainer}>
                    <Image />
                </View>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Western BBQ Cheeseburger Meal</Text>
                </View>
            </View>
        </View>
    )
}

export default MealScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperPart: {
        paddingHorizontal: 20,
    },
    headingContainer: {
        width: '100%',
        height: 170,
        borderColor: 'black',
        borderWidth: 1,
    },
    heading: {
        fontFamily: 'Manrope-Regular',
        fontSize: 32,
    },
})