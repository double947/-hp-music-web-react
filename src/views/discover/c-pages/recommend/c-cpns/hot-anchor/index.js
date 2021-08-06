import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getHotAnchorsAction } from '../../store/actionCreators'
import { HOT_ANCHORS_LIMIT } from '@/common/constants'
import { HotAnchorWrapper, HotAnchorItemWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'


const AnchorItem = memo(function SingerItem(props) {
  const { source } = props

  return (
    <HotAnchorItemWrapper className="flex mt2">
      <img src={getSizeImage(source.avatarUrl, 50)} alt={source.nickName} />
      <div className="flex flex-column pl2 info">
        <a href="/" className="bold fs12 mt1 black name">{source.nickName}</a>
        <div className="fs12 text-nowrap mt1 desc">{source.briefDesc || "主播"}</div>
      </div>
    </HotAnchorItemWrapper>
  )
})

export default memo(function CoHotAnchor() {
  /* state */

  /* redux */
  const { hotAnchors } = useSelector((state) => ({
    hotAnchors: state.getIn(['recommend', 'hotAnchors'])
  }), shallowEqual)
  const dispatch = useDispatch()
  /* hooks */
  useEffect(() => {
    dispatch(getHotAnchorsAction(HOT_ANCHORS_LIMIT))
  }, [dispatch])
  return (
    <HotAnchorWrapper className="px2">
      <div className="flex justify-between fitW pt2 pb1 header">
        <div className="bold fs12 title">热门主播</div>
      </div>
      {
        hotAnchors.map((item, index) => {
          return (
            <AnchorItem key={item.id} source={item} />
          )
        })
      }
    </HotAnchorWrapper>
  )
})
