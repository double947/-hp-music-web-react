import React, { memo } from 'react'
import { getSizeImage } from '../../utils/format-utils'

import { AlbumCoverWrapper } from './style'

export default memo(function CoAlbumCover(props) {
  const { source, size = "100px", width = "118px", bgp = "-570px" } = props
  return (
    <AlbumCoverWrapper size={size} width={width} bgp={bgp}>
      <div className="mt2 album-image">
        <img src={getSizeImage(source.picUrl, 150)} alt="" />
        <a href="/" className="cover image_cover">{source.name}</a>
      </div>
      <div className="album-info">
        <div className="name">{source.name}</div>
        <div className="artist">{source.artist.name || source.artist[0].name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})
