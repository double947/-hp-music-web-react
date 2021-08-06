import styled from 'styled-components'

export const SettleSingerWrapper = styled.div`
  height: 470px;
  .header {
    border-bottom: 1px solid #CCC;
  }
  .apply {
    cursor: pointer;
    width: 210px;
    height: 40px;
    background-color: #F2F2F2;
    border: 1px solid #ccc;
    border-radius: 2px;
    background-position: right -100px;
    :hover {
      background-color: #EDEDED;
    }
  }
`

export const SingerItemWrapper = styled.div`
  cursor: pointer;
  width: 210px;
  height: 62px;
  background-color: #fafafa;
  overflow: hidden;
  :hover {
    background-color: #eee;
  }
  img {
    width: 62px;
    height: 62px;
  }
  .info {
    flex: 1;
    border: 1px solid #e9e9e9;
    .desc {
      width: 120px;
      color: #666;
    }
  }
`