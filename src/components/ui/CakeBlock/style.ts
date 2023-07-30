import styled from "@emotion/styled";
export const CakeBlockContainer = styled("div")`
  .cake-block {

    text-align: center;
    margin-bottom: 65px;

    & img {
      width: 350px;
      height: 350px;
    }

    //&:not(:nth-of-type(4n)) {
    //        margin-right: 35px;
    //    }


    &__title {
      font-size: 20px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    &__selector {
      max-width: 500px;
      display: flex;
      background-color: #f3f3f3;
      border-radius: 10px;
      flex-direction: column;
      padding: 6px;

      ul {
        display: flex;
        flex-wrap: wrap;
        flex: 1;

        &:first-of-type {
          margin-bottom: 6px;
        }

        li {
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

          &.disabled {
            opacity: 0.2;
            pointer-events: none;
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

    div {
      text-decoration: underline;
    }
  }
`;