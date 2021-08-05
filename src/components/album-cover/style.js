import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${props => props.width};
    height: ${props => props.size};
    overflow: hidden;
    img {
      width: ${props => props.size};
      height: ${props => props.size};
    }
    .cover {
      background-position: 0 ${props => props.bgp};
    }
  }
  .album-info {
    font-size: 12px;
    width: ${props => props.size};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`