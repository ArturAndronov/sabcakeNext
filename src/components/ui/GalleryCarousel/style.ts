import styled from '@emotion/styled';
import {Box} from "@mui/material";
export const ImageContainer = styled(Box)`
  & img {
    width: 100%;
    height: auto;
  }
`;
export const GalleryContainer = styled(Box)`
  width: 100%;
  margin: 0 auto;
  background-color: #000;
  
  .slick-slider {
    display: flex;
   
  }
  .slick-prev {
    z-index: 1;
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
  .slick-dots {
    display: none !important;
  }
  .slick-slide > div {
    width: 100%;
  }
`;
export const GalleryBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover > div {
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 18px;
  text-align: center;
`;
