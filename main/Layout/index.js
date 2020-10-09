import React from 'react'
import { observer } from 'startupjs'
import './index.styl'
import { ScrollView, View } from 'react-native'
import { FooterComponent } from 'components'
import APP from '../../app.json'

export default observer(function ({ children }) {

  return pug`
    ScrollView.wrapper
      View.container
        React.Fragment= children
        FooterComponent
  `
})
