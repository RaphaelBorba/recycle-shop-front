import styled from "styled-components";






export default function Category({type}) {

    function ionIcon(typ){

        switch(typ){
            case 'Decoração':
                return "library-outline"
            case 'Moveis':
                return 'bed-outline'
            case 'Vestuário':
                return "glasses-outline"
            case 'Brinquedos':
                return 'airplane-outline'
            default:
                return
        }
    }


    return (
        <Card onClick={()=>console.log('Buscar categoria')}>
            <ion-icon name={ionIcon(type)} ></ion-icon>
            <h1>{type}</h1>
        </Card>
    );
}



const Card = styled.div`

    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    cursor: pointer;

    ion-icon{
        padding: 15px;
        background: linear-gradient(45deg, rgb(78,223,0) 0%, white 100%);
        border-radius: 100%;
        font-size: 30px;

    }

    h1{
        color: white;
        font-size: 15px;
    }


`;