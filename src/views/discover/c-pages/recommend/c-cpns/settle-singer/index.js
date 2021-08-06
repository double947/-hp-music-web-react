import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSettledSingersAction } from '../../store/actionCreators'
import { SETTLED_SINGERS_LIMIT, SETTLED_SINGERS_TYPE, SETTLED_SINGERS_AREA } from '@/common/constants'
import { SettleSingerWrapper, SingerItemWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'



const SingerItem = memo(function SingerItem(props) {
  const { source } = props
  console.log(source)

  return (
    <SingerItemWrapper className="flex mt2">
      <img src={getSizeImage(source.img1v1Url, 62)} alt={source.name} />
      <div className="flex flex-column pl2 info">
        <div className="bold fs12 mt1 name">{source.name}</div>
        <div className="fs12 text-nowrap mt1 desc">{source.briefDesc || "歌手"}</div>
      </div>
    </SingerItemWrapper>
  )
})


export default memo(function CoSettleSinger() {
  /* state */
  const { settledSingers } = useSelector((state) => ({
    settledSingers: state.getIn(['recommend', 'settledSingers'])
  }), shallowEqual)
  /* redux */
  const dispatch = useDispatch()

  /* hooks */
  useEffect(() => {
    dispatch(getSettledSingersAction(SETTLED_SINGERS_TYPE.all, SETTLED_SINGERS_AREA.chinese, SETTLED_SINGERS_LIMIT))
  }, [dispatch])
  return (
    <SettleSingerWrapper className="flex flex-column items-center px2">
      <div className="flex justify-between fitW pt2 pb1 header">
        <div className="bold fs12 title">入驻歌手</div>
        <a href="/" className="fs12">查看全部 &gt;</a>
      </div>
      <div className="content">
        {
          settledSingers.map((item, index) => {
            return (
              <SingerItem key={item.id} source={item} />
            )
          })
        }
      </div>
      <div className="flex justify-center items-center mt1 fs12 bold apply">申请成为网易音乐人</div>
    </SettleSingerWrapper>
  )
})
