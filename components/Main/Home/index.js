import React from 'react'
import { observer, emit } from 'startupjs'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import HomeNav from './Nav'
import './index.styl'

export default observer(() => {
    const features = [
        {
            id: '1',
            modifiers: 'first',
            icon: faTable,
            iconColor: 'pinkIcon',
            title: 'Ipsum consequat',
            text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
        },
        {
            id: '2',
            modifiers: false,
            icon: faTable,
            iconColor: 'violetIcon',
            title: 'Amed sed feugiat',
            text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
        },
        {
            id: '3',
            modifiers: 'last',
            icon: faTable,
            iconColor: 'blueIcon',
            title: 'Dolor nullam',
            text: 'Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.'
        }
    ]
    const statistics = [
        {
            id: '1',
            modifiers: 'first pink',
            icon: faTable,
            value: '5,120',
            text: 'Etiam'
        },
        {
            id: '2',
            modifiers: 'purple',
            icon: faTable,
            value: '8,192',
            text: 'Magna'
        },
        {
            id: '3',
            modifiers: 'violet',
            icon: faTable,
            value: '2,048',
            text: 'Tempus'
        },
        {
            id: '4',
            modifiers: 'skyBlue',
            icon: faTable,
            value: '4,096',
            text: 'Aliquam'
        },
        {
            id: '5',
            modifiers: 'last blue',
            icon: faTable,
            value: '1,024',
            text: 'Nullam'
        }
    ]

    return pug`
        View.main
            HomeNav
            View.section(styleName='first')
                View.introImgContainer
                    Image.introImg(source={ uri: 'https://html5up.net/uploads/demos/stellar/images/pic01.jpg' })
                View.introContent
                    Text.sectionTitle(styleName='introTitle') Ipsum sed adipiscing
                    Text.sectionHr(styleName='introHr')
                    Text.sectionText(styleName='introText') Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.
                    TouchableOpacity.btn(styleName='introBtn' onPress=() => emit('url', '/more'))
                        Text.btnText Learn More
            View.section
                Text.sectionTitle Magna veroeros
                Text.sectionHr
                View.features
                    each feature in features
                        View.feature(styleName=feature.modifiers key=feature.id)
                            View.featureIconContainer
                                View.featureIcon
                                    FontAwesomeIcon(styleName=feature.iconColor icon=feature.icon size=72)
                            Text.featureTitle #{feature.title}
                            Text.featureText #{feature.text}
                TouchableOpacity.btn(styleName='sectionBtn' onPress=() => emit('url', '/more'))
                    Text.btnText Learn More
            View.section
                Text.sectionTitle Ipsum consequat
                Text.sectionHr
                Text.sectionText(styleName='subtitle') Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
                View.statistics
                    each statistic in statistics
                        View.statistic(styleName=statistic.modifiers key=statistic.id)
                            FontAwesomeIcon.statisticIcon(icon=statistic.icon size=72)
                            Text.statisticValue #{statistic.value}
                            Text.statisticText #{statistic.text}
                Text.sectionText(styleName='justifyText') Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.
                TouchableOpacity.btn(styleName='sectionBtn' onPress=() => emit('url', '/more'))
                    Text.btnText Learn More
            View.section
                Text.sectionTitle Congue imperdiet
                Text.sectionHr
                Text.sectionText(styleName='subtitle') Donec imperdiet consequat consequat. Suspendisse feugiat congue posuere. Nulla massa urna, fermentum eget quam aliquet.
                View.btnsGroup
                    TouchableOpacity.btn(onPress=() => emit('url', '/more'))
                        Text.btnText Learn More
                    TouchableOpacity.btn(styleName='blue next' onPress=() => emit('url', '/more'))
                        Text.btnText(styleName='light') Learn More
    `
})