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

    input:focus{
        outline: none;
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

export const ProductCard = styled.div`

    width: 350px;
    height: 350px;
    min-width: 100px;
    border-radius: 10px;
    border: 1px solid rgb(78,223,0);
    -webkit-box-shadow: 0px 0px 18px 6px rgb(78,223,0); 
    box-shadow: 0px 0px 18px 0px rgb(78,223,0);
    img{
        width: 100%;
        height: 60%;
        border-radius: 10px 10px 0 0;
        padding: 1px;
    }
    div h1:first-child{
        font-size: 25px;
    }

    article h1:last-child{
        margin-top: 10px;
        font-size: 20px;
    }

    div{
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        h1{
            color: white;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        span{
            color: white;
            
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
    }

    article{
        display: flex;
        padding-right: 10px;
        align-items: center;
        justify-content: space-between;

        button{
            width: 40px;
            height: 40px;
            transition: 0.5s;
            font-size: 30px;
            cursor: pointer;
            border-radius: 100%;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    nav{
        display: flex;
        gap: 10px;
    }
    nav button:first-child:hover{
        background-color: #3480eb;
        color: white;
    }
    nav button:nth-child(2):hover{
        background-color: rgb(78,223,0);
        color: white;
    }
`;
export const Card = styled.div`

width: 80px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 10px;
cursor: pointer;

ion-icon{
    padding: 15px;
    background: linear-gradient(45deg, rgb(78,223,0) 0%, white 100%);
    border-radius: 100%;
    font-size: 30px;

}

h1{
    color: white;
    font-size: 15px;
}


`;