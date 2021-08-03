import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

// 优化后的代码
function CoRecommend(props) {
  // 组件和redux关联：获取数据和进行dispatch操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.get('topBanners')
  }), shallowEqual)  // useSelector 的第二个参数传入 shallowEqual 会对当前组件所依赖的state做浅层比较，已达到性能优化的目的
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>CoRecommend: {topBanners.length}</h2>
    </div>
  )
}

export default memo(CoRecommend)


/* function CoRecommend(props) {
  const { getBanners, topBanners } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      <h2>CoRecommend: {topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(memo(CoRecommend)) */
