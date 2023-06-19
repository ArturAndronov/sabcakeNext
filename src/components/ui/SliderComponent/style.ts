import styled from '@emotion/styled';
import { Box } from "@mui/material";

export const SliderContainer = styled(Box)`
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
  
`;
export const SliderBox = styled(Box)`
  width: 100%;
  margin-top: 50px;


  .slick-list {
    margin: 0 -10px;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 30px;
  }

  /* Изменение расстояния между кнопками */
  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -40px;
  }
  
  /* Стили для активного кружка */
  .slick-dots li.slick-active button:before {
    color: #fff /* Здесь можно указать желаемый цвет */
  }

  /* Стили для неактивных кружков */
  .slick-dots li button:before {
    color: #fff; /* Здесь можно указать желаемый цвет */
  }
  
`