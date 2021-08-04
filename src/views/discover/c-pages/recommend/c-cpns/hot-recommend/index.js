import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { CoThemeHeaderRecommend } from 'components'
import { HotRecommendWrapper } from './style'
import { HOT_RECOMMENDS_LIMIT } from '@/common/constants'
import { getHotRecommendsAction } from '../../store/actionCreators'

export default memo(function CoHotRecommend() {
  /* state */

  /* redux-hooks */
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch()

  /* other hooks */
  useEffect(() => {
    dispatch(getHotRecommendsAction(10))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <CoThemeHeaderRecommend title="热门推荐" keywords={['华语','流行', '摇滚', '民谣', '电子']} />
    </HotRecommendWrapper>
  )
})
