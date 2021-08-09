import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Slider } from 'antd'

import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from './style'
import { getSongDetailAction } from '../store/actionCreators'

export default memo(function AppPlayerBar() {

  /* redux */
  const dispatch = useDispatch()
  /* hooks */
  useEffect(() => {
    dispatch(getSongDetailAction(1330348068))
  }, [dispatch])
  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="flex justify-center items-center content ">
        <Control className="flex justify-around items-center pt1 control">
          <div className="sprite_player prev"></div>
          <div className="sprite_player play"></div>
          <div className="sprite_player next"></div>
        </Control>
        <PlayInfo className="flex items-center pt1 play-info">
          <div className="relative image">
            <a href="/#">
              <img src="https://p2.music.126.net/dbjj-8NjSIoRBbU06uKuKQ==/109951166220976693.jpg?param=34y34" alt="" />
            </a>
            <div className="sprite_player cover"></div>
          </div>
          <div className="flex flex-column info">
            <div className="flex fs12 song">
              <div className="mr1 song-name">说了再见</div>
              <a href="/#" className="singer-name">周杰伦</a>
            </div>
            <div className="flex progress">
              <Slider defaultValue={30} />
              <div className="flex items-center fs12 ml1 time">
                <span className="time-now">03:00</span>
                <span className="divider">/</span>
                <span className="time-total">03:00</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator className="flex operator pt1">
          <div className="flex items-end action">
            <div className="sprite_player mr1 btn favor"></div>
            <div className="sprite_player btn share"></div>
          </div>
          <div className="flex items-end play-control">
            <div className="sprite_player mr1 btn vol"></div>
            <div className="sprite_player mr1 btn loop"></div>
            <div className="flex items-center pl3 fs12 sprite_player btn lyric">6</div>
          </div>
        </Operator>
      </div>
    </AppPlayerBarWrapper>
  )
})
