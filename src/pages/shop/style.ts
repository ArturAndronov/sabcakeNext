import styled from '@emotion/styled';
export const ShopContainer = styled("div")`
  background-color: #FDFAF4;
  padding: 90px 20px;
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
      letter-spacing: 1%;
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
`;
