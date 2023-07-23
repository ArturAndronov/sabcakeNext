import styled from '@emotion/styled';

export const SortPopupContainer = styled("div")`

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
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
      border-radius: 10px;
      overflow: hidden;
      padding: 10px 0;
      width: 150px;

      ul {
        overflow: hidden;

        li {
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

`;