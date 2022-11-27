import styled from "styled-components";


export const ProductPageCss = styled.main`

    margin: 200px auto 0 auto;
    padding: 20px;
    display: flex;
    max-width: 900px;
    color: white;
    gap: 30px;
    img{
        width: 400px;
        border-radius: 20px;

    }
    div{
        width: 400px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        text-align: center;

        h1{
            font-size: 40px;
        }
        span{
            font-size: 20px;
        }
        h2{
            font-size: 30px;
        }
        p{
            font-size: 20px;
        }
    }
`;
