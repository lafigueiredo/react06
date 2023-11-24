import { Link } from "react-router-dom"

export const Menu = () =>{
    return(

        <nav>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to={"/login"}>
                        Login
                    </Link>
                </li>

                <li>
                    <Link to={"/cadastrar"}>
                        Cadastrar
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
