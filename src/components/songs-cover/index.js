import React, { memo } from 'react'
import { Image } from 'antd';

import { getSizeImage, getCount } from 'utils/format-utils'
import { SongsCoverWrapper } from './style'

export default memo(function CoSongsCover(props) {
  const { info } = props

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
      <Image src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
      <div className="cover sprite_cover">
        <div className="flex justify-between items-center px1 py2 info sprite_cover">
          <span>
            <i className="sprite_icon erji"></i>
            {getCount(info.playCount)}
          </span>
          <i className="sprite_icon play"></i>
        </div>
      </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source">
        by {info.copywriter || (info.creator && info.creator.nickname) || '未知'}
      </div>
    </SongsCoverWrapper>
  )
})
