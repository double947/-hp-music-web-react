import React, { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { getSongDetailAction } from 'views/player/store'
import { getSizeImage } from 'utils/format-utils'
import { TopRankingWrapper } from './style'

export default memo(function CoTopRanking(props) {
  const { source } = props
  const { tracks = [] } = source

  /* hooks */
  const dispatch = useDispatch()

  /* other handle */
  const playMusic = useCallback((item) =>{
    dispatch(getSongDetailAction(item.id))
  }, [dispatch])

  return (
    <TopRankingWrapper>
      <div className="flex header">
        <div className="relative img-cover">
          <img src={getSizeImage(source.coverImgUrl, 80)} alt="" />
          <a href="/" className="image_cover">ranking</a>
        </div>
        <div className="flex flex-column user-action">
          <a href="/" className="bold black">{source.name}</a>
          <div className="flex mt1">
            <div className="mr1 btn play sprite_02"></div>
            <div className="btn favor sprite_02"></div>
          </div>
        </div>
      </div>
      <div className="ranking">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="flex items-center px2 ranking-item">
                <div className="flex justify-center fs16 rank">{index+1}</div>
                <div className="flex justify-between info">
                  <div className="fs12 text-nowrap song-name" title={item.name}>{item.name}</div>
                  <div className="flex items-center actions">
                    <div className="btn mr1 sprite_02 play" onClick={() => { playMusic(item) }}></div>
                    <div className="btn mr1 sprite_icon2 addto"></div>
                    <div className="btn sprite_02 favor"></div>
                  </div>
                </div>
              </div>
            )
          })
        }
      <div className="flex items-center justify-end fs12 pr3 more"><a href="/">查看全部 &gt;</a></div>
      </div>
    </TopRankingWrapper>
  )
})
