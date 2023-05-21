import styled from '@emotion/styled';
import {Badge, BadgeProps, Box} from "@mui/material";
export const StyledBadge = styled(Badge)<BadgeProps>(({theme}:any) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

// export const NavBox = styled(Box)`
//   backdrop-filter: saturate(180%) blur(20px);
//   position: fixed;
//   width: 100%;
//
// `;
 export const LinkBox = styled(Box)`
   display: flex;
   align-items: center;
   justify-content: space-between;

   & > a {
     margin-right: 65px;
     text-decoration: none;
     border-bottom: 2px solid transparent;
     transition: border-bottom 0.3s ease;

     &:hover {
       border-bottom: 2px solid #000000;
     }
   }
 `;
