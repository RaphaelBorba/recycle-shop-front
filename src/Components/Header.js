import LogoImg from '../Assets/Images/Recycle.png'
import styled from 'styled-components';
import { useAuth } from '../Provider/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Headers({ setSearchCategory, setSearch, setRefresh, refresh }) {

    const { user, setUser } = useAuth()

    const localUser = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {

        console.log(localUser);

        if (localUser) {
            setUser(localUser)
        }

    }, [])

    const navigate = useNavigate()

    function backHome() {
        if (setSearchCategory || setSearch || setRefresh) {
            setSearchCategory('')
            setSearch('')
            setRefresh(!refresh)
        }
        navigate('/')
    }

    function logout() {

        const conf = window.confirm('Deseja sair?')

        if (!conf) {
            return
        }
        setUser({
            name: '',
            token: ''
        })
        localStorage.removeItem('user')
        navigate('/')
    }


    return (
        <Header>
            <nav onClick={backHome}>
                <img src={LogoImg} alt="Logo Site" />
                <h1>Recycle Shop</h1>
            </nav>
            {(user.token || localUser) ?
                <div>
                    <input type='button' value='Carrinho' onClick={() => navigate('/shopping_cart')} />
                    <input type='button' value='Produto +' onClick={() => navigate('/registration')} />
                    <input type='button' value='Sair' onClick={logout} />
                </div>
                :
                <div>
                    <input type='button' value='Cadastrar' onClick={() => navigate('/sing_up')} />
                    <input type='button' value='Entrar' onClick={() => navigate('/sing_in')} />
                </div>
            }
        </Header>

    );
}

const Header = styled.header`

background-color: black;
z-index: 1;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
height: 130px;
width: 100%;

nav{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-inline: 80px;
    cursor: pointer;

    h1{
        font-family: 'Anton', sans-serif;
        font-size: 40px;
        background: -webkit-linear-gradient(left, rgb(78,223,0) 0%, white 100%);
        background: linear-gradient(to right, rgb(78,223,0) 0%, white 100%);

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
}

div{
    display: flex;
    align-items: center;
    gap: 30px;
    margin-inline: 80px;

    input{
        width: 120px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: white;
        font-size: 18px;
        color: black;
        transition: 0.5s;
        cursor: pointer;
    }

    input:hover{
        background: rgb(78,223,0);
        color: white;
        font-size: 20px;
        
    }
}
`;