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