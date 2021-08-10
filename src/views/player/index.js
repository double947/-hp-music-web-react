import React, { memo } from 'react'

import { CoPlayerComment, CoPlayerInfo, CoPlayerRelevant, CoPlayerSongs } from './c-cpns'
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function CoPlayer() {
  return (
    <PlayerWrapper>
      <div className="content">
      <PlayerLeft>
        <CoPlayerInfo />
        <CoPlayerComment />
      </PlayerLeft>
      <PlayerRight>
        <CoPlayerSongs />
        <CoPlayerRelevant />
      </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
