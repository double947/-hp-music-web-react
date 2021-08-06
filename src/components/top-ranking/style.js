import styled from 'styled-components'

export const TopRankingWrapper = styled.div`
  flex: 1;
  .header {
    height: 120px;
    padding: 20px 0 0 20px;
    .img-cover {
      width: 80px;
      height: 80px;
      cursor: pointer;
    }
    .user-action {
      margin: 5px 0 0 10px;
      .btn {
        width: 22px;
        height: 22px;
        cursor: pointer;
      }
      .play {
        background-position: -267px -205px;
      }
      .play:hover {
        background-position: -267px -235px;
      }
      .favor {
        background-position: -300px -205px;
      }
      .favor:hover {
        background-position: -300px -235px;
      }
    }
  }
  .ranking {
    height: 352px;

    .ranking-item:hover .info>.song-name {
      width: 80px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .ranking-item:hover .actions {
      display: flex;
      width: 82px;
    }

    &-item {
      height: 32px;
      .rank {
        width: 35px;
      }
      :nth-child(-n+3) .rank{
        color: #c10d0c;
      }
      .info {
        .song-name {
          width: 150px;
          cursor: pointer;
        }
        .actions {
          display: none;
          .btn {
            width: 17px;
            height: 17px;
            cursor: pointer;
          }
          .play {
            background-position: -267px -268px;
          }
          .play:hover {
            background-position: -267px -288px;
          }
          .addto {
            background-position: 2px -698px;
          }
          .addto:hover {
            background-position: -20px -698px;
          }
          .favor {
            background-position: -297px -268px;
          }
          .favor:hover {
            background-position: -297px -288px;
          }
        }
      }
    }
    .more {
      height: 32px;
      a {
        cursor: pointer;
      }
    }
  }
`