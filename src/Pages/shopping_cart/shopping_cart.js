import '../shopping_cart/shopping_cart.css'
import { getShopping_cart } from '../../Components/requisicoes/requicisoes'
import { useEffect, useState } from 'react';
import titulo from "../../Assets/Images/Recycle.png"

export default function Shopping_cart(){
    const [renderiza, setrenderiza] = useState(["ola"])

    let Authorization = localStorage.getItem("token");
    useEffect(() => {
        let resposta = getShopping_cart(Authorization)
        resposta.then((res) => {
            console.log(res.data)
        });
        resposta.catch(() => alert("Tivemos um problema para atualizar seu carrinho!!"))
    }, [Authorization, renderiza]);

   console.log()

    return (
        <div className='fundo'>
            <span className='topo_carrinho'><img alt='' src={titulo} />  <h1 className="Carrinho_titulo">Carrinho de compras</h1>  </span>
            
                      
          
        </div>
    )
} 