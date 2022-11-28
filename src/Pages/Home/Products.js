import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../Components/requisicoes/requicisoes";
import { useAuth } from "../../Provider/auth";
import { ProductCard } from "./styles";

export default function Product({object}) {

    const { user } = useAuth()

    const{description, img, price, product, _id, id_usuario} = object

    const navigate = useNavigate()

    const ownerProduct = user.id === id_usuario

    function delProd(){
        
        const conf = window.confirm('Deseja deletar?')

        if(conf){

            deleteProduct(_id, user.token).then((e)=>{
                console.log(e.data)

            }).catch((e)=>console.log(e.response.data))
            
            navigate('/')
        }
    }

    return (

        <ProductCard ownerProduct={ownerProduct}>
            <img src={img} alt={product} />
            <div>
                <h1>{product}</h1>
                <span>{description}</span>
                <article>
                    <h1>R${Number(price).toFixed(2).replace('.',',')}</h1>

                    <nav>
                        <button onClick={() => navigate(`/product/${_id}`)}><ion-icon name="information-circle-outline"></ion-icon></button>
                        {(ownerProduct) ?
                            <button onClick={delProd}><ion-icon name="trash-outline"></ion-icon></button>
                            :
                            (user.token)?
                            <button onClick={() => console.log('Add carrinho')}><ion-icon name="add-outline"></ion-icon></button>
                            :''
                        }
                    </nav>
                </article>
            </div>
        </ProductCard>
    );
}