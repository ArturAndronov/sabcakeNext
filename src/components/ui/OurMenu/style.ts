import styled from '@emotion/styled';
import Link from "@mui/material/Link";
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
