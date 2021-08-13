import React, { useEffect, memo } from 'react';
import { useDispatch } from "react-redux";

import { getTops } from "./store/actionCreators";

import { CoTopRanking, CoRankingHeader, CoRankingList } from "./c-cpns";
import {
  RankingWrapper,
  RankingLeft,
  RankingRight,
} from "./style";

export default memo(function CoRanking() {
  // redux
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <CoTopRanking/>
      </RankingLeft>
      <RankingRight>
        <CoRankingHeader/>
        <CoRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
