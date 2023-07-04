import styled from '@emotion/styled';
export const BestProductContainer = styled('div')`
  background-color: #fff;
  height: 970px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      max-width: 100%;
      height: auto;
    }
  }

  & .title {
    padding-bottom: 40px;
    max-width: 620px;

    h1 {
      border-bottom: 3px solid #C9A74D;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 43px;
      padding-bottom: 25px;
      text-align: center;
    }

    p {
      padding: 25px 0px;
      font-family: Quicksand;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
    }
  }

  & .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & .contentContainer {
      display: flex;
      flex-direction: column;
      padding-right: 20px;

      & .contentBlock {
        display: flex;
        padding-bottom: 70px;
        & .number {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background-color: #000;
          display: grid;
          grid-template-columns: 65px 1fr;
          align-items: center;
          justify-items: center;
          color: #FFFFFF;
          font-size: 24px;
          font-weight: bold;
        }
        & .contentInfo {
          display: flex;
          flex-direction: column;
          max-width: 260px;
          padding-left: 25px;

          h1 {
            font-family: Rubik;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 21px;
            padding-bottom: 17px;
          }
          p{
            font-family: Quicksand;
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
  }
  @media (max-width: 900px) {
    height: 2000px;
  }
  @media (max-width: 420px) {
    height: 1950px;
  }

`;
