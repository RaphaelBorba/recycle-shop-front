import { Card } from "./styles"

export default function Category({type, setSearchCategory}) {

    function ionIcon(type){

        switch(type){
            case 'Decoração':
                return "library-outline"
            case 'Moveis':
                return 'bed-outline'
            case 'Vestuário':
                return "glasses-outline"
            case 'Brinquedos':
                return 'airplane-outline'
            case 'Eletronicos':
                return 'camera-outline'
            default:
                return
        }
    }

    function categoryChoice(type){
        switch(type){
            case 'Decoração':
                setSearchCategory('decoration')
                return
            case 'Moveis':
                setSearchCategory('furniture')
                return
            case 'Vestuário':
                setSearchCategory('clothes')
                return
            case 'Brinquedos':
                setSearchCategory('toys')
                return
            case 'Eletronicos':
                setSearchCategory('eletronics')
                return
            default:
                return
        }
    }


    return (
        <Card onClick={()=>categoryChoice(type)}>
            <ion-icon name={ionIcon(type)} ></ion-icon>
            <h1>{type}</h1>
        </Card>
    );
}



