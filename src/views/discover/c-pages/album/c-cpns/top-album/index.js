import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopAlbumsAction } from '../../store/actionCreators'

import CoThemeHeaderNormal from "@/components/theme-header-normal"
import CoAlbumCover from "@/components/album-cover"
import CoPagination from '@/components/pagination'
import { TopAlbumWrapper } from './style'

export default memo(function CoTopAlbum() {
  const [currentPage, setCurrentPage] = useState(1)

  const { topAlbums, total } = useSelector(state => ({
    topAlbums: state.getIn(["album", "topAlbums"]),
    total: state.getIn(["album", "topTotal"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch])


  const onPageChange = (page, pageSize) => {
    setCurrentPage(page)
    dispatch(getTopAlbumsAction(page))
  }

  return (
    <TopAlbumWrapper>
      <CoThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {
          topAlbums.map((item, index) => {
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
      <CoPagination 
        currentPage={currentPage} 
        total={total} 
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  )
})
