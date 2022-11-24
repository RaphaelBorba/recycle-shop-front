import styled from "styled-components";


export const HomePage = styled.main`
    
    margin-top: 180px;
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


export const CategoryList = styled.div`

    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 50px;
`;


export const ProductsBoard = styled.article`

    display: flex;
    width: 90%;
    margin: 0 auto;
    gap: 40px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-block: 50px;
`;