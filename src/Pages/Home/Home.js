import { HomePage, SearchZone, CategoryList } from "./styles";
import { useAuth } from "../../Provider/auth";
import { useState } from "react";
import Category from "./Category";



export default function Home() {

    const { user } = useAuth()

    const [search, setSearch] = useState('')

    function searchItem() {
        if (search) {
            console.log('Enviando pesquisa')

        } else {
            console.log('Escreva Algo')
        }
    }

    const categorys = ['Decoração', 'Moveis', 'Vestuário', 'Brinquedos']

    return (

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
                {categorys.map((e, i)=><Category key={i} type={e} />)}
            </CategoryList>

        </HomePage>
    );
}