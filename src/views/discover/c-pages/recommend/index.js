import React, { memo } from 'react'
import { CoTopBanner, CoHotRecommend, CoNewAlbum, CoRanking } from './c-cpns'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

// 优化后的代码
function CoRecommend(props) {

  return (
    <RecommendWrapper>
    <CoTopBanner />
    <Content className="wrap-v2">
      <RecommendLeft>
        <CoHotRecommend />
        <CoNewAlbum />
        <CoRanking />
      </RecommendLeft>
      <RecommendRight></RecommendRight>
    </Content>
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
