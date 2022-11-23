

export default function Headers() {

    return (
        <Header>
            <div>
                <img src={LogoImg} alt="Logo Site" />
            </div>
            {(user.token) ?
                <div>
                    <button>Cadastrar Produto</button>
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
padding: 10px;

div{
    display: flex;
    gap: 10px;
}
`;