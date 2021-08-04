import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { Carousel } from 'antd'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

import { getTopBannerAction } from '../../store/actionCreators'


export default memo(function CoTopBanner() {
  /* 内部相关state */
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  /* redux相关 */
    // 组件和redux关联：获取数据和进行dispatch操作
    const { topBanners } = useSelector(state => ({
      // topBanners: state.get('recommend').get('topBanners')
      topBanners: state.getIn(['recommend', 'topBanners']) // 上面写法的语法糖
    }), shallowEqual)  // useSelector 的第二个参数传入 shallowEqual 会对当前组件所依赖的state做浅层比较，已达到性能优化的目的
    const dispatch = useDispatch()

  /* 其他hooks */
    // 发送网络请求
    useEffect(() => {
      dispatch(getTopBannerAction())
    }, [dispatch])

    const bannerRef = useRef()

    const bannerChange = useCallback((from , to) => {
      setCurrentImgIndex(to)
    }, [])

  /* 其他业务逻辑 */
    const bgImage = topBanners[currentImgIndex] && (topBanners[currentImgIndex].imageUrl+ '?imageView&blur=40x20')

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
              {
                topBanners.map((item, index) => {
                  return (
                    <div key={item.imageUrl} className="banner-item">
                      <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                    </div>
                  )
                })
              }
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <button className="btn left" onClick={() => {bannerRef.current.prev()}}></button>
            <button className="btn right" onClick={() => {bannerRef.current.next()}}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
})
