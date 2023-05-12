import React from 'react'
import { Button, Text, View } from 'react-native-web'

export default function Details({navigation, route}) {

    const { itemId, otherParam } = route.params;

  return (
    <View>
        <Text>Details</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
        title="Ir para detalhes novamente"
        onPress={() => navigation.push("Details", {
            itemId: 86,
            otherParam: 'Anything you want here!'
        })}
        />
        <Button
        title="Voltar"
        onPress={() => navigation.goBack()}
        />
        <Button
        title="Voltar para home"
        onPress={() => navigation.popToTop()}
        />
    </View>
  )
}
