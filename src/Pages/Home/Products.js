import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/auth";
import { ProductCard } from "./styles";

export default function Product({object}) {

    const { user } = useAuth()

    const{description, img, price, product, _id} = object

    const navigate = useNavigate()

    return (

        <ProductCard>
            <img src={img} alt={product} />
            <div>
                <h1>{product}</h1>
                <span>{description}</span>
                <article>
                    <h1>R${Number(price).toFixed(2).replace('.',',')}</h1>

                    <nav>
                        <button onClick={() => navigate(`/product/${_id}`)}><ion-icon name="information-circle-outline"></ion-icon></button>
                        {(user.token) ?
                            <button onClick={() => console.log('Add carrinho')}><ion-icon name="add-outline"></ion-icon></button>
                            :
                            ''
                        }
                    </nav>
                </article>
            </div>
        </ProductCard>
    );
}