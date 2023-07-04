import styled from '@emotion/styled';

export const CakePopsContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 750px;

  img {
    max-width: 100%;
    height: auto;
  }

  .CakePopsContent {
    h1 {
      border-bottom: 3px solid #C9A74D;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 43px;
      padding-bottom: 25px;
    }

    p {
      padding: 25px 0px 40px 0px;
      max-width: 566px;
      font-weight: 400;
      font-size: 18px;
    }
  }

  @media (max-width: 420px) {
    flex-direction: column-reverse;

    img {
      width: 300px;
    }

    .CakePopsContent {
      display: flex;
      align-items: center;
      flex-direction: column;
      h1 {
        font-size: 32px;
        line-height: 36px;
        padding-bottom: 15px;
      }

      p {
        text-align: center;
        padding: 15px 0px 30px 0px;
        font-size: 16px;
      }
    }
  }
`;