import styled from "@emotion/styled";
import images from "@/assets/image";

export const Container = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;

`;

export const Header = styled('header')`
  position: fixed;
  width: 100%;
  background-color: transparent;
  box-shadow: none;
  padding: 10px;
  backdrop-filter: saturate(180%) blur(20px);

  .container{
    display: flex;
    justify-content: space-between;
    padding: 0px 215px;
  }
  
  .logo {
    display: flex;
    align-items: center;
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .menu > a {
    color: #000;
    margin-right: 65px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s ease;

    &:hover {
      border-bottom: 2px solid #000000;
    }
  }
`;
export const Footer = styled('footer')`
 
`;
export const FirstBlock = styled('main')`
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
`;

export const SecondBlock = styled('div')`
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
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ThirdBlock = styled('div')`
  background-color: #fff;
  height: 970px;
  padding: 100px 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  & .title{
    padding-bottom: 40px;
    max-width: 620px;
    h1{
      border-bottom: 3px solid #C9A74D;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 43px;
      padding-bottom: 25px;
      text-align: center;
    }
    p{
      padding: 25px 0px;
      font-family: Quicksand;
      font-weight: 400;
      font-size: 18px;
      text-align: center;
    }
  }
  & .content {
    display: flex;
    padding-bottom: 70px;
    
    & .number{
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
  }
`;

export const FourBlock = styled('div')`
 
`;
