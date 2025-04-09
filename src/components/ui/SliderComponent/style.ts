import styled from '@emotion/styled';
import { Box } from "@mui/material";

export const SliderContainer = styled(Box)`
 & .imageContainerSlider {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  height: 100%; /* Ensure that the container takes the full height of the slider */

  img {
    margin-left: 55px;
    max-width: 400px;
    height: auto; /* Maintain the aspect ratio */
  }
}
.slick-prev:before, .slick-next:before {
  font-size: 30px;
}
.slick-prev {
  z-index: 2;
  left: 20px;
}

.slick-next {
  right: 20px;
}





/* Стили для активного кружка */
.slick-dots li.slick-active button:before {
  color: #fff /* Здесь можно указать желаемый цвет */
}

/* Стили для неактивных кружков */
.slick-dots li button:before {
  color: #fff; /* Здесь можно указать желаемый цвет */
}



@media (max-width: 420px) {
  & .imageContainerSlider {
    img {
      margin-left: 20px;
      max-width: 350px;
      height: auto; /* Maintain the aspect ratio */
    }
  }
  .slick-prev:before, .slick-next:before {
    font-size: 30px;
    display: none
  }

}
`;