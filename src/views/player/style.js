import styled from 'styled-components'
import bgWrapper from '@/assets/img/wrap-bg.png'

export const PlayerWrapper = styled.div`
  .content {
    background: url(${bgWrapper}) repeat-y;
    background-color: #fff;
  }
`

export const PlayerLeft = styled.div`
  width: 710px;
  padding: 47px 30px 40px 39px;
`

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`