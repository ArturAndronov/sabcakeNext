import styled from "@emotion/styled";
import images from "@/assets/image";

export const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;

`;

    export const Nav = styled('header')`
      position: fixed;
      width: 100%;
      background-color: transparent;
      box-shadow: none;
      padding: 10px;
      backdrop-filter: saturate(180%) blur(20px);
    
      .container{
        display: flex;
        justify-content: space-around;
      }
      
      .logo {
        display: flex;
        align-items: center;
        img{
          max-width: 100%;
          height: auto;
        }
      }
    
      .menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        a{
          color: #000;
          margin-right: 65px;
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.3s ease;

          &:hover {
            border-bottom: 2px solid #000000;
          }
        }
        a:nth-child(4) {
          margin-right: 0px;
        }
      }
      
      @media (max-width: 420px) {
        .container{
          justify-content: space-between;
        }
        .logo{
          width: 115px;
        }
        .menu > a {
          margin-right: 15px;
        }
      }
    `;

export const Header = styled('main')`
  background-image: url(${images.BG.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 258px;
  }
  h1{
    border-bottom: 3px solid #C9A74D;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 114px;
    padding-bottom: 25px;
  }
  p{
    padding: 25px 0px;
    max-width: 650px;
    font-weight: 400;
    font-size: 24px;
  }
  @media (max-width: 900px) {
    .container{
      align-items: center;
      padding: 0px;
      h1{
        font-size: 84px;
        line-height: 92px;
        padding-bottom: 15px;
      }
      p{
        text-align: center;
      }

    }
  }
  @media (max-width: 420px) {
    height: 750px;
    .container{
      align-items: center;
      padding: 0px;
      h1{
        font-size: 76px;
        line-height: 74px;
        padding-bottom: 15px;
        text-align: center;
      }
      p{
        text-align: center;
      }
      
    }
  }

 
  
`;

export const AboutMe = styled('div')`
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
    padding-right: 20px;

    & img {
      max-width: 100%;
      height: auto;
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
        width: 500px;
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

      img {
        width: 350px;
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

export const BestProduct = styled('div')`
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

export const Review = styled('div')`
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
export const ChooseFlavor = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FDFAF4;
  height: 750px;

  img {
    max-width: 100%;
    height: auto;
  }

  .ChooseContent {
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
      max-width: 700px;
      font-weight: 400;
      font-size: 18px;
    }
  }

  @media (max-width: 420px) {
    flex-direction: column;
    
    img {
      width: 300px;
    }

    .ChooseContent {
      display: flex;
      align-items: center;
      flex-direction: column;
      
      h1 {
        font-size: 32px;
        line-height: 36px;
        padding-bottom: 25px;
      }

      p {
        text-align: center;
        padding: 15px 0px 30px 0px;
        font-size: 16px;
      }
    }
  }
`;
export const CakePops = styled('div')`
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
export const OurMenu = styled('div')`
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
export const Footer = styled('footer')`
  background-color: #000;
  width: 100%;
  height: 408px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .copyright {
    p {
      color: #FFF;
      font-size: 18px;
      font-family: Poppins;
      text-align: center;
    }
  }

  .contentContainer {
    display: flex;
    justify-content: center;
    grid-column-gap: 115px;
    padding-bottom: 50px;

    .contact {
      span {
        color: #FFF;
        font-size: 18px;
        font-family: Poppins;
        font-weight: 600;
      }

      p {
        color: #FFF;
        font-size: 14px;
        font-family: Poppins;
      }
    }

    .linkWrapper {
      display: flex;
      .link {
        margin-right: 100px;
        display: flex;
        flex-direction: column;
        color: #fff;

        & > a {
          font-weight: 400;
          font-size: 14px;
          line-height: 30px;
          text-decoration: none;
          color: #fff;
          border-bottom: 2px solid transparent;
          transition: border-bottom 0.3s ease;

          &:hover {
            border-bottom: 2px solid #fff;
          }
        }

        p {
          font-family: Poppins;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          padding-bottom: 5px;
        }
      }
    }

    .title {
      p {
        max-width: 450px;
        color: white;
        font-family: Poppins;
        font-size: 14px;
        line-height: 21px;
        padding-top: 10px;
      }

      .socialmedia {
        padding-top: 15px;

        > a {
          margin-right: 15px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    height: 600px;
    .contentContainer {
      justify-content: center;
      flex-direction: column;

      .linkWrapper {
        .link{
          margin: 0px;
        }
        display: flex;
        justify-content: space-around;
      }

      .contact {
        text-align: center;
        margin-top: 30px;
      }

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;

        p {
          text-align: center;
        }
      }
    }
  }
  
@media (max-width: 420px) {
  height: 600px;
  .contentContainer {
    justify-content: center;
    flex-direction: column; 

    .linkWrapper {
      .link{
        margin: 0px;
      }
      display: flex;
      justify-content: space-around;
    }
    
    .contact {
      margin-top: 30px;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;

      p {
        text-align: center;
      }
    }
  }
}


`;