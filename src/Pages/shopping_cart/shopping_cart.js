import '../shopping_cart/shopping_cart.css'
import { postRegistration } from '../../Components/requisicoes/requicisoes'
import titulo from "../../Assets/Images/Recycle.png"

export default function Shopping_cart(){

    return (
        <div className='fundo'>
            <span className='topo_carrinho'><img alt='' src={titulo} />  <h1 className="Carrinho_titulo">Carrinho de compras</h1>  </span>
            {
                        habitos.map((ref) => {

                            return (
                                <div className="meushabitos">
                                    <img onClick={() => { deletaHabitos(ref.id) }} alt="" src={lixeira} />
                                    {ref.name}
                                    <div className="dias">
                                        {ref.days.findIndex(element => element === 0) === -1 ? <button className="dia"> D </button> : <button className="diaselecionado"> D </button>}
                                        {ref.days.findIndex(element => element === 1) === -1 ? <button className="dia"> S </button> : <button className="diaselecionado"> S </button>}
                                        {ref.days.findIndex(element => element === 2) === -1 ? <button className="dia"> T </button> : <button className="diaselecionado"> T </button>}
                                        {ref.days.findIndex(element => element === 3) === -1 ? <button className="dia"> Q </button> : <button className="diaselecionado"> Q </button>}
                                        {ref.days.findIndex(element => element === 4) === -1 ? <button className="dia"> Q </button> : <button className="diaselecionado"> Q </button>}
                                        {ref.days.findIndex(element => element === 5) === -1 ? <button className="dia"> S </button> : <button className="diaselecionado"> S </button>}
                                        {ref.days.findIndex(element => element === 6) === -1 ? <button className="dia"> S </button> : <button className="diaselecionado"> S </button>}
                                    </div>
                                </div>)
                        })
                    }
          
        </div>
    )
} 