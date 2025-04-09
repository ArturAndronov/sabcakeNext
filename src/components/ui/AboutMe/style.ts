import styled from '@emotion/styled';
import images from "@/assets/image";

export const AboutMeContainer = styled('div')`
  background-image: url(${images.aboutme.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 47rem;


    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


  & .imageContainer {
    

    img {
      max-width: 400px;
      max-height: 500px;
    }
  }


  & .aboutMeContent {
    padding-left: 20px;
  }
  & .sliderContainer {

    max-width: 499px;
    img {
      width: 100%;
      height: auto;
    }
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

  
  @media (max-width: 900px) {
    height: 1500px;
  
    .imageContainer {
  
      img {
        width: 500px;
        height: auto;
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
        max-width: 660px
      }
      padding: 0px;
    }
  }
  @media (max-width: 420px) {
    height: 1300px;
  
    .imageContainer {
      img {
        width: 350px;
        height: auto;
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
    & .sliderContainer {
      max-width: 390px;
    }
  }
  
  
  
`;
