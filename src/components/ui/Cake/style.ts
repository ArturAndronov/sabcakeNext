import styled from '@emotion/styled';

export const CakeBlock = styled.div`
&.cake-block {
    text-align: center;
    margin-bottom: 65px;

    &:not(:nth-of-type(4n)) {
        margin-right: 35px;
    }

     .cake-block__title {
        font-size: 20px;
        font-weight: 900;
        letter-spacing: 1%;
        margin-bottom: 20px;
    }

     .cake-block__selector {
        display: flex;
        background-color: #f3f3f3;
        border-radius: 10px;
        flex-direction: column;
        padding: 6px;

        ul {
            display: flex;
            flex: 1;

            &:first-of-type {
                margin-bottom: 6px;
            }

            li{
                padding: 8px;
                flex: 1;
                cursor: pointer;
                font-weight: 600;
                font-size: 14px;

                &.active {
                    background: #fff;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
                    border-radius: 5px;
                    cursor: auto;
                }
            }           
        }
    }

     .cake-block__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }

     .cake-block__price {
        font-weight: bold;
        font-size: 22px;
        line-height: 27px;
        letter-spacing: 0.015em;
    }

    
}
 .cake-block__selector {
    div{
        text-decoration: underline;
    }
}
`