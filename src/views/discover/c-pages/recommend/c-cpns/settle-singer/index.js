import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSettledSingersAction } from '../../store/actionCreators'
import { SETTLED_SINGERS_LIMIT, SETTLED_SINGERS_TYPE, SETTLED_SINGERS_AREA } from '@/common/constants'
import { SettleSingerWrapper } from './style'


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
    <div className="content"></div>
    <div className="footer"></div>
    </SettleSingerWrapper>
  )
})
