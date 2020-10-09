import React from 'react'
import { observer } from 'startupjs'
import { HeaderComponent, MoreComponent } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    React.Fragment
      HeaderComponent
      MoreComponent
  `
})