import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
&.button{
  display: flex;
  background-color: #b1ca31;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  
  &:hover {
    background-color: #94a929;
  }

  &:active {
    background-color: #869925;
    transform: translateY(1px);
  }

  i,
  span,
  path,
  svg {
    transition: all $duration ease-in-out;
  }
}
  
  .button__delimiter {
    width: 1px;
    height: 25px;
    background-color: rgba(17, 13, 13, 0.25);
    margin-left: 14px;
    margin-right: 14px;
  }

  &.button--cart {
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

  &.button--add {
    display: flex;
    align-items: center;

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
        color: #b1ca31;
      }
    }

    i {
      display: inline-block;
      border-radius: 30px;
      background-color: #b1ca31;
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

  &.button--outline {
    background-color: #fff;
    border-color: #b1ca31;
    &,
    span {
      color: #b1ca31;
    }

    svg {
      path {
        fill: #b1ca31;
      }
    }

    &:hover {
      background-color: #b1ca31;

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
      background-color: darken(#b1ca31, 8%);
    }
  }

  &.button--circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    min-width: 32px;
    padding: 0;
    border-width: 2px;
  }

  &.button--black {
    background-color: #181818;

    &:hover,
    &:active {
      background-color: lighten($color: #181818, $amount: 10);
    }
  }
`;
