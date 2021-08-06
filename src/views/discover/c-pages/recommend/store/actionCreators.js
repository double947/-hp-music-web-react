import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums, getRecommendRank, getSettledSingers, getHotAnchors } from '@/api'

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends:res.result
})

const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums
})

const changeTopRankAction = (res, rankName) => ({
  type: actionTypes.CHANGE_TOP_RANKING,
  rankSource: res.playlist,
  rankName: rankName
})

const changSettledSingers = (res) => ({
  type: actionTypes.CHANGE_SETTLED_SINGERS,
  settledSingers: res.artists
})

const changeHotAnchors = (res) => ({
  type: actionTypes.CHANGE_HOT_ANCHORS,
  hotAnchors: res.data.list
})


export const getTopBannerAction = () => {
  return async(dispatch) => {
    const resp = await getTopBanners()
    dispatch(changeTopBannersAction(resp))
  }
}

export const getHotRecommendsAction = (limit) => {
  return async(dispatch) => {
    const resp = await getHotRecommends(limit)
    dispatch(changeHotRecommendsAction(resp))
  }
}

export const getNewAlbumsAction = (limit) => {
  return async(dispatch) => {
    const resp = await getNewAlbums(limit)
    dispatch(changeNewAlbumsAction(resp))
  }
}

export const getTopRankingAction = (idx, rankName) => {
  return async(dispatch) => {
    const resp = await getRecommendRank(idx)
    dispatch(changeTopRankAction(resp, rankName))
  }
}

export const getSettledSingersAction = (type, area, limit) => {
  return async(dispatch) => {
    const resp = await getSettledSingers(type, area, limit)
    dispatch(changSettledSingers(resp))
  }
}

export const getHotAnchorsAction = (limit) => {
  return async(dispatch) => {
    const resp = await getHotAnchors(limit)
    dispatch(changeHotAnchors(resp))
  }
}