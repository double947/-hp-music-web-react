import styled from 'styled-components'

export const PlayerInfoWrapper = styled.div`
  .con {
    .left-cover {
      width: 206px;
      height: 206px;
      img {
          width: 130px;
          height: 130px;
          margin: 34px;
        }
        .mask {
          background-position: -140px -580px;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
    }
    .right-info {
      width: 415px;
      .song-info {
        .title {
          .tag {
            width: 55px;
            height: 25px;
            background-position: 0 -463px;
          }
          .song-name {
            font-size: 24px;
          }
          .mv {
            width: 21px;
            height: 18px;
            background-position: 0 -18px;
          }
        }
        .singer,.album {
          .name {
            color: #0c73c2
          }
        }
        .player {
          .play {
            width: 66px;
            height: 35px;
            padding-right: 3px;
            background-position: left -630px;
          }
          .add {
            width: 31px;
            height: 35px;
            background-position: 0 -1585px;
          }
        }
        .favor, .share, .download {

        }
        .border-bg {
          width: 59px;
          height: 31px;
          background-position: right -1020px;
          div {
            width: 54px;
            height: inherit;
          }
        }
        .favor {
          background-position: 0 -977px;
        }
        .share {
          background-position: 0 -1225px;
        }
        .download {
          background-position: 0 -2761px;
        }
        .comments {
          background-position: 0 -1465px;
        }
      }
    }
    .song-lyric {
      .lyric {
      }
      .lyric-control {
        position: relative;
        color: #0c73c2;
        background-color: #fff;
        text-decoration: underline;
        cursor: pointer;

        i {
          position: absolute;
          width: 11px;
          height: 8px;
          left: 30px;
          top: 8px;
          background-position: ${props => props.isSpread ? "-45px": "-65px"} -520px;
        }
      }
    }
  }
`