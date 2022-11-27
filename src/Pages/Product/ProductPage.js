import Headers from "../../Components/Header";
import { ProductPageCss } from "./styles";



export default function ProductPage() {

    const product = {
        name: 'Bola',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbbbjFsgFb8Ifsk9u86oOYfFJT8fwRKmPTiw&usqp=CAU',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: 100,
        type: 'toys',
        owner: 'Raphael'
    }

    return (
        <>
            <Headers />
            <ProductPageCss>
                <nav>
                    <img src={product.image} alt='Imagem Produto' />
                    <div>
                        <h1>{product.name}</h1>
                        <span>{product.description}</span>
                        <h2>R${product.price.toFixed(2).replace('.', ',')}</h2>
                        <p>Vendedor: <b>{product.owner}</b></p>

                    </div>
                </nav>
                <button onClick={() => console.log('Add no carrinho')}>Adicionar ao carrinho</button>
            </ProductPageCss>
        </>
    );
}