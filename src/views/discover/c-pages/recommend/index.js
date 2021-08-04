import React, { memo, useEffect } from 'react'
import TopBanner from './c-cpns/topBanner'
import { RecommendWrapper } from './style'

// 优化后的代码
function CoRecommend(props) {

  return (
    <RecommendWrapper>
    <TopBanner />
    </RecommendWrapper>
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
