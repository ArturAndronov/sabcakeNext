import styled from '@emotion/styled';
import images from "@/assets/image";
import {Box} from "@mui/material";
export const ImageContainer = styled(Box)`
  & img {
    width: 100%;
    height: auto;
  }
`;

export const AboutMeContainer = styled('div')`
  display: flex;
  justify-content: center;
  background-image: url(${images.aboutme.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 753px;

  & .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  & .aboutMeContent {
    padding-right: 50px;
  }

  h1 {
    color: #fff;
    border-bottom: 3px solid #C9A74D;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 43px;
    padding-bottom: 25px;
  }

  p {
    max-width: 600px;
    color: #fff;
    font-family: Quicksand;
    font-weight: 500;
    font-size: 18px;
    padding-top: 25px;
  }

  .imageContainer {
    max-width: 600px;
    padding-right: 20px;

    img {
      width: 100%;
      height: auto;
    }
    .slick-prev:before, .slick-next:before {
      font-size: 30px;
    }
    .slick-prev {
      z-index: 2;
      left: -20px;
    }

    .slick-next {
      right: -20px;
    }
  }
  @media (max-width: 900px) {
    height: 1500px;
    .container {
      justify-content: center;
    }

    .imageContainer {
   
      padding: 0px;

      img {
        width: 100%;
        height: auto;
      }
      .slick-prev:before, .slick-next:before {
        font-size: 20px;
      }
      .slick-prev {
        z-index: 2;
        left: -20px;
      }

      .slick-next {
        right: -20px;
      }
    }

    h1 {
      text-align: center;
      font-weight: 400;
      font-size: 32px;
      padding-bottom: 5px;
    }

    p {
      text-align: center;
      font-weight: 500;
      font-size: 18px;
      padding-top: 5px;
    }

    .aboutMeContent {
      p{
        max-width: 650px
      }
      padding: 0px;
    }
  }
  @media (max-width: 420px) {
    height: 1300px;
    .container {
      justify-content: center;
    }

    .imageContainer {
      padding: 0px;
      max-width: 350px;
      
      img {
        width: 100%;
        height: auto;
      }
      .slick-prev:before, .slick-next:before {
        font-size: 20px;
      }
      .slick-prev {
        z-index: 2;
        left: -20px;
      }

      .slick-next {
        right: -20px;
      }
    }

    h1 {
      text-align: center;
      font-weight: 200;
      font-size: 28px;
      padding-bottom: 5px;
    }

    p {
      text-align: center;
      font-weight: 500;
      font-size: 14px;
      padding-top: 5px;
    }

    .aboutMeContent {
      padding: 0px;
    }
  }

  
`;
