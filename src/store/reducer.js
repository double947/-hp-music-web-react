import { combineReducers } from 'redux-immutable'

// TIPS：与单模块的reducer同理，这里使用 redux-immutable 的 combineReducers 来做性能优化（它返回的也是immutable对象）。
import { reducer as recommendReducer } from 'views/discover/c-pages/recommend/store'
import { reducer as playerReducer } from 'views/player/store'
import { reducer as rankingReducer } from "views/discover/c-pages/ranking/store"
import { reducer as songsReducer } from "views/discover/c-pages/songs/store"
import { reducer as djradioReducer } from "views/discover/c-pages/djradio/store"
import { reducer as artistReducer } from "views/discover/c-pages/artist/store"
import { reducer as albumReducer } from "views/discover/c-pages/album/store"

const mergeReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  album: albumReducer,
})

export default mergeReducer