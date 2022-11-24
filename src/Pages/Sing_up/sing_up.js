import { postCadastro } from '../../Components/requisicoes/requicisoes'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import titulo from "../../Assets/Images/Recycle.png"

export default function Sing_up() {
    const [cadastrar, setcadastrar] = useState({});
    const [carregando, setcarregando] = useState([]);
    const [confirmasenha, setconfirmasenha] = useState([]);
    const navigate = useNavigate();

    function handleForm({ value, name }) {
        setcadastrar({
            ...cadastrar,
            [name]: value,
        });
    };

    function senhac({ value, name }) {
        setconfirmasenha({
            ...confirmasenha,
            [name]: value,
        });

    }
    function autoriza() {
        setcarregando(["referencia"])
        let resposta = postCadastro(cadastrar);
        if (cadastrar.password != confirmasenha.passwordconfirm) {
            return alert("As senhas precisam ser iguais!!")
        }
        resposta.then(() => {alert("Cadastro feito com sucesso!!!!") 

            navigate('/Sing_in')
        })
        resposta.catch((ref) => { if(ref.response.status) {alert(ref.response.data)} else {alert("Preencha corretamente todos os campos!!!")}})

    }

    return (
        <div className='fundo'>

            <div className='logo'>
                <img className='titulo_img' alt='' src={titulo} />;
                <h1 className='titulo'>Recycle Shop</h1>
            </div>

            <input name="name" type="text" placeholder='Nome' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input name="email" type="email" placeholder='E-mail' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input name="endereco" type="text" placeholder='Endereço' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input name="password" type="password" placeholder='Senha' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input name="passwordconfirm" type="password" placeholder='Confirme a senha' onChange={(e) => senhac({ name: e.target.name, value: e.target.value, })} />
            <button onClick={autoriza} className='Entrar'>Cadastrar</button>

            <Link className='link' to={'/sing_in'}>Já tem uma conta? Entre agora!</Link>
        </div>

    )
}