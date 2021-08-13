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

/**
 * 获取推荐模块榜单
 * { 0-云音乐新歌榜，2-云原创歌曲榜，3-云音乐飙升榜 }
 * @param  {number} idx
 */
export function getRecommendRank(idx) {
  return request({
    url: '/top/list',
    method: 'get',
    params: {
      idx
    }
  })
}

/**
 * 获取入驻歌手榜
 * @param  {number} type  -1:全部 1:男歌手 2:女歌手 3:乐队
 * @param  {number} area  -1:全部 7:华语 96:欧美 8:日本 16:韩国 0:其他
 * @param  {number} limit
 */
export function getSettledSingers(type, area, limit) {
  return request({
    url: '/artist/list',
    method: 'get',
    params: {
      type,
      area,
      limit
    }
  })
}

/**
 * 获取热门主播榜
 * @param  {number} limit
 */
export function getHotAnchors(limit) {
  return request({
    url: '/dj/toplist/popular',
    method: 'get',
    params: {
      limit
    }
  })
}

/**
 * 获取歌曲详情，传入歌曲ids（支持多个，用，隔开）
 * @param  {number} ids
 */
export function getSongDetail(ids) {
  return request({
    url: '/song/detail',
    method: 'get',
    params: {
      ids
    }
  })
}
/**
 * 获取歌词
 * @param  {number} id
 */
export function getLyricById(id) {
  return request({
    url: '/lyric',
    method: 'get',
    params: {
      id
    }
  })
}
/**
 * 获取相似歌曲
 * @param  {number} id
 */
export function getSimiSongs(id) {
  return request({
    url: '/simi/song',
    method: 'get',
    params: {
      id
    }
  })
}

/**
 * 获取相似歌单
 * @param  {number} id
 */
export function getSimiPlayList(id) {
  return request({
    url: `/simi/playlist`,
    method: 'get',
    params: {
      id
    }
  })
}
/**
 * 获取榜单
 */
export function getTopList() {
  return request({
    url: "/toplist"
  })
}

/**
 * 获取榜单详情
 * @param  {number} id
 */
export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

/**
 * 获取歌单分类
 */
export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

/**
 * 获取网友精选碟歌单
 * @param  {string} cat="全部"
 * @param  {number} offset=0
 * @param  {number} limit=35
 */
export function getSongCategoryList(cat="全部", offset=0, limit = 35) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

/**
 * 获取电台分类
 */
export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist"
  })
}

/**
 * 可获得对应类型电台列表
 * @param  {number} type
 */
export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

/**
 * 电台 - 类别热门电台
 * @param  {number} cateId
 * @param  {number} limit
 * @param  {number} offset
 */
export function getDjRadios(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}

/**
 * 获取歌手分类列表
 * @param  {number} area
 * @param  {number} type
 * @param  {string} initial
 */
export function getArtistList(area, type, initial) {
  let url = "/artist/list";
  let params = { limit: 100 }
  if (area === -1 && type === 1) {
    url = "/top/artists"
  } else {
    if (area === -1) {
      params = {limit: 100, cat: 5001}
    } else {
      params = {
        type,
        area,
        initial,
        limit: 100
      }
    }
  }
  console.log("url:", url, "params:", params);
  return request({
    url,
    params
  })
}

/**
 * 获取云音乐首页新碟上架数据
 */
export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

/**
 * 获取新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30
 * @param  {number} limit
 * @param  {number} offset
 */
export function getTopAlbums(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}