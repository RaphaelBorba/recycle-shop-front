import { HomePage, Header } from "./styles";
import LogoImg from '../../Assets/Images/Recycle.png'
import { useAuth } from "../../Provider/auth";



export default function Home() {

    const { user } = useAuth()

    
    return (

        <HomePage>
            
        </HomePage>


    );
}