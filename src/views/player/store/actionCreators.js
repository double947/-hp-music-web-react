import { getSongDetail } from "@/api"
import * as actionTypes from './constants'

/* changeActions */
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: currentSong
})

const changCurrentSongIndexAction= (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex: currentSongIndex
})

const changePlayLisAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: playList
})

export const changePlaySequenceAction = (sequenceEnum) => ({
  type: actionTypes.CHANGE_PLAY_SEQUENCE,
  playSequence: sequenceEnum
})


/* getActions */
export const getSongDetailAction = (id) => {
  return async(dispatch, getState) => {
    // 1.根据id查找playList中是否已有该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(item => item.id === id)
    // 2.判断是否找到歌曲
    if (songIndex !== -1) { // 若找到该歌曲
      dispatch(changCurrentSongIndexAction(songIndex))
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
    } else { // 若未找到该歌曲，则去请求该歌曲相关数据
      const resp = await getSongDetail(id)
      const song = resp.songs && resp.songs[0]

      // 若歌曲数据不存在直接return
      if (!song) return

      // 1.将最新请求到的歌曲添加到播放列表
      const newPlayList = [...playList] 
      newPlayList.push(song)

      // 2.更新redux中的值
      dispatch(changePlayLisAction(newPlayList))
      dispatch(changCurrentSongIndexAction(newPlayList.length - 1))
      dispatch(changeCurrentSongAction(song))
    }
  }
}