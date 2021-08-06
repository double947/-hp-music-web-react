import React, { memo } from 'react'

import { UserLoginWrapper } from './style'

export default memo(function CoUserLogin() {
  return (
    <UserLoginWrapper className="flex flex-column items-center p2 sprite_02">
      <div className="fs12 desc">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
      <div className="flex justify-center items-center white mt2 btn sprite_02">用户登录</div>
    </UserLoginWrapper>
  )
})
