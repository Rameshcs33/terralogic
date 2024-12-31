import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Login from './screen/Login'

const App = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Login />
        </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }
})