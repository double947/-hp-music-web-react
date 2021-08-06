import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotAnchorsAction } from '../../store/actionCreators'
import { HOT_ANCHORS_LIMIT } from '@/common/constants'
import { HotAnchorWrapper } from './style'

export default memo(function CoHotAnchor() {
  /* state */
  const { hotAnchors } = useSelector((state) => ({
    hotAnchors: state.getIn(['recommend', 'hotAnchors'])
  }), shallowEqual)
  /* redux */
  const dispatch = useDispatch()
  /* hooks */
  useEffect(() => {
    dispatch(getHotAnchorsAction(HOT_ANCHORS_LIMIT))
  }, [dispatch])
  return (
    <HotAnchorWrapper>
      <h2>{hotAnchors.length}</h2>
    </HotAnchorWrapper>
  )
})
