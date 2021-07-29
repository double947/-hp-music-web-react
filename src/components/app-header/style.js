import styled from 'styled-components'
import sprite_01 from '@/assets/img/sprite_01.png'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  color: #fff;
  .content {
    height: 70px;
  }
  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  .logo {
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -99999px;
  }
  .select-list {
    line-height: 70px;
    .select-item {
      a {
        padding: 0 20px;
        color: #ccc;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${sprite_01});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  width: 300px;
  input::placeholder {
    font-size: 12px;
  }
  .search {
    font-size: 12px;
    width: 158px;
    height: 32px;
    border-radius: 32px;
  }
  .create-center {
    width: 90px;
    height: 32px;
    color: #fff;
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    &:hover {
      border: 1px solid #ccc;
    }
  }
  .login {
    color: #666;
    &:hover {
      color: #999;
    }
  }
`