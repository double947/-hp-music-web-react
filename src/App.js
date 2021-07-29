import React, { memo } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import routes from './router'

import { CoAppHeader, CoAppFooter } from 'components'

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CoAppHeader />
          {renderRoutes(routes)}
        <CoAppFooter />
      </BrowserRouter>
    </Provider>
  )
})
