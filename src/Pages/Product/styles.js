import styled from "styled-components";


export const ProductPageCss = styled.main`

    margin: 200px auto 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    max-width: 900px;
    color: white;
    nav{
        display: flex;
        gap: 30px;
    }
    button{
        width: 300px;
        height: 60px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        font-size: 20px;
        transition: .5s;
        margin-bottom: 30px;
    }
    button:hover{
        background: ${props => (props.ownerProduct)? 'red':'rgb(78,223,0)'} ;
        color: white;
    }
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