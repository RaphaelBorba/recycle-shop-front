import '../shopping_cart/shopping_cart.css'
import { getShopping_cart, deleteShopping_cart } from '../../Components/requisicoes/requicisoes'
import { postSend } from '../../Components/requisicoes/requicisoes'
import { useEffect, useState } from 'react';
import titulo from "../../Assets/Images/Recycle.png"
import { useNavigate } from 'react-router-dom'
import Headers from '../../Components/Header';

export default function Shopping_cart() {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(true)
    const [carrinho, setcarrinho] = useState([])
    const [cadastrar, setcadastrar] = useState({});

    let total = Number();
    let Authorization = JSON.parse(localStorage.getItem("user")).token;

    function handleForm({ value, name }) {
        setcadastrar({
            ...cadastrar,
            [name]: value,
        });
    };

    useEffect(() => {
        let resposta = getShopping_cart(Authorization)
        resposta.then((res) => {
            setcarrinho(res.data)

        });
        resposta.catch(() => alert("Tivemos um problema para atualizar seu carrinho!!"))
// eslint-disable-next-line
    },[refresh]);


    if (carrinho.length > 0) {

        for (let i = 0; i < carrinho.length; i++) {

            total = total + Number(carrinho[i].price)

        }
    }


    function autoriza() {

        setRefresh(!refresh)

        let resposta = postSend(Authorization, cadastrar)
        resposta.then((ref) => {
            alert("produto vendido com sucesso!!")
            navigate('/')
        })
        resposta.catch((ref) => { console.log(ref.response.data) })

    }
    function deleta(id) {
        console.log(id)
        let deletar = deleteShopping_cart(Authorization, id)
        deletar.then((ref) => {
            alert("produto deletado com sucesso!!")
            setRefresh(!refresh)
        })
        deletar.catch((ref) => { console.log(ref.response.data) })
        
    }


    return (
        <div className='fundo_carrinho'>
            <Headers />
            <span className='topo_carrinho'><img alt='' src={titulo} />  <h1 className="Carrinho_titulo">Carrinho de compras</h1>  </span>
            <ul className='carrinho'>
                {carrinho.map((ref, index) => {
                    return <li key={index} className='li'>
                        <img alt="" src={ref.img} />
                        <div className='descricao'>
                            <h1 className='product'> {ref.product}</h1>
                            <h1 className='description'> {ref.description}</h1>
                        </div>
                        <h1 className='price'> R${ref.price}</h1>
                        <button onClick={()=>deleta(ref._id)} className='delete_cart'> X </button>
                    </li>
                })}

            </ul>
            <div className='total'> <h1>Total:       R${total.toFixed(2)}</h1> </div>
            <div className='concluir_pagamento'>
                <h1>Forma de pagamento:</h1>

                <select className='pagamento' name="pagamento" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} >
                    <option value="credit_card">Cartão de cŕedito</option>
                    <option value="debit_card">Cartão de débito</option>
                    <option value="pix">Pix</option>

                </select>

                <button onClick={autoriza} className='Entrar'>Concluir compra</button>
            </div>

        </div>
    )
}   