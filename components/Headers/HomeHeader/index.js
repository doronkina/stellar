import { BASE_URL } from '@env'
import React from 'react'
import { observer } from 'startupjs'
import { View, Text, Image, Linking } from 'react-native'
import './index.styl'

export default observer(() => {
    return pug`
        View.header
            Image.logo(source={ uri: BASE_URL + '/logo.jpg' })
            Text.title Stellar
            Text.text Just another free, fully responsive site template built by 
                Text.link(onPress=() => Linking.openURL('https://twitter.com/ajlkn')) @ajlkn 
                Text for 
                Text.link(onPress=() => Linking.openURL('https://html5up.net/')) HTML5 UP
                Text .
    `
})