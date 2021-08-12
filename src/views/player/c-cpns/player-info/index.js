import React, { memo, useState, useCallback } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

import { getSongDetailAction } from 'views/player/store'
import { PlayerInfoWrapper } from './style'

export default memo(function CoPlayerInfo() {

  const [isSpread, setIsSpread] = useState(false)
  /* redux */
  const { currentSong, currentLyrics, isPlaying } = useSelector((state) => ({
    currentSong: state.getIn(['player', 'currentSong']),
    currentLyrics: state.getIn(['player', 'currentLyrics']),
    isPlaying: state.getIn(['player', 'isPlaying'])
  }), shallowEqual)

    /* hooks */
    const dispatch = useDispatch()

    /* other handle */
    const playMusic = useCallback((currentSong) =>{
      dispatch(getSongDetailAction(currentSong.id))
    }, [dispatch])

  const totalLyricCount = isSpread ? currentLyrics.length : 13

  return (
    <PlayerInfoWrapper isSpread={isSpread}>
      <div className="flex justify-between con">
        <div className="relative left-cover">
          <img className={classNames(isPlaying ? 'rotate-animate' : '')} src={currentSong.al && currentSong.al.picUrl} alt="" />
          <div className="absolute sprite_cover mask"></div>
        </div>
        <div className="flex flex-column right-info">
          <div className="flex flex-column song-info">
            <div className="flex items-center title">
              <div className="mr1 sprite_icon2 tag"></div>
              <div className="mr1 song-name">{currentSong.name}</div>
              <div className="sprite_icon2 mv"></div>
            </div>
            <div className="mt1 fs12 singer">
              <span className="lightGray">歌手：</span>
              <a href="/#" className="name">{(currentSong.ar && currentSong.ar[0].name) || '未知歌手'}</a>
            </div>
            <div className="mt1 fs12 album">
              <span className="lightGray">所属专辑：</span>
              <a href="/#" className="name">{currentSong.name}</a>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex mr1 player">
                <div className="flex justify-end items-center fs12 white pointer sprite_button play" onClick={() => { playMusic(currentSong) }}>{isPlaying ? '播放' : '暂停'}</div>
                <div className="sprite_button pointer add"></div>
              </div>
              <div className="relative mr1 sprite_button pointer border-bg ">
                <div className="flex justify-end items-center fs12 absolute fitH sprite_button favor">收藏</div>
              </div>
              <div className="relative mr1 sprite_button pointer border-bg ">
                <div className="flex justify-end items-center fs12 absolute fitH sprite_button share">分享</div>
              </div>
              <div className="relative mr1 sprite_button pointer border-bg ">
                <div className="flex justify-end items-center fs12 absolute fitH sprite_button download">下载</div>
              </div>
              <div className="relative mr1 sprite_button pointer border-bg ">
                <div className="flex justify-end items-center fs12 absolute fitH sprite_button comments"></div>
              </div>
            </div>
          </div>
          <div className="song-lyric">
            <div className="fs12 mt2 lyric">
              {
                currentLyrics.slice(0,totalLyricCount).map((item, index) => {
                  return (
                    <p key={item.time} className="mt1 text">{item.content}</p>
                  )
                })
              }
            </div>
            <div className="mt2 lyric-control" onClick={() => { setIsSpread(!isSpread) }}>
              { isSpread ? '收起' : '展开' }
              <i className="sprite_icon2"></i>
            </div>
          </div>
        </div>
      </div>
    </PlayerInfoWrapper>
  )
})
