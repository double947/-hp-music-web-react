import request from './request'

/**
 * 获取推荐页Banners
 */
export function getTopBanners() {
  return request({
    url: '/banner',
    method: 'get'
  })
}

/**
 * 获取热门推荐歌单
 * @param  {number} limit
 */
export function getHotRecommends(limit) {
  return request({
    url: `/personalized`,
    method: 'get',
    params: {
      limit
    }
  })
}
/**
 * 获取推荐模块新碟上架
 * @param  {number} limit
 */
export function getNewAlbums(limit) {
  return request({
    url: '/top/album',
    method: 'get',
    params: {
      limit
    }
  })
}