import React, { memo } from 'react'

import { CoHotAlbum, CoTopAlbum } from './c-cpns'
import { AlbumWrapper } from './style'

export default memo(function CoAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <CoHotAlbum/>
      <CoTopAlbum/>
    </AlbumWrapper>
  )
})
