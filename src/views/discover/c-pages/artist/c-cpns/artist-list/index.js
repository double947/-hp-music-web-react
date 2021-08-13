import React, { memo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'


import CoThemeHeaderNormal from '@/components/theme-header-normal'
import { CoAlphaList, CoArtistItem } from './c-cpns'
import { ArtistListWrapper } from './style'

export default memo(function CoArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.getIn(["artist", "currentType"]),
    artistList: state.getIn(["artist", "artistList"])
  }), shallowEqual);

  return (
    <ArtistListWrapper>
      <CoThemeHeaderNormal title={currentType.name} />
      <CoAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <CoArtistItem key={item.id} index={index} info={item}/>
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
