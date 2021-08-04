import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { CoThemeHeaderRecommend, CoSongsCover } from 'components'
import { HotRecommendWrapper } from './style'
import { HOT_RECOMMENDS_LIMIT } from '@/common/constants'
import { getHotRecommendsAction } from '../../store/actionCreators'

export default memo(function CoHotRecommend() {
  /* state */

  /* redux-hooks */
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  // console.log(hotRecommends)
  const dispatch = useDispatch()

  /* other hooks */
  useEffect(() => {
    dispatch(getHotRecommendsAction(HOT_RECOMMENDS_LIMIT))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <CoThemeHeaderRecommend title="热门推荐" keywords={['华语','流行', '摇滚', '民谣', '电子']} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return (
              <CoSongsCover info={item} key={item.id}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
