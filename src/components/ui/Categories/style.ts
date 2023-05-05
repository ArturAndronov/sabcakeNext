import styled from '@emotion/styled';

export const CategoriesWrapper = styled.div`
ul{
    display: flex;
}
li{
    background-color: #f9f9f9;
    padding: 15px 30px;
    border-radius: 30px;
    margin-right: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

    &:hover {
        background-color: darken($color: #f9f9f9, $amount: 2%);
    }

    &:active {
        background-color: darken($color: #f9f9f9, $amount: 5%);
    }

    &.active {
        background-color: #282828;
        color: #fff;
    }
}
`;