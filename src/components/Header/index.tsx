import { Link } from "react-router"
import { MainDiv } from "../MainDiv"

export function Header() {
    return (
        <header className="bg-amber-100 py-4">
            <MainDiv>
                <nav className="flex items-center justify-between">
                    <Link to='/'>
                        <h1 className="text-2xl">PetShop</h1>
                    </Link>
                    <ul className="flex items-center gap-3">
                        <li>
                            <Link to='/'>
                                <span>Início</span>
                            </Link>
                        </li>
                        <li>
                            <Link to='/carrinho'>
                                <span>Carrinho</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </MainDiv>
        </header>
    )
}