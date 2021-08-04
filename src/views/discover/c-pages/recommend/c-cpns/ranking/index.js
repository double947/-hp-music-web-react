import React, { memo } from 'react'

import { CoThemeHeaderRecommend } from 'components'
import { CoRankingWrapper } from './style'

export default memo(function CoRanking() {
  return (
    <CoRankingWrapper>
      <CoThemeHeaderRecommend title="榜单" />
    </CoRankingWrapper>
  )
})
