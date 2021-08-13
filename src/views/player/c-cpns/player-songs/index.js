import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSimiSongsAction } from '../../store/actionCreators'

import { PlayerSongsWrapper, SimiSongItemWrapper } from './style'


const SimiSongItem = memo(function SingerItem(props) {
  const { source } = props
  const [ artists ] = source.artists
  console.log(artists)
  return (
    <SimiSongItemWrapper className="flex justify-between items-center mt2">
      <div className="flex flex-column info-left">
        <div className="fs12 song">{source.name}</div>
        <div className="fs12 lightGray artist">{artists.name}</div>
      </div>
      <div className="flex flex-between info-right">
        <div className="sprite_icon3 pointer play"></div>
        <div className="sprite_icon3 ml2 pointer add"></div>
      </div>
    </SimiSongItemWrapper>
  )
})

export default memo(function CoPlayerSongs() {

  const dispatch = useDispatch()
  const { simiSongs } = useSelector((state) => ({
    simiSongs: state.getIn(['player', 'simiSongs'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getSimiSongsAction())
  }, [dispatch])
  return (
    <PlayerSongsWrapper>
      <div className="flex justify-between fitW pt2 pb1 header">
        <div className="bold fs12 title">相似歌曲</div>
      </div>
      {
        simiSongs.map((item, index) => {
          return (
            <SimiSongItem key={item.id} source={item} />
          )
        })
      }
    </PlayerSongsWrapper>
  )
})
