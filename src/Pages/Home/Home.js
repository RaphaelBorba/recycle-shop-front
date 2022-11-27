import { HomePage, SearchZone, CategoryList, ProductsBoard } from "./styles";
import { useAuth } from "../../Provider/auth";
import { useEffect, useState } from "react";
import Category from "./Category";
import Product from "./Products";
import Headers from "../../Components/Header";
import { getProducts } from "../../Components/requisicoes/requicisoes";



export default function Home() {

    const { user } = useAuth()

    const [productsList, setProductsList] = useState([])
    const [search, setSearch] = useState('')
    const [searchCategory, setSearchCategory] = useState('')

    console.log(user)

    useEffect(() => {

        getProducts(searchCategory)
            .then(e => {
                setProductsList(e.data)
            })
            .catch(e => {
                console.log(e.response.data)
            })

    }, [searchCategory])

    function searchItem() {
        if (search) {
            console.log('Enviando pesquisa')

        } else {
            console.log('Escreva Algo')
        }
    }

    const categorys = ['Decoração', 'Moveis', 'Vestuário', 'Brinquedos', 'Eletronicos']

    return (
        <>
            <Headers setSearchCategory={setSearchCategory} />
            <HomePage>

                <SearchZone>
                    <input
                        placeholder="Estou procurando..."
                        type='text'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchItem}>Buscar</button>
                </SearchZone>

                <CategoryList>
                    {categorys.map((e, i) => <Category key={i} type={e} setSearchCategory={setSearchCategory} />)}
                </CategoryList>

                <ProductsBoard>

                    {productsList.map((e,i) => <Product key={i} object={e}  />)}

                </ProductsBoard>

            </HomePage>
        </>
    );
}