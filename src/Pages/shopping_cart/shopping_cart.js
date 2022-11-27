import '../shopping_cart/shopping_cart.css'
import { getShopping_card } from '../../Components/requisicoes/requicisoes'
import titulo from "../../Assets/Images/Recycle.png"

export default function Shopping_cart(){

    return (
        <div className='fundo'>
            <span className='topo_carrinho'><img alt='' src={titulo} />  <h1 className="Carrinho_titulo">Carrinho de compras</h1>  </span>
            
                      
          
        </div>
    )
} 