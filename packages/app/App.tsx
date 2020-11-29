import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { common } from '@pkg/common'
import { controller } from '@pkg/controller'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsxadasdf to start working on your app! {common} {controller}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
