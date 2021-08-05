import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'antd'

import { CoThemeHeaderRecommend, CoAlbumCover } from 'components'
import { getNewAlbumsAction } from '../../store/actionCreators'
import { NEW_ALBUMS_LIMIT } from '@/common/constants'
import { NewAlbumWrapper } from './style'

export default memo(function CoNewAlbum() {

  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()
  const carousel = useRef()
  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUMS_LIMIT))
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <CoThemeHeaderRecommend title="新碟上架" />
      <div className="flex items-center mt2 mb3 content">
        <div className="arrow arrow-left sprite_02" onClick={() => {carousel.current.prev()}} />
        <div className="album">
          <Carousel ref={carousel} dots={false}>
            {
              [0, 1].map((item) => {
                return (
                  <div key={item} className="flex justify-between items-center page">
                    {
                      newAlbums.slice(item*5, (item+1)*5).map((albumsItem, albumsIndex) => {
                        return (
                          <CoAlbumCover key={albumsItem.id} source={albumsItem} />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={() => {carousel.current.next()}} />
      </div>
    </NewAlbumWrapper>
  )
})
