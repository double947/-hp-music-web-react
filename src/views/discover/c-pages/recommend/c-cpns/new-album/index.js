import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { CoThemeHeaderRecommend } from 'components'
import { getNewAlbumsAction } from '../../store/actionCreators'
import { NEW_ALBUMS_LIMIT } from '@/common/constants'
import { CoNewAlbumWrapper } from './style'

export default memo(function CoNewAlbum() {

  const { newAlbums } = useSelector((state) => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUMS_LIMIT))
  }, [dispatch])

  return (
    <CoNewAlbumWrapper>
      <CoThemeHeaderRecommend title="新碟上架" />
      
    </CoNewAlbumWrapper>
  )
})
