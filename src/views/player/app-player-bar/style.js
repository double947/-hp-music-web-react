import styled from 'styled-components'
import progressBar from '@/assets/img/progress_bar.png'
import icon from '@/assets/img/sprite_icon.png'

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    height: 47px;
  }
` 

export const Control = styled.div`
  width: 137px;
  height: 42px;
  .prev, .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
    :hover {
      background-position: -30px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    background-position: 0px ${props => props.isPlaying ? '-165px' : '-204px'};
  }
  .next {
    background-position: -80px -130px;
    :hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayInfo = styled.div`
  width: 642px;
  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    overflow: hidden;
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      text-indent: -9999px;
      background-position: 0 -80px;
    }
  }
  .info {
    flex: 1;
    .song {
      position: relative;
      top: 8px;
      left: 6px;
      &-name {
        color: #e8e8e8;
      }
      .singer-name {
        color: #9b9b9b;
      }
    }
    .progress {
      width: 100%;
      .ant-slider {
        width: 466px;
        margin-left: 8px;
      }
      .ant-slider-rail {
        height: 7px;
        background: url(${progressBar}) right 0;
      }
      .ant-slider-track {
        height: 7px;
        background: url(${progressBar}) 0 -66px;
      }
      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
        margin-top: -8px;
        background: url(${icon}) 0 -250px;
      }
      .time {
        &-now {
          color: #a1a1a1;
        }
        .divider, &-total {
          color: #797979;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const Operator = styled.div`
  .action {
    width: 87px;
    height: 36px;
    .btn {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .favor {
      background-position: -88px -163px;
      :hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -113px -163px;
      :hover {
        background-position: -113px -189px;
      }
    }
  }
  .play-control {
    width: 136px;
    height: 36px;
    cursor: pointer;
    div:nth-child(n-2) {
      width: 25px;
      height: 25px;
    }
    div:nth-child(3) {
      width: 59px;
      height: 25px;
    }
    .vol {
      background-position: 0px -248px;
      :hover {
        background-position: -29px -248px;
      }
    }
    .loop {
      background-position: -113px -163px;
      :hover {
        background-position: -113px -189px;
      }
    }.lyric {
      color: #666;
      background-position: -45px -70px;
      :hover {
        background-position: -45px -100px;
      }
    }
  }

`