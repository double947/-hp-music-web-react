import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTopRankingAction } from '../../store/actionCreators'
import { UP_RANK, NEW_RANK, ORIGIN_RANK } from '@/common/constants'
import { CoThemeHeaderRecommend, CoTopRanking } from 'components'
import { RankingWrapper } from './style'

export default memo(function CoRanking() {
  /* state */
  const topRank = useSelector((state) => ({
    topUpList: state.getIn(['recommend', 'topRanking', 'topUpList']),
    topNewList: state.getIn(['recommend', 'topRanking', 'topNewList']),
    topOriginList: state.getIn(['recommend', 'topRanking', 'topOriginList']),
  }))
  /* redux */
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getTopRankingAction(UP_RANK.idx, UP_RANK.name))
    dispatch(getTopRankingAction(NEW_RANK.idx, NEW_RANK.name))
    dispatch(getTopRankingAction(ORIGIN_RANK.idx, ORIGIN_RANK.name))
  }, [dispatch])
  /* hooks */
  return (
    <RankingWrapper>
      <CoThemeHeaderRecommend title="榜单" />
      <div className="flex top">
      <CoTopRanking source={topRank.topUpList} />
      <CoTopRanking source={topRank.topNewList} />
      <CoTopRanking source={topRank.topOriginList} />
      </div>
    </RankingWrapper>
  )
})
