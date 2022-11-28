import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headers from "../../Components/Header";
import { deleteProduct, getOneProduct } from "../../Components/requisicoes/requicisoes";
import { useAuth } from "../../Provider/auth";
import { ProductPageCss } from "./styles";



export default function ProductPage() {

    const { id } = useParams()

    const { user } = useAuth()

    const [product, setProduct] = useState({})

    useEffect(() => {

        getOneProduct(id)
            .then(e => {

                setProduct(e.data)
                console.log(e.data)
            })
            .catch(e => console.log(e.response.data))

    }, [])

    const ownerProduct = user.id === product.id_usuario

    function delProd(){
        
        const conf = window.confirm('Deseja deletar?')

        if(conf){

            deleteProduct(product._id, user.token).then((e)=>{
                console.log(e.data)
            }).catch((e)=>console.log(e.response.data))
        }
    }

    return (
        <>
            <Headers />
            {(product)?<ProductPageCss>
                <nav>
                    <img src={product.img} alt='Imagem Produto' />
                    <div>
                        <h1>{product.product}</h1>
                        <span>{product.description}</span>
                        <h2>R${Number(product.price).toFixed(2).replace('.', ',')}</h2>
                        <p>Vendedor: <b>{product.email}</b></p>

                    </div>
                </nav>
                {(ownerProduct) ? 
                <button onClick={delProd}>Deletar produto</button> 
                :(user.token)?<button onClick={() => console.log('Add no carrinho')}>Adicionar ao carrinho</button>:''}
            </ProductPageCss>:''}
        </>
    );
}