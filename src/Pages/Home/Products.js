import { useAuth } from "../../Provider/auth";
import { ProductCard } from "./styles";

export default function Product() {

    const {user} = useAuth()

    return (

        <ProductCard>
            <img src={"https://picsum.photos/200/300"} alt={"produto"} />
            <div>
                <h1>{'Nome asdasda sdasdasd asdasd asda'}</h1>
                <span>{'asdasdasdqweqweqwasda sd asd asd asdasdasdasdasd asd asda sd asd asdasd asdqweqweqweqweqwe qweqweqwe qweqweq weq weqweqwe qwe qw eq weqweqweqweqweq weqweqwe qwe'}</span>
                <article>
                    <h1>R${'1000,00'}</h1>
                    
                    {(user.token)?
                    <nav>
                        <button onClick={() => console.log('pagina produto')}><ion-icon name="information-circle-outline"></ion-icon></button>
                        <button onClick={() => console.log('Add carrinho')}><ion-icon name="add-outline"></ion-icon></button>
                    </nav>
                    :
                    ''
                    }
                </article>
            </div>
        </ProductCard>
    );
}