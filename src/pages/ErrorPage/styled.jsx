import styled from "styled-components";

export const ContainerCSS = styled.div`
    h1{
        font-size: 20vw;
        cursor: default;
        user-select: none;
    }
    p{
        margin-top: -10vw;
        font-size: 20px;
    }
`
export const ButtonCSS = styled.button`
    background-color: #ffbf60;
    border: none;
    border-radius: 5px;
    padding: 10px 40px 10px 40px;
    cursor: pointer;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    :hover{
        background-color: #ff9900;
    }
`