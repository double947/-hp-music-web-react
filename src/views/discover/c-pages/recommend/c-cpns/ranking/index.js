import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getTopRankingAction } from '../../store/actionCreators'
import { UP_RANK, NEW_RANK, ORIGIN_RANK } from '@/common/constants'
import { CoThemeHeaderRecommend } from 'components'
import { RankingWrapper } from './style'

export default memo(function CoRanking() {
  /* state */

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
      <div className="flex top"></div>
    </RankingWrapper>
  )
})
