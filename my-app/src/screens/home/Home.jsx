import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-web'

export default function Home({navigation}) {
  return (
    <>
        <View>
            <Text>My Home</Text>
            <Button
            title='Ir para detalhes'
            onPress={() => navigation.navigate("Details", {
                itemId: 86,
                otherParam: 'Anything you want here!'
            })}
            />
        </View>
    </>
  )
}
