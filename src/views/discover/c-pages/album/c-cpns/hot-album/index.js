import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotAlbumsAction } from '../../store/actionCreators'

import CoAlbumCover from '@/components/album-cover'
import CoThemHeaderNormal from '@/components/theme-header-normal'
import { HotAlbumWrapper } from './style'

export default memo(function CoHotAlbum() {

  const { hotAlbums } = useSelector(state => ({
    hotAlbums: state.getIn(["album", "hotAlbums"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <CoThemHeaderNormal title="热门新碟" />
      <div className="album-list">
        {
          hotAlbums.slice(0, 10).map((item, index) => {
            return <CoAlbumCover 
                      size={"130px"} 
                      width={"153px"} 
                      bgp={"-845px"}
                      key={item.id} 
                      source={item}
                    />
          })
        }
      </div>
    </HotAlbumWrapper>
  )
});
