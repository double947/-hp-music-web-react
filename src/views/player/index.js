import React, { memo } from 'react'

import { CoPlayerComment, CoPlayerInfo, CoPlayerRelevant, CoPlayerSongs } from './c-cpns'
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function CoPlayer() {

  return (
    <PlayerWrapper>
      <div className="flex wrap-v2 content">
      <PlayerLeft>
        <CoPlayerInfo />
        <CoPlayerComment />
      </PlayerLeft>
      <PlayerRight>
        <CoPlayerRelevant />
        <CoPlayerSongs />
      </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
