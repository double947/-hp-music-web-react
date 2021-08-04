import React, { memo } from 'react'

import { HeaderWrapper } from './style'
export default memo(function CoThemeHeaderRecommend(props) {
  const { title, keywords=[] } = props
  return (
    <HeaderWrapper className="flex justify-between items-center sprite_02">
      <div className="flex items-center left">
        <h3>{title}</h3>
        <div className="flex ml2 keyword">
          {
            keywords.map((item, index) => {
              return (
                <div className="flex items-center item" key={item}>
                  <a href="">{item}</a>
                  <div className="divider">|</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="flex items-center right">
        <a href="/">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})
