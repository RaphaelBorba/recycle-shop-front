import { HomePage, SearchZone, CategoryList, ProductsBoard } from "./styles";
import { useEffect, useState } from "react";
import Category from "./Category";
import Product from "./Products";
import Headers from "../../Components/Header";
import { getProducts } from "../../Components/requisicoes/requicisoes";


export default function Home() {


    const [productsList, setProductsList] = useState([])
    const [search, setSearch] = useState('')
    const [searchCategory, setSearchCategory] = useState('')
    const [refresh, setRefresh] = useState(true)

    useEffect(() => {

        getProducts(searchCategory,'')
            .then(e => {
                setProductsList(e.data)
            })
            .catch(e => {
                console.log(e.response.data)
            })

    }, [searchCategory, refresh])

    function searchItem() {
        if (search) {
            
            getProducts('',search)
            .then(e => {
                setProductsList(e.data)
            })
            .catch(e => {
                console.log(e.response.data)
            })

        } else {
            console.log('Escreva Algo')
        }
    }

    const categorys = ['Decoração', 'Moveis', 'Vestuário', 'Brinquedos', 'Eletronicos']

    return (
        <>
            <Headers setSearchCategory={setSearchCategory}  setSearch={setSearch} setRefresh={setRefresh} refresh={refresh}/>
            <HomePage>

                <SearchZone>
                    <input
                        placeholder="Estou procurando..."
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchItem}>Buscar</button>
                </SearchZone>

                <CategoryList>
                    {categorys.map((e, i) => <Category key={i} type={e} setSearchCategory={setSearchCategory} />)}
                </CategoryList>

                <ProductsBoard>

                    {productsList.map((e,i) => <Product key={i} object={e} setRefresh={setRefresh} refresh={refresh}  />)}

                </ProductsBoard>

            </HomePage>
        </>
    );
}