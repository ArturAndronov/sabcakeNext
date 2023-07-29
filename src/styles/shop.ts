import styled from '@emotion/styled';
export const ShopContainer = styled("div")`
  background-color: #FDFAF4;
  padding: 90px 20px;

  .button {
    align-items: center;
    display: flex;
    background-color: #000;
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    border: 1px solid transparent;

    &,
    span {
      color: #000;
    }

    i,
    span,
    path,
    svg {
      transition: all 0.15s ease-in-out;
    }

    &:hover {
      background-color: darken(#000, 8%);
    }

    &:active {
      background-color: darken(#000, 12%);
      transform: translateY(1px);
    }

    &__delimiter {
      width: 1px;
      height: 25px;
      background-color: rgba(17, 13, 13, 0.25);
      margin-left: 14px;
      margin-right: 14px;
    }

    &__cart {
      display: flex;
      align-items: center;
      line-height: 23px;
      padding: 12px 25px;

      svg {
        margin-right: 8px;
        margin-bottom: 1px;
      }

      span {
        font-weight: 600;
        font-size: 16px;
      }
    }

    &--add {
      svg {
        margin-right: 2px;
      }

      span {
        font-weight: 600;
        font-size: 16px;
      }

      &:hover {
        i {
          background-color: #fff;
          color: #000;
        }
      }

      i {
        display: inline-block;
        border-radius: 30px;
        background-color: #000;
        color: #fff;
        font-weight: 600;
        width: 22px;
        height: 22px;
        font-style: normal;
        font-size: 13px;
        line-height: 22px;
        position: relative;
        top: -1px;
        left: 3px;
      }
    }

    &--outline {
      background-color: #fff;
      border-color: #000;
      &,
      span {
        color: #000;
      }

      svg {
        path {
          fill: #000;
        }
      }

      &:hover {
        background-color: #000;

        &,
        span {
          color: #fff;
        }

        svg {
          path {
            fill: #fff;
          }
        }
      }

      &:active {
        background-color: darken(#000, 8%);
      }
    }

    &--cart {
      display: flex;
      align-items: center;
      line-height: 23px;
      padding: 12px 25px;

      svg {
        margin-right: 8px;
        margin-bottom: 1px;
      }

      span {
        font-weight: 600;
        font-size: 16px;
      }
    }



    &--circle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      min-width: 32px;
      padding: 0;
      border-width: 2px;
    }

    &--black {
      background-color: #181818;
      
    }
  }
  
  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  

  .content__items{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (max-width: 420px) {
    .nav{
      flex-direction: column;
    }
    .sort__label{
      font-size: 13px;
    }
    .content__title{
      font-size: 20px;
    }
    .cake-block__title{
      font-size:15px;
    }
    .cake-block:not(:nth-of-type(4n)) {
       margin-right: 0px; 
    }
    ul{
      flex-wrap: wrap;
      li{
        padding: 5px 15px;
        font-size: 13px;
      }
    }
  }
`;
