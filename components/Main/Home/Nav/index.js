import React from 'react'
import { observer } from 'startupjs'
import { View, Text, TouchableOpacity } from 'react-native'
import './index.styl'

export default observer(() => {
    const [activeItem, setActiveItem] = React.useState(1)
    const active = item => {
        if (item === activeItem) return 'active'
        
        return false
    }

    return pug`
        View.nav
            TouchableOpacity.navItem(styleName=['first', active(1)] onPress=() => setActiveItem(1))
                Text.navText Introduction
            TouchableOpacity.navItem(styleName=active(2) onPress=() => setActiveItem(2))
                Text.navText First Section
            TouchableOpacity.navItem(styleName=active(3) onPress=() => setActiveItem(3))
                Text.navText Second Section
            TouchableOpacity.navItem(styleName=active(4) onPress=() => setActiveItem(4))
                Text.navText Get Started
    `
})