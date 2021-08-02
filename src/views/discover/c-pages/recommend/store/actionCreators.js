import * as actionTypes from './constants'
import { getTopBanners } from '@/api'

const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return async(dispatch) => {
    const resp = await getTopBanners()
    console.log(resp)
    dispatch(changeTopBannersAction(resp))
  }
}