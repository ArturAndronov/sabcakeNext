import styled from '@emotion/styled';
import {Button} from "@mui/material";
import images from "@/assets/image";
export const HeaderContainer = styled('main')`
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
export const CustomButton = styled(Button)`
  background: #000;
  width: 316px;
  height: 71px;
  
  & a {
    text-decoration: none;
    color: #fff;
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
  &:hover a{
     color: #000;
  } 
`;
