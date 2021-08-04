import React, { memo } from 'react'

import { CoThemeHeaderRecommend } from 'components'
import { HotRecommendWrapper } from './style'

export default memo(function CoHotRecommend() {
  return (
    <HotRecommendWrapper>
      <CoThemeHeaderRecommend title="热门推荐" keywords={['华语','流行', '摇滚', '民谣', '电子']} />
    </HotRecommendWrapper>
  )
})
