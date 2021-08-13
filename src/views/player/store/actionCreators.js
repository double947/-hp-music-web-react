import { getSongDetail, getLyricById, getSimiSongs, getSimiPlayList } from "@/api"
import { getRandomNumber } from "utils/math-utils"
import { parseLyric } from "@/utils/lyric-parse"
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

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList: lyricList
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

const changeCurrentLyricsAction = (currentLyrics) => ({
  type: actionTypes.CHANGE_CURRENT_LYRICS,
  currentLyrics,
})

export const changeIsPlayingAction = (isPlaying) => ({
  type: actionTypes.CHANGE_IS_PLAYING,
  isPlaying
})

const changeSimiSongsAction = (simiSongs) => ({
  type: actionTypes.CHANGE_SIMI_SONGS,
  simiSongs
})

const changeSimiPlayListAction = (simiPlayList) => ({
  type: actionTypes.CHANGE_SIMI_PLAY_LIST,
  simiPlayList
})


/* getActions */
export const changePlaySongAction = (tag) => {
  return (dispatch, getState) => {
    // 1.获取相关数据
    const playList = getState().getIn(['player', 'playList'])
    const playSequence = getState().getIn(['player', 'playSequence'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])

    // 2.判断播放列表顺序
    switch(playSequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(0, playList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(0, playList.length)
        }
        currentSongIndex = randomIndex
        break
      default: // 顺序播放
        currentSongIndex += tag
        if (currentSongIndex >= playList.length) currentSongIndex = 0
        if (currentSongIndex < 0) currentSongIndex = playList.length -1
    }

    // 3.更新redux中相关数据
    const currentSong = playList[currentSongIndex]
    dispatch(changCurrentSongIndexAction(currentSongIndex))
    dispatch(changeCurrentSongAction(currentSong))

    // 4.请求该歌曲的歌词
    dispatch(getLyricAction(currentSong.id))

    // 5.将该歌曲在本地存一份
    console.log(currentSong)
    try {
      localStorage.setItem('currentSong', JSON.stringify(currentSong))
    } catch (err) {
      console.log(err)
    }
  }
}

export const getSongDetailAction = (id) => {
  return async(dispatch, getState) => {
    // 1.根据id查找playList中是否已有该歌曲
    const playList = getState().getIn(['player', 'playList'])
    const songIndex = playList.findIndex(item => item.id === id)
    // 2.判断是否找到歌曲
    let song = null
    if (songIndex !== -1) { // 若找到该歌曲
      dispatch(changCurrentSongIndexAction(songIndex))
      song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
    } else { // 若未找到该歌曲，则去请求该歌曲相关数据
      const resp = await getSongDetail(id)
      song = resp.songs && resp.songs[0]

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

    // 3.请求该歌曲的歌词
    if (!song) return
    dispatch(getLyricAction(song.id))

    // 4.将该歌曲在本地存一份
    console.log(song)
    try {
      localStorage.setItem('currentSong', JSON.stringify(song))
    } catch (err) {
      console.log(err)
    }
  }
}

// 获取当前歌词并解析
export const getLyricAction = (id) => {
  return async(dispatch) => {
    const resp = await getLyricById(id)
    const parsedLyric = parseLyric(resp.lrc.lyric)
    dispatch(changeLyricListAction(parsedLyric))
    dispatch(changeCurrentLyricsAction(parsedLyric))
  }
}

export const getSimiSongsAction = () => {
  return async(dispatch, getState) =>{
    let id = null
    if (getState().getIn(['player', 'currentSong']).id) {
      id = getState().getIn(['player', 'currentSong']).id
    } else {
      try {
        id = JSON.parse(localStorage.getItem('currentSong')).id
      } catch (err) {
        console.log(err)
      }
    }

    if (!id) return
    const resp = await getSimiSongs(id)
    dispatch(changeSimiSongsAction(resp.songs))
  }
}

export const getSimiPlayListAction = () => {
  return async(dispatch, getState) =>{
    let id = null
    if (getState().getIn(['player', 'currentSong']).id) {
      id = getState().getIn(['player', 'currentSong']).id
    } else {
      try {
        id = JSON.parse(localStorage.getItem('currentSong')).id
      } catch (err) {
        console.log(err)
      }
    }

    if (!id) return
    const resp = await getSimiPlayList(id)
    dispatch(changeSimiPlayListAction(resp.playlists))
  }
}