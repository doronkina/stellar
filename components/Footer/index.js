import React from 'react'
import { observer, emit } from 'startupjs'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(() => {
    return pug`
        View.footer
            View.section(styleName='first')
                Text.title Aliquam sed mauris
                Text.text Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.
                TouchableOpacity.btn(onPress=() => emit('url', '/more'))
                    Text.btnText Learn More
            View.section
                Text.title Etiam feugiat
                View.contactRow(styleName='first')
                    Text.contactType Address
                    Text.contact 1234 Somewhere Road • Nashville, TN 00000 • USA
                View.contactRow
                    Text.contactType Phone
                    Text.contact (000) 000-0000 x 0000
                View.contactRow
                    Text.contactType Email
                    Text.contact(styleName='link') information@untitled.tld
                View.soc
                    View.socItem(styleName='first')
                        FontAwesomeIcon.socIcon(icon=faTable size=24)
                    View.socItem
                        FontAwesomeIcon.socIcon(icon=faTable size=24)
                    View.socItem
                        FontAwesomeIcon.socIcon(icon=faTable size=24)
                    View.socItem
                        FontAwesomeIcon.socIcon(icon=faTable size=24)
                    View.socItem
                        FontAwesomeIcon.socIcon(icon=faTable size=24)
            View.section(styleName='last')
                Text.copy © Untitled. Design: 
                    Text.link(onPress=() => Linking.openURL('https://html5up.net/')) HTML5 UP
                    Text . Demo Images: 
                    Text.link(onPress=() => Linking.openURL('https://unsplash.com/')) Unsplash
                    Text .
    `
})