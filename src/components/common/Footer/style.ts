import styled from '@emotion/styled';
export const FooterContainer = styled('footer')`
  background-color: #000;
  width: 100%;
  height: 408px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .copyright {
    p {
      color: #FFF;
      font-size: 18px;
      font-family: Poppins;
      text-align: center;
    }
  }

  .contentContainer {
    display: flex;
    justify-content: center;
    grid-column-gap: 115px;
    padding-bottom: 50px;

    .contact {
      span {
        color: #FFF;
        font-size: 18px;
        font-family: Poppins;
        font-weight: 600;
      }

      p {
        color: #FFF;
        font-size: 14px;
        font-family: Poppins;
      }
    }

    .linkWrapper {
      display: flex;
      .link {
        margin-right: 100px;
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

        p {
          font-family: Poppins;
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;
          padding-bottom: 5px;
        }
      }
    }

    .title {
      p {
        max-width: 450px;
        color: white;
        font-family: Poppins;
        font-size: 14px;
        line-height: 21px;
        padding-top: 10px;
      }

      .socialmedia {
        padding-top: 15px;

        > a {
          margin-right: 15px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    height: 600px;
    .contentContainer {
      justify-content: center;
      flex-direction: column;

      .linkWrapper {
        .link{
          margin: 0px;
        }
        display: flex;
        justify-content: space-around;
      }

      .contact {
        text-align: center;
        margin-top: 30px;
      }

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 30px;

        p {
          text-align: center;
        }
      }
    }
  }
  
@media (max-width: 420px) {
  height: 600px;
  .contentContainer {
    justify-content: center;
    flex-direction: column; 

    .linkWrapper {
      .link{
        margin: 0px;
      }
      display: flex;
      justify-content: space-around;
    }
    
    .contact {
      margin-top: 30px;
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 30px;

      p {
        text-align: center;
      }
    }
  }
}


`;