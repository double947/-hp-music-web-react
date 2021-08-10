import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0,
  playList: [],
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    default: 
      return state
  }
}

export default reducer