import React from 'react'
import { observer } from 'startupjs'
import { HomeHeaderComponent, HomeComponent } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    React.Fragment
      HomeHeaderComponent
      HomeComponent
  `
})
