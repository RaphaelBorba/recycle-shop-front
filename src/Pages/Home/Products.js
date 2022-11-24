import styled from "styled-components";




export default function Product() {

    return (

        <ProductCard onClick={()=>console.log('pagina do produto')}>
            <img src={"https://picsum.photos/200/300"} alt={"produto"} />
            <div>
                <h1>{'Nome asdasda sdasdasd asdasd asda'}</h1>
                <span>{'asdasdasdqweqweqw'}</span>
                <h1>R${'1000,00'}</h1>
            </div>
        </ProductCard>
    );
}


const ProductCard = styled.div`

    width: 350px;
    height: 350px;
    min-width: 100px;
    border-radius: 10px;
    border: 1px solid rgb(78,223,0);
    -webkit-box-shadow: 0px 0px 18px 6px rgb(78,223,0); 
    box-shadow: 0px 0px 18px 0px rgb(78,223,0);
    img{
        width: 100%;
        height: 50%;
        border-radius: 10px 10px 0 0;
        padding: 1px;
    }
    div h1:first-child{
        font-size: 25px;
    }

    div{
        padding: 15px;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        h1{
            color: white;
            font-size: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            
        }
        span{
            color: white;
            
            display: -webkit-box;
            -webkit-line-clamp: 4; /** número de linhas que você quer exibir */
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            
        }
    }

`;