import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const StartButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(true);
    }

    const handleRelease = () => {
        alert('Button Pressed!');
        setIsPressed(false);
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={isPressed ? styles.buttonIn : styles.buttonOut} 
                onPressIn={handlePress} 
                onPressOut={handleRelease}
            >
                <Text
                    style={isPressed? styles.textIn : styles.textOut}
                >
                    Start
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    buttonOut: {
        width: 70,
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonIn: {
        width: 70,
        height: 30,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'black',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textIn: {
        color: 'white'
    },
    textOut: {
        color: 'black'
    }
})

export default StartButton