import styled from '@emotion/styled';
import images from "@/assets/image";

export const ReviewContainer = styled('div')`
  background-image: url(${images.review.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 713px;
  display: flex;
  justify-content: center;
  align-items: center;

  .ReviewContent{
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
      border-bottom: 3px solid #C9A74D;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 43px;
      padding-bottom: 25px;
    }
    p{
      max-width: 992px;
      padding: 25px 0px;
      font-family: Quicksand;
      font-weight: 400;
      font-size: 24px;
      text-align: center;
    }
    span{
      font-family: Rubik;
      font-weight: 400;
      font-size: 31px;
      line-height: 38px;
      text-align: center;
      padding-bottom: 45px;
    }
  }

  @media (max-width: 420px) {
    .ReviewContent {
      h1 {
        font-size: 28px;
        line-height: 32px;
        padding-bottom: 15px;
      }

      p {
        padding: 15px 0px;
        font-size: 20px;
      }

      span {
        font-size: 31px;
        line-height: 38px;
        padding-bottom: 45px;
      }
    }
  }
`;
