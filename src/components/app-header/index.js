import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { headerLinks } from '@/common/local-data'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'

export default memo(function CoAppHeader() {

  // 页面代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link} className="block" exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} className="block co">{item.title}</a>
    }
  }

  // jsx
  return (
    <HeaderWrapper>
      <div className="flex justify-between content wrap-v1">
      <HeaderLeft className="flex items-center">
        <a href="/discover" className="block logo sprite_01">网易云音乐</a>
        <div className="select-list flex">
          {
            headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="relative select-item fs13 co">
                  {showSelectItem(item, index)}
                </div>
              )
            })
          }
        </div>
      </HeaderLeft>
      <HeaderRight className="flex items-center justify-around fs12">
        <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search fs12" />
        <div className="create-center flex justify-center items-center fs12">创作者中心</div>
        <a href="/Login" className="login">登录</a>
      </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
