import styled from '@emotion/styled';
export const ShopContainer = styled("div")`
  background-color: #FDFAF4;
  padding: 90px 20px;

  .button {
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
  .sort {
    position: relative;

    &__label {
      display: flex;


      svg {
        margin-right: 8px;
      }

      b {
        margin-right: 8px;
      }

      span {
        color: #b1ca31;
        border-bottom: 1px dashed #b1ca31;
        cursor: pointer;
      }
    }
    &__popup {
      position: absolute;
      right: 0;
      margin-top: 15px;
      background: #fff;
      box-shadow: 0px 5px 15px rgba(0,0,0,0.09);
      border-radius: 10px;
      overflow: hidden;
      padding: 10px 0;
      width: 150px;

      ul{
        overflow: hidden;
        li{
          padding: 12px 20px;
          cursor: pointer;

          &.active,
          &:hover {
            background: rgba(254, 95, 30, 0.05);
          }

          &.active {
            font-weight: bold;
            color: #b1ca31;
          }
        }
      }
    }
  }

  .content__items{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .cake-block {

    text-align: center;
    margin-bottom: 65px;

    & img{
      width: 350px;
      height: 350px;
    }
    
    &:not(:nth-of-type(4n)) {
      margin-right: 35px;
    }
    

    &__title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    &__selector {
      display: flex;
      background-color: #f3f3f3;
      border-radius: 10px;
      flex-direction: column;
      padding: 6px;

      ul {
        display: flex;
        flex: 1;

        &:first-of-type {
          margin-bottom: 6px;
        }

        li{
          padding: 8px;
          flex: 1;
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;

          &.active {
            background: #fff;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
            border-radius: 5px;
            cursor: auto;
          }
        }
      }
    }

    &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 20px;
    }

    &__price {
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.015em;
    }


  }
  .cake-block__selector {
    div{
      text-decoration: underline;
    }
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
