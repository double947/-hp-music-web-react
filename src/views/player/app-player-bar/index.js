import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Slider } from 'antd'
import dayjs from 'dayjs'

import { AppPlayerBarWrapper, Control, PlayInfo, Operator } from './style'
import { getSongDetailAction } from '../store/actionCreators'
import { getSizeImage, getPlayUrl } from 'utils/format-utils'

export default memo(function AppPlayerBar() {
  /* state */
  const [duration, setDuration] = useState(0)  // 歌曲总时长
  const [currentTime, setCurrentTime] = useState(0) // 歌曲播放的当前时间点
  const [progress, setProgress] = useState(0)  // 歌曲进度
  const [isChanging, setIsChanging] = useState(false) // 是否正在手动改变进度条

  /* redux */
  const dispatch = useDispatch()
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(['player', 'currentSong'])
  }), shallowEqual)
  /* hooks */
  const playerRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(1330348068))
    setDuration(currentSong.dt)
  }, [dispatch, currentSong.dt])

  /* other handel */
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const currentProgress = currentTime / duration * 100
  
  /* other function */
  const playMusic = () => {
    playerRef.current.src = getPlayUrl(currentSong.id)
    playerRef.current.play()
  }
  const timeUpdate = (e) => {
    setCurrentTime(e.target.currentTime * 1000)
    // console.log('timeUpdate', currentTime / duration *100, currentTime)
    
    // 只有在非正在手动改变进度的时候才根据时间进度来设置进度条
    if (!isChanging) {
      setProgress(currentTime / duration *100)
    }
  }

  // 手动改变进度条回调
  const sliderOnChange = useCallback((value) => {
    // 手动改变进度条时将状态设置为true
    setIsChanging(true)
    setProgress(value)
  }, [])

  // 手动改变进度条结束回调
  const sliderOnAfterChange = useCallback((value) => {
    const currentTime =  value / 100 * duration / 1000
    // 将当前的歌曲时间设置到audio标签中
    playerRef.current.currentTime = currentTime

    // console.log('sliderOnAfterChange', currentTime)
    // 由于手动改变结束后在上面的 timeUpdate 回调中去setCurrentTime会出现延迟，拿到的currentTime还是手动改变之前的播放时间点，导致出现进度条回弹的bug，所以在此处直接setCurrentTime一次。
    setCurrentTime(currentTime * 1000)

    // 手动改变结束将状态设置为false
    setIsChanging(false)
  }, [duration])

  return (
    <AppPlayerBarWrapper className="sprite_player">
      <div className="flex justify-center items-center content ">
        <Control className="flex justify-around items-center pt1 control">
          <div className="sprite_player prev"></div>
          <div className="sprite_player play" onClick={() => { playMusic() }}></div>
          <div className="sprite_player next"></div>
        </Control>
        <PlayInfo className="flex items-center pt1 play-info">
          <div className="relative image">
            <a href="/#">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
            <div className="sprite_player cover"></div>
          </div>
          <div className="flex flex-column ml1   info">
            <div className="flex fs12 song">
              <div className="mr1 song-name">{currentSong.name}</div>
              <a href="/#" className="singer-name">{singerName}</a>
            </div>
            <div className="flex progress">
              <Slider 
                value={progress}
                onChange={sliderOnChange}
                onAfterChange={sliderOnAfterChange}
              />
              <div className="flex items-center fs12 ml1 time">
                <span className="time-now">{dayjs(currentTime).format('mm:ss')}</span>
                <span className="divider">/</span>
                <span className="time-total">{dayjs(duration).format('mm:ss')}</span>
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
      <audio ref={playerRef} onTimeUpdate={timeUpdate} />
    </AppPlayerBarWrapper>
  )
})
