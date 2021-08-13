import React, { memo } from 'react'

import { CoArtistCategory, CoArtistList } from './c-cpns'
import { CoArtistWrapper } from './style'

export default memo(function CoArtist() {
  return (
    <CoArtistWrapper>
      <div className="content wrap-v2">
        <CoArtistCategory/>
        <CoArtistList/>
      </div>
    </CoArtistWrapper>
  )
})
