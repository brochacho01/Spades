import { View, Text, StyleSheet } from 'react-native'
import StartButton from '../components/StartButton'

const StartScreen = () => {
    return (
        <View>
            <Text style = {styles.title}>
                Let's Play Spades
            </Text>
            <StartButton />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40
    }
})

export default StartScreen;