import styled from '@emotion/styled';
import {Button} from "@mui/material";
export const CustomButton = styled(Button)`
  background: #000;
  width: 316px;
  height: 71px;
  
  & a {
    text-decoration: none;
    color: #fff;
  }
  &:hover a{
     color: #000;
  } 
`;
