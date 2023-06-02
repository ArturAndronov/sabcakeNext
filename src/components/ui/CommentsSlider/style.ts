import styled from '@emotion/styled';
import { Box } from "@mui/material";

export const CommentsSliderContainer = styled(Box)`
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
  .slick-list {
    margin: 0 -10px;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 30px;
    color: #000;
  }

  /* Изменение расстояния между кнопками */
  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

`;