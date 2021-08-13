import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { CoPlayerComment, CoPlayerInfo, CoPlayerRelevant, CoPlayerSongs } from './c-cpns'
import { getSongDetailAction } from './store'
import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function CoPlayer() {

  const dispatch = useDispatch()
  useEffect(() => {
    let currentSongId = null
    try {
      currentSongId = JSON.parse(localStorage.getItem('currentSong')).id
    } catch (err) {
      console.log(err)
    }
    if (!currentSongId) return
    dispatch(getSongDetailAction(currentSongId))
  }, [dispatch])
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
