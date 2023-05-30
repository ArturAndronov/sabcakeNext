import styled from '@emotion/styled';
import {Box} from "@mui/material";
export const FooterBoxImg = styled(Box)`
   padding-top: 15px;

   > a{
     margin-right: 15px;
    
   }
 
 `;
export const LinkBoxFooter = styled(Box)`
  font-family: Poppins;
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
`;