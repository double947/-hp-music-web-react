import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'

import store from './store'
import routes from './router'

import { CoAppHeader, CoAppFooter } from 'components'
import AppPlayerBar from 'views/player/app-player-bar'

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CoAppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <CoAppFooter />
        <AppPlayerBar />
      </BrowserRouter>
    </Provider>
  )
})
