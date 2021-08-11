import { Map } from 'immutable'
import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: {},
  currentSongIndex: 0,
  playList: [
    {
      "name": "匆匆那年",
      "id": 31514406,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 9621,
          "name": "王菲",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [
        "电影《匆匆那年》同名主题曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 6,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 3121268,
        "name": "匆匆那年 电影原声带",
        "picUrl": "https://p2.music.126.net/YCq17CaVbRTyFtJG6G5oDg==/7816428162584348.jpg",
        "tns": [],
        "pic": 7816428162584348
      },
      "dt": 241000,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9643518,
        "vd": -15700
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5786173,
        "vd": -13000
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3857500,
        "vd": -11500
      },
      "a": null,
      "cd": "1",
      "no": 20,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "version": 6,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 600011,
      "publishTime": 1418918400000
    },
    {
      "name": "孤身",
      "id": 1365393542,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1197168,
          "name": "徐秉龙",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 11,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 79130968,
        "name": "孤身",
        "picUrl": "https://p2.music.126.net/yVmtE5RFcJ1fhv-ivuyuRw==/109951164075300143.jpg",
        "tns": [],
        "pic_str": "109951164075300143",
        "pic": 109951164075300140
      },
      "dt": 211541,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 8464365,
        "vd": -49744
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5078637,
        "vd": -47122
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3385773,
        "vd": -45401
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 64,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "version": 11,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "mv": 0,
      "publishTime": 0
    }
  ],
  playSequence: 0, // 0-循环 1-随机 2-单曲
  lyricList: [],
  currentLyricIndex: 0
})

function reducer(state = defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set('playSequence', action.playSequence)
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.index)
    default: 
      return state
  }
}

export default reducer