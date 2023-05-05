import styled from '@emotion/styled';

export const HeaderStyled = styled.header`
    border-bottom: 1px solid #f6f6f6;
    padding: 40px 0;

    .container{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header__logo{
        display: flex;

        img{
            margin-left: 75px;
        }
        .logo__description{
            margin-left: 20px;
            margin-top: 15px;
            
        }
        h1{
            margin: 0;
            color: #181818;
            font-size: 24px;
            font-weight: 800;
        }

        p{
            margin: 0;
            color: #7B7B7B
        }
    }
    .header_cart {
        margin-right: 75px;
    }
    
}
`;