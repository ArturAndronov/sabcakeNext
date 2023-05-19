import styled from '@emotion/styled';

interface Props {
  bg: string
}


export const Wrapper = styled.div<Props>`
  background-color: ${({ bg }) => bg};
  border-radius: 20px;
  box-shadow: 0 15px 20px rgba(0,0,0,.03);
  height: 100%;
  margin: 50px;

  .header__logo {
    display: flex;
  }
  
  main {
    padding: 40px 65px;
    .content__top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .content__title {
      margin: 35px 0;
    }
    .content__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
 
  
  
  .container {
    .container--cart {
      max-width: 820px;
      margin: 90px auto;
  
      .content__title {
        margin: 0;
      }
    }
  }
  
  

  .sort {
    position: relative;

    &__label {
        display: flex;
        align-items: center;


        svg {
            margin-right: 8px;
        }

        b {
            margin-right: 8px;
        }

        span {
            color: #b1ca31;
            border-bottom: 1px dashed #b1ca31;
            cursor: pointer;
        }
    }
    &__popup {
        position: absolute;
        right: 0;
        margin-top: 15px;
        background: #fff;
        box-shadow: 0px 5px 15px rgba(0,0,0,0.09);
        border-radius: 10px;
        overflow: hidden;
        padding: 10px 0;
        width: 150px;

        ul{
            overflow: hidden;
            li{
                padding: 12px 20px;
                cursor: pointer;

                &.active,
                &:hover {
                    background: rgba(254, 95, 30, 0.05);
                }

                &.active {
                    font-weight: bold;
                    color: #b1ca31;
                }
            }
        }
    }
}
}
`;
