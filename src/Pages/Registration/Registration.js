import { postRegistration } from '../../Components/requisicoes/requicisoes'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import titulo from "../../Assets/Images/Recycle.png"
import '../Registration/Registration.css'


export default function Registration() {

    const [cadastrar, setcadastrar] = useState({});
    const [carregando, setcarregando] = useState([]);
    const navigate = useNavigate();

    let authorization = localStorage.getItem("token");

    function handleForm({ value, name }) {
        setcadastrar({
            ...cadastrar,
            [name]: value,
        });
    };

    function autoriza() {
        setcarregando(["referencia"])


        let resposta = postRegistration(authorization,cadastrar);

        resposta.then(() => {
            alert("Produto cadastrado com sucesso!")

            navigate('/')
        })
        resposta.catch((ref) => { if (ref.response.status) { alert(ref.response.data) } else { alert("Preencha corretamente todos os campos!!!") } })

    }


  
    return (
        <div className='fundo'>
    
            <div className='logo'>
                <img className='titulo_img' alt='' src={titulo} />;
                <h1 className='titulo'>Recycle Shop</h1>
            </div>
    
            <input className='input' name="product" type="text" placeholder='Produto' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input className='input' name="img" type="text" placeholder='Imagem(url)' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input className='input' name="description" type="text" placeholder='Descrição do produto' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input className='input' name="price" type="number" placeholder='Preço' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <select className='input' name="category" onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} >
                <option value="decoration">Decoração</option>
                <option value="furniture">Móveis</option>
                <option value="clothes">Vestuario</option>
                <option value="toys">Brinquedos</option>
                <option value="eletronics">Eletronicos</option>
    
            </select>
    
            <button onClick={autoriza} className='Entrar'>Cadastrar produto</button>
    
        </div>
    
    )

}


