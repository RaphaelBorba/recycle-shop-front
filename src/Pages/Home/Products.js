import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Provider/auth";
import { ProductCard } from "./styles";

export default function Product() {

    const { user } = useAuth()

    const navigate = useNavigate()

    const idProduct =1

    return (

        <ProductCard>
            <img src={"https://picsum.photos/200/300"} alt={"produto"} />
            <div>
                <h1>{'Nome asdasda sdasdasd asdasd asda'}</h1>
                <span>{'asdasdasdqweqweqwasda sd asd asd asdasdasdasdasd asd asda sd asd asdasd asdqweqweqweqweqwe qweqweqwe qweqweq weq weqweqwe qwe qw eq weqweqweqweqweq weqweqwe qwe'}</span>
                <article>
                    <h1>R${'1000,00'}</h1>

                    <nav>
                        <button onClick={() => navigate(`/product/${idProduct}`)}><ion-icon name="information-circle-outline"></ion-icon></button>
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