import React, { memo } from 'react';

import CoRadioCategory from './c-cpns/radio-category';
import CoRadioRecommend from './c-cpns/radio-recommend';
import CoRadioRanking from './c-cpns/radio-ranking';
import {
  DjRadioWrapper
} from "./style";

export default memo(function CoDjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <CoRadioCategory />
      <CoRadioRecommend />
      <CoRadioRanking />
    </DjRadioWrapper>
  )
})
