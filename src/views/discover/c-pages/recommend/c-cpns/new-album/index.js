import React, { memo } from 'react'

import { CoThemeHeaderRecommend } from 'components'
import { CoNewAlbumWrapper } from './style'

export default memo(function CoNewAlbum() {
  return (
    <CoNewAlbumWrapper>
      <CoThemeHeaderRecommend title="新碟上架" />
    </CoNewAlbumWrapper>
  )
})
