import * as actionTypes from './constants'
import { getTopBanners, getHotRecommends, getNewAlbums } from '@/api'

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
    console.log(resp)
    dispatch(changeNewAlbumsAction(resp))
  }
}