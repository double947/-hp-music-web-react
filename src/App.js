import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter, BrowserRouter } from 'react-router-dom'

import routes from './router'

import { CoAppHeader, CoAppFooter } from 'components'

export default memo(function App() {
  return (
    <BrowserRouter>
      <CoAppHeader />
      {renderRoutes(routes)}
      <CoAppFooter />
    </BrowserRouter>
  )
})
