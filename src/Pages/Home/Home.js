import { HomePage } from "./styles";
import { useAuth } from "../../Provider/auth";



export default function Home() {

    const { user } = useAuth()


    return (

        <HomePage>
            
        </HomePage>


    );
}