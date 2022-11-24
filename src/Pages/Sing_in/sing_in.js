import { Link, useNavigate } from 'react-router-dom'
import { postLogin } from '../../Components/requisicoes/requicisoes'
import { useState } from 'react';
import '../Sing_in/sing_in.css'
import titulo from "../../Assets/Images/Recycle.png"

export default function Sing_in({ setdados }) {

    const [login, setlogin] = useState({});
    const [carregando, setcarregando] = useState([]);
    const navigate = useNavigate();


    function handleForm({ value, name }) {
        setlogin({
            ...login,
            [name]: value,
        });
    };

    function autoriza() {
        setcarregando(["referencia"])
        let resposta = postLogin(login);
        resposta.then((ref) => {
            setdados(ref.data)
            localStorage.setItem("token", ref.data.token);
            navigate('/home')
        })
        resposta.catch((ref) => { alert(ref.response.data) })

    }


    return (

        <div className='fundo'>
            <div className='logo'>
                <img className='titulo_img' alt='' src={titulo} />;
                <h1 className='titulo'>Recycle Shop</h1>
            </div>

            <input name="email" type="email" placeholder='E-mail' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <input name="password" type="password" placeholder='Senha' onChange={(e) => handleForm({ name: e.target.name, value: e.target.value, })} />
            <button onClick={autoriza} className='Entrar'>Entrar</button>
            <Link className='link' to={'/cadastro'}>Não tem uma conta? Cadastre-se!</Link>
        </div>



    );
}