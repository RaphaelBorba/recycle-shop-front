import { HomePage, SearchZone } from "./styles";
import { useAuth } from "../../Provider/auth";
import { useState } from "react";



export default function Home() {

    const { user } = useAuth()

    const [search, setSearch] = useState('')

    function searchItem(){
        if(search){
            console.log('Enviando pesquisa')

        }else{
            console.log('Escreva Algo')
        }
    }


    return (

        <HomePage>

            <SearchZone>
                <input
                    placeholder="Estou procurando..." 
                    type='text'
                    onChange={(e)=>setSearch(e.target.value)}
                      />
                <button onClick={searchItem}>Buscar</button>
            </SearchZone>

        </HomePage>
    );
}