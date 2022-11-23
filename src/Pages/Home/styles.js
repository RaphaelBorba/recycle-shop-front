import styled from "styled-components";


export const HomePage = styled.main`
    
    margin-top: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

`;
export const SearchZone = styled.nav`

    display: flex;
    justify-content: center;
    height: 50px;


    input{
        width: 50%;
        border: none;
        border-radius: 20px 0 0 20px;
        padding-left: 20px;
        font-size: 18px;
    }
    button{
        width: 100px;
        border: none;
        cursor: pointer;
        border-radius: 0 20px 20px 0;
        background-color: white;
        transition: .5s;
        font-size: 18px;
    }
    button:hover{
        background-color: #f0f0f0;
    }

`;