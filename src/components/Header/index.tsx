import { Link } from "react-router"
import { BsCart } from 'react-icons/bs'
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
                            <Link to='/carrinho' className="relative" title="Clique para ver seu carrinho">
                                <BsCart size={24}></BsCart>
                                <span className="absolute -top-2 left-4 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </MainDiv>
        </header>
    )
}