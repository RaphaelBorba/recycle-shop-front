import LogoImg from '../Assets/Images/Recycle.png'
import styled from 'styled-components';
import { useAuth } from '../Provider/auth';
import { useNavigate } from 'react-router-dom';

export default function Headers() {

    const { user } = useAuth()

    const navigate = useNavigate()


    return (
        <Header>
            <nav onClick={()=>navigate('/')}>
                <img src={LogoImg} alt="Logo Site" />
                <h1>Recycle Shop</h1>
            </nav>
            {(user.token) ?
                <div>
                    <input type='button' value='Produto +' onClick={()=>navigate('/registration')} />
                </div>
                :
                <div>
                    <input type='button' value='Cadastrar' onClick={()=>navigate('/sing_up')} />
                    <input type='button' value='Entrar' onClick={()=>navigate('/sing_in')} />
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