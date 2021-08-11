import React, { memo } from 'react'

import { CoPlayerHeader, CoPlayerList, CoLyricPanel } from './c-cpns'
import { PanelWrapper } from './style'

export default memo(function CoAppPlayerPanel(props) {
  return (
    <PanelWrapper>
      <CoPlayerHeader/>
      <div className="main">
        <img className="image" src={`${props.bgCover}?imageView&blur=40x20`} alt=""/>
        <CoPlayerList/>
        <CoLyricPanel/>
      </div>
    </PanelWrapper>
  )
})
