import { getSongDetail } from "@/api"
import * as actionTypes from './constants'

const changeSongDetailAction = (currentSong) => ({
  type: actionTypes.CHANGE_SONG_DETAIL,
  currentSong: currentSong.songs[0]
})

export const getSongDetailAction = (id) => {
  return async(dispatch) => {
    const resp = await getSongDetail(id)
    dispatch(changeSongDetailAction(resp))
  }
}