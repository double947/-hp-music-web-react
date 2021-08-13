import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'


import { getSimiPlayListAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'
import { PlayerRelevantWrapper, PlayerRelevantItemWrapper } from './style'

const RelevantSongItem = memo(function SingerItem(props) {
  const { source } = props
  const { creator } = source
  return (
    <PlayerRelevantItemWrapper className="flex mt2">
      <img src={getSizeImage(source.coverImgUrl, 50)} alt={creator.nickName} />
      <div className="flex flex-column pl2 text-nowrap info">
        <a href="/#" className="bold fs12 mt1 black text-nowrap name">{creator.signature}</a>
        <div className="fs12 text-nowrap mt1 desc">{creator.nickname || "相似歌单"}</div>
      </div>
    </PlayerRelevantItemWrapper>
  )
})


export default memo(function CoPlayerRelevant() {
    /* state */

  /* redux */
  const { simiPlayList } = useSelector((state) => ({
    simiPlayList: state.getIn(['player', 'simiPlayList'])
  }), shallowEqual)
  const dispatch = useDispatch()
  /* hooks */
  useEffect(() => {
    dispatch(getSimiPlayListAction())
  }, [dispatch])

  return (
    <PlayerRelevantWrapper>
      <div className="flex justify-between fitW pt2 pb1 header">
        <div className="bold fs12 title">包含这首歌的歌单</div>
      </div>
      {
        simiPlayList.map((item, index) => {
          return (
            <RelevantSongItem key={item.id} source={item} />
          )
        })
      }
    </PlayerRelevantWrapper>
  )
})
