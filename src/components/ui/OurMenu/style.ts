import styled from '@emotion/styled';
import Link from "@mui/material/Link";
import images from "@/assets/image";
import {Button} from "@mui/material";
export const LinkOurMenu =  styled(Link)`
    text-decoration: none;
`;
export const CustomButtonOurMenu = styled(Button)`
  background: #fff;
  width: 272px;
  height: 71px;
  border-radius: 20px;
  
  & a {
    text-decoration: none;
    color: #000;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  &:hover a{
     color: #fff;
  } 
`;

export const OurMenuContainer = styled('div')`
  background-image: url(${images.ourmenu.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 1157px;
  display: flex;
  align-items: center;
  justify-content: center;

  .OurMenuContainer {
    display: flex;
    flex-direction: column;
    align-items: center;

    .OurMenuContentContainer {
      max-width: 1400px;
      display: flex;
      grid-column-gap: 230px;
      flex-wrap: wrap;

    }

    .OurMenuTitle {
      padding-bottom: 50px;
      max-width: 620px;

      h1 {
        border-bottom: 3px solid #C9A74D;
        color: #fff;
        font-family: Rubik;
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 43px;
        padding-bottom: 25px;
        text-align: center;
      }

      p {
        padding-top: 25px;
        font-family: Quicksand;
        color: #fff;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
      }
    }

    .OurMenuContent {
      display: flex;
      padding-bottom: 60px;

      div:nth-child(2) {
        padding-left: 15px;
      }

      img {
        max-height: 200px;
        max-width: 200px;
      }

      h1 {
        color: #fff;
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 36px;
      }

      p {
        max-width: 369px;
        padding: 25px 0px;
        font-family: Poppins;
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
  @media (max-width: 900px) {
    height: 1500px;
    .OurMenuContainer {
      .OurMenuContentContainer {
        justify-content: center;
      }

      .OurMenuTitle {
        h1 {
          font-size: 36px;
          padding-bottom: 15px;
        }

        p {
          padding-top: 15px;
          font-size: 20px;
        }
      }

      .OurMenuContent {
        h1 {
          font-size: 26px;
        }

        p {
          padding: 15px 0px;
          font-size: 16px;
        }
      }
    }
  }
  
  @media (max-width: 420px) {
    height: 1700px;
    .OurMenuContainer {
      .OurMenuTitle {
        h1 {
          font-size: 32px;
          padding-bottom: 15px;
        }

        p {
          padding-top: 15px;
          font-size: 16px;
        }
      }

      .OurMenuContent {
        h1 {
          font-size: 22px;
        }

        p {
          padding: 15px 0px;
          font-size: 12px;
        }
      }
    }
  }
`;