import React from 'react'
import { observer } from 'startupjs'
import { View, Text } from 'react-native'
import './index.styl'

export default observer(() => {
    return pug`
        View.header
            Text.title Generic
            Text.text Ipsum dolor sit amet nullam
    `
})