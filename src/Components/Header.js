import LogoImg from '../Assets/Images/Recycle.png'
import styled from 'styled-components';
import { useAuth } from '../Provider/auth';

export default function Headers() {

    const { user } = useAuth()


    return (
        <Header>
            <div>
                <img src={LogoImg} alt="Logo Site" />
            </div>
            {(!user.token) ?
                <div>
                    <input type='button' value='Produto +' />
                </div>
                :
                <div>
                    <input type='button' value='Cadastrar' />
                    <input type='button' value='Entrar' />
                </div>
            }
        </Header>

    );
}

const Header = styled.header`

display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
height: 100px;
width: 100%;
border: 1px solid white;
top: 0;
left: 0;

div{
    display: flex;
    gap: 10px;
    margin-inline: 50px;

    input{
        width: 120px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: white;
        font-size: 20px;
        color: black;
        transition: 0.5s;
        cursor: pointer;
    }

    input:hover{
        background: rgb(78,223,0);
        color: white;
        
    }

    button{
        width: 120px;
        height: 50px;
        border-radius: 10px;
        border: none;
        background-color: white;
        font-size: 19px;
        color: black;
        transition: 0.5s;
        cursor: pointer;
    }
}
`;