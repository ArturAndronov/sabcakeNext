import styled from '@emotion/styled';
import {Badge, BadgeProps, Box} from "@mui/material";
export const NavContainer = styled('header')`
      z-index: 2;
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

        .mobile__menu{
          display: flex;
          align-items: center;
        }
        
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
        //a:nth-child(4) {
        //  margin-right: 0px;
        //}
      }
     
      @media (max-width: 420px) {
        .container{
          justify-content: space-between;
          padding-right: 20px;
        }
        .logo{
          width: 115px;
        }
        .menu > a {
          margin-right: 15px;
        }
      }
    `;



